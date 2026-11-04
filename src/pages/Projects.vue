<template>
  <div class="mx-auto flex max-w-[1200px] flex-col gap-16 px-4 pb-28 pt-[72px] sm:px-8">
    <!-- En-tête de page -->
    <section class="flex flex-col gap-[18px]">
      <PromptLabel code="Dossier PR" :cmd="t('projects.cmd')" />
      <h1 class="titre-page break-words font-display text-[clamp(44px,11vw,96px)] font-black uppercase leading-[0.95]">{{ t('projects.title') }}</h1>
      <p class="max-w-[640px] text-lg text-muted-light">{{ t('projects.intro') }}</p>
    </section>

    <!-- Index façon ls -la -->
    <div class="overflow-x-auto border-2 border-lilac bg-surface shadow-dur-8">
      <table class="w-full min-w-[760px] border-collapse font-mono text-sm">
        <caption class="border-b-2 border-lilac bg-primary-dark px-5 py-3 text-left text-xs text-lilac">total {{ projects.length }}</caption>
        <thead>
          <tr class="text-left text-xs uppercase tracking-[0.08em] text-muted">
            <th scope="col" class="border-b border-line px-5 py-3 font-normal">{{ t('projects.colRights') }}</th>
            <th scope="col" class="border-b border-line px-5 py-3 font-normal">{{ t('projects.colYear') }}</th>
            <th scope="col" class="border-b border-line px-5 py-3 font-normal">{{ t('projects.colName') }}</th>
            <th scope="col" class="border-b border-line px-5 py-3 font-normal">{{ t('projects.colFrame') }}</th>
            <th scope="col" class="border-b border-line px-5 py-3 font-normal">{{ t('projects.colStatus') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in projects" :key="p.key" :class="p.key === activeKey ? 'bg-primary/20' : ''">
            <td class="px-5 py-3 text-muted">{{ p.kind === 'dir' ? 'drwxr-xr-x' : '-rwxr-xr-x' }}</td>
            <td class="px-5 py-3">{{ p.year }}</td>
            <td class="px-5 py-3 font-bold">
              <router-link :to="{ name: 'Projects', query: { project: p.key } }" :aria-current="p.key === activeKey ? 'true' : undefined">{{ p.slug }}{{ p.kind === 'dir' ? '/' : '' }}</router-link>
              <span v-if="p.key === activeKey" class="text-lilac"> {{ t('projects.opened') }}</span>
            </td>
            <td class="px-5 py-3 text-muted-light">{{ tr(p.cadre) }}</td>
            <td class="px-5 py-3" :class="p.status === 'live' ? 'text-lilac' : ''">{{ tr(statusOf(p).label) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Onglets de dossier (filtre) + fiches -->
    <section>
      <h2 class="sr-only">{{ t('projects.cards') }}</h2>
      <div role="tablist" :aria-label="t('projects.filter')" class="flex flex-wrap gap-1.5 pl-3 font-mono text-sm font-bold">
        <button
          v-for="(tab, i) in tabs"
          :id="`onglet-${tab.key}`"
          :key="tab.key"
          :ref="(el) => (tabRefs[i] = el)"
          type="button"
          role="tab"
          :aria-selected="filter === tab.key"
          aria-controls="panneau-projets"
          :tabindex="filter === tab.key ? 0 : -1"
          class="min-h-[44px] border-2 px-[18px] py-2"
          :class="filter === tab.key
            ? '-mb-[2px] border-lilac border-b-surface bg-surface text-bg-light'
            : 'border-line border-b-0 bg-primary-dark text-muted-light'"
          @click="filter = tab.key"
          @keydown="onTabKeydown($event, i)"
        >{{ tr(tab.label) }} ({{ tab.count }})</button>
      </div>
      <div
        id="panneau-projets"
        role="tabpanel"
        :aria-labelledby="`onglet-${filter}`"
        class="grid grid-cols-1 gap-x-8 gap-y-11 border-2 border-lilac bg-surface px-5 pb-12 pt-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-3"
      >
        <ProjectCard v-for="p in filtered" :key="p.key" :project="p" :index="projects.indexOf(p)" />
      </div>
    </section>

    <!-- Fiche ouverte : README du projet -->
    <section v-if="activeProject" :id="`fiche-${activeProject.key}`" ref="detailSection" class="scroll-mt-28" :aria-labelledby="`titre-${activeProject.key}`">
      <Fiche
        tag="div"
        :tab="`$ cat ${t('projects.dir')}/${activeProject.slug}/README.md`"
        tab-tone="primary"
        shadow="primary"
        :shadow-size="10"
        :stamp="tr(statusOf(activeProject).stamp)"
        :stamp-tone="statusOf(activeProject).tone"
        stamp-size="lg"
        stamp-class="-bottom-5 right-6 sm:right-10"
      >
        <div class="flex flex-wrap items-end justify-between gap-4 border-b-2 border-lilac bg-primary-dark px-5 py-6 sm:px-8">
          <div class="min-w-0">
            <h2 :id="`titre-${activeProject.key}`" class="font-display text-[clamp(34px,4vw,44px)] font-black uppercase leading-none">{{ activeProject.title }}</h2>
            <p class="mt-1.5 text-muted-light">{{ tr(activeProject.subtitle) }}</p>
          </div>
          <div class="flex flex-wrap gap-3 font-mono text-sm font-bold">
            <a
              v-if="activeProject.repo"
              :href="activeProject.repo"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-[44px] items-center border-2 border-bg-light bg-bg-light px-4 py-2 text-primary-dark shadow-dur-3 hover:text-primary-dark"
            >git clone ↗</a>
            <button type="button" class="min-h-[44px] border-2 border-lilac px-4 py-2 text-bg-light" @click="closeDetail">{{ t('projects.close') }}</button>
          </div>
        </div>

        <div class="flex flex-wrap gap-10 p-5 sm:p-8">
          <div class="flex min-w-0 flex-[2_1_520px] flex-col gap-[22px]">
            <img v-if="activeProject.image" :src="activeProject.image" :alt="t('home.screenshot', { title: activeProject.title })" class="block max-h-[360px] w-full border-2 border-line object-cover" />
            <div v-else class="flex h-[260px] items-center justify-center border-2 border-dashed border-line bg-ink font-display text-5xl font-black uppercase text-line" aria-hidden="true">{{ activeProject.title }}</div>
            <p class="text-muted-light">{{ tr(activeProject.description) }}</p>
            <div>
              <p class="mb-2.5 font-mono text-[13px] text-muted"><span class="text-accent-text">$</span> git log --author=harry --oneline</p>
              <ul class="flex flex-col gap-2 border border-line bg-ink px-5 py-4 font-mono text-sm">
                <li v-for="(item, i) in contributions" :key="i"><span class="text-accent-text" aria-hidden="true">+</span> {{ item }}</li>
              </ul>
            </div>
          </div>

          <aside class="flex min-w-0 flex-[1_1_280px] flex-col gap-6 font-mono text-sm">
            <div>
              <h3 class="mb-2.5 text-xs font-bold uppercase tracking-[0.1em] text-muted">Stack</h3>
              <TagList :items="activeProject.tech" />
            </div>
            <dl class="grid grid-cols-[max-content_minmax(0,1fr)] gap-x-3.5 gap-y-2">
              <template v-for="(fact, i) in activeProject.facts" :key="i">
                <dt class="text-accent-text">{{ tr(fact.key) }}:</dt>
                <dd>{{ tr(fact.value) }}</dd>
              </template>
              <dt class="text-accent-text">{{ t('projects.year') }}:</dt>
              <dd>{{ activeProject.year }}</dd>
              <dt class="text-accent-text">{{ t('projects.status') }}:</dt>
              <dd>{{ tr(statusOf(activeProject).label) }}</dd>
            </dl>
          </aside>
        </div>
      </Fiche>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'
import Fiche from '../components/Fiche.vue'
import TagList from '../components/TagList.vue'
import PromptLabel from '../components/PromptLabel.vue'
import { projects, categories, statuses } from '../data/projects.js'
import { t, tr } from '../i18n'

const route = useRoute()
const router = useRouter()
const detailSection = ref(null)
const activeKey = ref(null)
const filter = ref('tous')
const tabRefs = []

const validKeys = new Set(projects.map((p) => p.key))
const activeProject = computed(() => projects.find((p) => p.key === activeKey.value) || null)
const contributions = computed(() => activeProject.value?.sections.flatMap((s) => s.items.map(tr)) || [])
const statusOf = (p) => statuses[p.status] || statuses.done

// Onglets de filtre, avec le nombre de projets de chaque catégorie
const tabs = [
  { key: 'tous', label: { fr: 'tous', en: 'all' }, count: projects.length },
  ...categories.map((c) => ({ key: c.key, label: c.label, count: projects.filter((p) => p.category === c.key).length }))
]

const filtered = computed(() => (filter.value === 'tous' ? projects : projects.filter((p) => p.category === filter.value)))

// Flèches, Début et Fin déplacent la sélection entre les onglets
const onTabKeydown = (event, i) => {
  const moves = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }
  if (!(event.key in moves)) return
  event.preventDefault()
  const next = (moves[event.key] + tabs.length) % tabs.length
  filter.value = tabs[next].key
  tabRefs[next]?.focus()
}

const scrollToDetail = () => {
  detailSection.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Ouvre la fiche demandée par l'URL (?project=…), qui sert aussi de lien direct
const hydrateFromQuery = (key, delay) => {
  if (validKeys.has(key)) {
    activeKey.value = key
    // Au premier affichage, laisse la transition de page se terminer avant de défiler
    if (delay) setTimeout(scrollToDetail, delay)
    else nextTick(scrollToDetail)
  } else {
    activeKey.value = null
  }
}

const closeDetail = () => {
  const { project, ...rest } = route.query
  router.push({ name: 'Projects', query: rest })
}

onMounted(() => hydrateFromQuery(route.query.project, 500))

watch(() => route.query.project, (key) => {
  if (key !== activeKey.value) hydrateFromQuery(key)
})
</script>
