<template>
  <div>
    <!-- Fenêtre façon tmux -->
    <div class="border-2 border-lilac bg-ink-deep shadow-dur-8 shadow-primary">
      <!-- Barre de titre -->
      <div class="flex items-center gap-3 border-b-2 border-lilac bg-primary-dark px-4 py-2.5 font-mono text-[13px] text-lilac">
        <span class="h-2.5 w-2.5 flex-none border border-lilac bg-primary" aria-hidden="true"></span>
        <span class="h-2.5 w-2.5 flex-none border border-lilac bg-muted-light" aria-hidden="true"></span>
        <span class="h-2.5 w-2.5 flex-none border border-lilac bg-bg-light" aria-hidden="true"></span>
        <span class="mx-auto truncate pr-[54px]">harry@elvalio: tmux attach -t music</span>
      </div>

      <!-- Chargement -->
      <div v-if="state === 'loading'" class="min-h-[300px] p-6 font-mono text-sm" role="status">
        <p class="text-muted"><span class="text-accent-text">$</span> curl -s music.json</p>
        <p class="mt-2 flex items-center gap-2 text-muted-light">chargement des écoutes… <span class="curseur inline-block h-4 w-2 bg-accent-text" aria-hidden="true"></span></p>
      </div>

      <!-- Erreur réseau : message discret, le reste de la page continue -->
      <div v-else-if="state === 'error'" class="p-6 font-mono text-sm" role="status">
        <p class="text-muted"><span class="text-accent-text">$</span> curl -s music.json</p>
        <p class="mt-2 text-lilac">[err] statistiques indisponibles pour le moment</p>
        <p class="mt-1 text-muted-light">Le détail reste visible sur <a :href="music.profile" target="_blank" rel="noopener noreferrer">mon profil ListenBrainz ↗</a></p>
      </div>

      <!-- Statistiques -->
      <div v-else class="grid md:grid-cols-2">
        <!-- Titres : tout l'historique, puis 7 jours -->
        <section v-for="pane in trackPanes" :key="pane.flag" class="min-w-0 p-5 sm:p-6" :class="pane.border" :aria-labelledby="`musique-${pane.id}`">
          <h3 :id="`musique-${pane.id}`" class="font-mono text-[15px]">
            <span class="text-accent-text" aria-hidden="true">❯</span> <span class="font-bold text-lilac">top tracks</span> <span class="text-muted">{{ pane.flag }}</span>
          </h3>
          <ol v-if="pane.items.length" class="mt-3 flex flex-col font-mono text-[13px] sm:text-sm">
            <li v-for="(t, i) in pane.items" :key="i" class="grid grid-cols-[1.75rem_minmax(0,1.3fr)_minmax(0,1fr)_2.25rem] items-baseline gap-x-3 py-1.5">
              <span class="text-accent-text">{{ rank(i) }}</span>
              <span class="truncate font-bold text-bg-light" :title="t.track">{{ t.track }}</span>
              <span class="truncate text-muted-light" :title="t.artist"><span class="sr-only">par </span>{{ t.artist }}</span>
              <span class="text-right tabular-nums text-muted">{{ t.plays }}<span class="sr-only"> écoutes</span></span>
            </li>
          </ol>
          <p v-else class="mt-3 font-mono text-sm text-muted">{{ pane.empty }}</p>
        </section>

        <!-- Artistes, avec barres de proportion -->
        <section class="min-w-0 border-b-2 border-line p-5 sm:p-6 md:border-b-0 md:border-r-2" aria-labelledby="musique-artistes">
          <h3 id="musique-artistes" class="font-mono text-[15px]">
            <span class="text-accent-text" aria-hidden="true">❯</span> <span class="font-bold text-lilac">top artists</span> <span class="text-muted">--all-time</span>
          </h3>
          <ol v-if="artists.length" class="mt-3 flex flex-col font-mono text-[13px] sm:text-sm">
            <li
              v-for="(a, i) in artists"
              :key="i"
              class="grid grid-cols-[1.75rem_minmax(0,7rem)_minmax(0,1fr)_2.75rem] items-center gap-x-3 py-1.5 sm:grid-cols-[1.75rem_minmax(0,9.5rem)_minmax(0,1fr)_3rem]"
            >
              <span class="text-accent-text">{{ rank(i) }}</span>
              <span class="truncate font-bold text-bg-light" :title="a.artist">{{ a.artist }}</span>
              <span class="h-2.5 bg-primary-dark" aria-hidden="true">
                <span class="block h-full" :style="{ width: `${a.share}%`, backgroundColor: barTones[i % barTones.length] }"></span>
              </span>
              <span class="text-right tabular-nums text-muted">{{ a.plays }}<span class="sr-only"> écoutes</span></span>
            </li>
          </ol>
          <p v-else class="mt-3 font-mono text-sm text-muted">(aucun artiste pour l'instant)</p>
        </section>

        <!-- Activité : heatmap jour × heure + compteurs -->
        <section class="min-w-0 p-5 sm:p-6" aria-labelledby="musique-activite">
          <h3 id="musique-activite" class="font-mono text-[15px]">
            <span class="text-accent-text" aria-hidden="true">❯</span> <span class="font-bold text-lilac">activity</span> <span class="text-muted">--heatmap</span>
          </h3>

          <div v-if="heat" class="mt-4" role="img" :aria-label="heat.label">
            <div class="grid grid-cols-[1.25rem_repeat(24,minmax(0,1fr))] gap-[3px]">
              <template v-for="(row, d) in heat.rows" :key="d">
                <span class="self-center text-center font-mono text-[11px] leading-none text-muted">{{ heat.days[d].letter }}</span>
                <span
                  v-for="(v, h) in row"
                  :key="h"
                  class="aspect-square"
                  :style="{ backgroundColor: heatTones[heat.level(v)] }"
                  :title="`${heat.days[d].name} ${h} h : ${v} écoute${v > 1 ? 's' : ''}`"
                ></span>
              </template>
            </div>
            <div class="mt-1.5 grid grid-cols-[1.25rem_repeat(24,minmax(0,1fr))] gap-[3px] font-mono text-[11px] text-muted">
              <span></span>
              <span v-for="h in [0, 6, 12, 18]" :key="h" class="col-span-6">{{ h }}h</span>
            </div>
            <div class="mt-2 flex items-center justify-end gap-1 font-mono text-[11px] text-muted">
              moins
              <span v-for="(tone, l) in heatTones" :key="l" class="h-2.5 w-2.5" :style="{ backgroundColor: tone }"></span>
              plus
            </div>
          </div>
          <p v-else class="mt-3 font-mono text-sm text-muted">(pas encore de données d'activité)</p>

          <dl class="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
            <div class="flex items-baseline gap-1.5"><dt class="order-2 text-muted-light">écoutes</dt><dd class="order-1 font-bold text-lilac">{{ format(totals.listens) }}</dd></div>
            <div class="flex items-baseline gap-1.5"><dt class="order-2 text-muted-light">d'écoute</dt><dd class="order-1 font-bold text-accent-text">{{ totals.estimated ? '~' : '' }}{{ format(totals.hours) }} h</dd></div>
            <div class="flex items-baseline gap-1.5"><dt class="order-2 text-muted-light">cette semaine</dt><dd class="order-1 font-bold text-bg-light">{{ format(totals.week) }}</dd></div>
          </dl>
        </section>
      </div>

      <!-- Barre d'état tmux -->
      <div class="flex items-stretch justify-between gap-3 border-t-2 border-line bg-ink font-mono text-[13px]">
        <div class="flex min-w-0 items-stretch">
          <span class="flex items-center bg-lilac px-4 py-1.5 font-bold text-primary-dark">music</span>
          <span class="hidden items-center truncate px-4 text-muted-light sm:flex" aria-hidden="true">0:tracks* 1:artists 2:activity</span>
        </div>
        <span v-if="updated" class="flex items-center px-4 text-muted"><span class="sr-only">mis à jour à </span>{{ updated.time }}</span>
      </div>
    </div>

    <!-- Dernière écoute, mise à jour, lien vers le profil -->
    <p class="mt-5 flex flex-col gap-1 font-mono text-xs text-muted sm:flex-row sm:flex-wrap sm:gap-x-3">
      <span v-if="lastPlayed" class="min-w-0 max-w-full truncate">
        <span class="text-accent-text" aria-hidden="true">▸</span> dernière écoute : <span class="text-muted-light">{{ lastPlayed.track }} — {{ lastPlayed.artist }}</span>
      </span>
      <span v-if="updated"><span v-if="lastPlayed" class="mr-3 hidden sm:inline" aria-hidden="true">·</span>mis à jour le {{ updated.date }}</span>
      <span><span v-if="lastPlayed || updated" class="mr-3 hidden sm:inline" aria-hidden="true">·</span><a :href="music.profile" target="_blank" rel="noopener noreferrer">voir mon profil ListenBrainz ↗</a></span>
    </p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { music } from '../data/profile.js'

// Barres des artistes : du lilas au violet de la palette
const barTones = ['#CDBBF8', '#B79FF4', '#A98BF0', '#8E6CEB', '#6D3BD9']
// Heatmap : 5 niveaux, du gris au violet, de luminosité croissante
const heatTones = ['#22213D', '#3D3B5E', '#5A3FB0', '#7C55E6', '#CDBBF8']

const DAYS = {
  mon: { letter: 'L', name: 'lundi' },
  tue: { letter: 'M', name: 'mardi' },
  wed: { letter: 'M', name: 'mercredi' },
  thu: { letter: 'J', name: 'jeudi' },
  fri: { letter: 'V', name: 'vendredi' },
  sat: { letter: 'S', name: 'samedi' },
  sun: { letter: 'D', name: 'dimanche' }
}

const state = ref('loading') // loading | ready | error
const raw = ref(null)
let controller = null

const numberFormat = new Intl.NumberFormat('fr-FR')
const format = (n) => numberFormat.format(Number(n) || 0)
const rank = (i) => String(i + 1).padStart(2, '0')

const list = (value) => (Array.isArray(value) ? value : [])
const toTrack = (t) => ({ track: String(t?.track ?? '—'), artist: String(t?.artist ?? '—'), plays: Number(t?.plays) || 0 })

const trackPanes = computed(() => [
  {
    id: 'titres',
    flag: '--all-time',
    items: list(raw.value?.top_tracks_all_time).slice(0, 5).map(toTrack),
    empty: "(aucune écoute pour l'instant)",
    // Panneau actif de tmux : bordures lilas
    border: 'border-b-2 border-lilac md:border-r-2'
  },
  {
    id: 'semaine',
    flag: '--week',
    items: list(raw.value?.top_tracks_week).slice(0, 5).map(toTrack),
    empty: '(aucune écoute cette semaine)',
    border: 'border-b-2 border-line'
  }
])

const artists = computed(() => {
  const items = list(raw.value?.top_artists_all_time).slice(0, 5)
    .map((a) => ({ artist: String(a?.artist ?? '—'), plays: Number(a?.plays) || 0 }))
  const max = Math.max(1, ...items.map((a) => a.plays))
  return items.map((a) => ({ ...a, share: Math.round((a.plays / max) * 100) }))
})

// Heatmap 7 × 24. Les niveaux suivent les quartiles des heures écoutées, pour
// garder du contraste même quand quelques créneaux dominent.
const heat = computed(() => {
  const hours = raw.value?.heatmap?.hours
  const valid = Array.isArray(hours) && hours.length === 7 && hours.every((r) => Array.isArray(r) && r.length === 24)
  if (!valid) return null

  const rows = hours.map((r) => r.map((v) => Math.max(0, Number(v) || 0)))
  const keys = list(raw.value?.heatmap?.days)
  const days = (keys.length === 7 ? keys : Object.keys(DAYS)).map((k) => DAYS[k] || { letter: '?', name: String(k) })

  const filled = rows.flat().filter((v) => v > 0).sort((a, b) => a - b)
  const quantile = (q) => filled[Math.min(filled.length - 1, Math.floor(q * filled.length))] ?? 0
  const [q1, q2, q3] = [quantile(0.25), quantile(0.5), quantile(0.75)]
  const level = (v) => (v <= 0 ? 0 : v <= q1 ? 1 : v <= q2 ? 2 : v <= q3 ? 3 : 4)

  let peak = { v: -1, d: 0, h: 0 }
  rows.forEach((r, d) => r.forEach((v, h) => { if (v > peak.v) peak = { v, d, h } }))
  const label = peak.v > 0
    ? `Écoutes par jour et par heure. Créneau le plus chargé : ${days[peak.d].name} vers ${peak.h} h (${format(peak.v)} écoutes).`
    : 'Écoutes par jour et par heure : aucune écoute.'

  return { rows, days, level, label }
})

const totals = computed(() => {
  const t = raw.value?.totals || {}
  return {
    listens: Number(t.listens) || 0,
    hours: Number(t.hours_played) || 0,
    estimated: Boolean(t.hours_estimated),
    week: Number(t.listens_this_week) || 0
  }
})

const lastPlayed = computed(() => {
  const lp = raw.value?.last_played
  return lp && lp.track ? { track: String(lp.track), artist: String(lp.artist ?? '—') } : null
})

// Date de mise à jour, affichée à l'heure de Paris
const updated = computed(() => {
  const date = new Date(raw.value?.updated_at)
  if (Number.isNaN(date.getTime())) return null
  const options = { timeZone: 'Europe/Paris' }
  return {
    date: `${date.toLocaleDateString('fr-FR', { ...options, day: 'numeric', month: 'short' })} à ${date.toLocaleTimeString('fr-FR', { ...options, hour: '2-digit', minute: '2-digit' })}`,
    time: date.toLocaleTimeString('fr-FR', { ...options, hour: '2-digit', minute: '2-digit' })
  }
})

onMounted(async () => {
  controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 10000)
  try {
    const response = await fetch(music.source, { signal: controller.signal })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    raw.value = await response.json()
    state.value = 'ready'
  } catch (err) {
    if (err.name !== 'AbortError' || state.value === 'loading') state.value = 'error'
    console.warn('Statistiques ListenBrainz indisponibles', err)
  } finally {
    clearTimeout(timeout)
  }
})

onBeforeUnmount(() => controller?.abort())
</script>
