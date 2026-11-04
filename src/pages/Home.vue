<template>
  <div class="w-full">
    <!-- Section full-screen d'introduction (inchangée) -->
    <section class="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <!-- Image de fond -->
      <div
        class="absolute inset-0 bg-cover bg-center transform scale-105 filter blur-sm"
        :style="{ backgroundImage: `url('${bgImage}')` }"
        aria-hidden="true"
      ></div>

      <!-- dark overlay -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true"></div>

      <!-- Crédit photo -->
      <div class="absolute bottom-4 right-4 z-10 text-xs text-gray-400/70 text-right">
        <p>Photo by <a href="https://www.instagram.com/rmradev/" target="_blank" rel="noopener noreferrer" class="text-inherit hover:text-accent-text transition-colors">@rmradev</a></p>
        <p>Source: <a href="https://4kwallpapers.com/nature/moon-evening-sky-mountains-forest-silhouette-402.html" target="_blank" rel="noopener noreferrer" class="text-inherit hover:text-accent-text transition-colors">4kwallpapers</a></p>
      </div>

      <div class="relative z-10 max-w-4xl px-6">
        <div class="mx-auto w-fit">
          <div class="rounded-full p-1 bg-gradient-to-tr from-primary to-primary-dark inline-block">
            <div class="rounded-full overflow-hidden w-36 h-36 md:w-44 md:h-44 bg-transparent shadow-2xl">
              <img :src="profileUrl" alt="Photo de Harry Troulé" class="w-full h-full object-cover" width="176" height="176" />
            </div>
          </div>
        </div>

        <h1 class="text-5xl md:text-7xl font-extrabold text-white mt-8">{{ contact.name }}</h1>
        <p class="text-xl md:text-2xl text-gray-200 mt-4">Étudiant en Master Informatique (ILSEN) — Avignon Université</p>
        <p class="text-md md:text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
          Développeur fullstack, formé aussi à l'exploitation des données
        </p>

        <!-- Icônes réseaux sociaux -->
        <div class="mt-8 flex justify-center gap-6">
          <a :href="contact.linkedin" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-accent-text transition-colors duration-300" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" aria-hidden="true"><path :d="linkedinPath" /></svg>
          </a>
          <a :href="contact.github" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-accent-text transition-colors duration-300" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" aria-hidden="true"><path :d="githubPath" /></svg>
          </a>
        </div>

        <!-- Flèche cliquable avec texte -->
        <div class="mt-16">
          <p class="text-gray-300 text-sm mb-4 animate-pulse motion-reduce:animate-none">Défilez pour découvrir</p>
          <button
            @click="scrollToContent"
            class="animate-bounce motion-reduce:animate-none text-white hover:text-accent-text transition-colors cursor-pointer"
            aria-label="Défiler vers le contenu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <div ref="contentSection" class="scroll-mt-[74px]">
      <Marquee />

      <div class="mx-auto flex max-w-[1200px] flex-col gap-24 px-4 pb-24 pt-[88px] sm:px-8">

        <!-- Fiche 00 · whoami -->
        <section class="flex flex-wrap items-start gap-12">
          <div class="flex min-w-0 flex-[1_1_560px] flex-col gap-[22px]">
            <PromptLabel code="Fiche 00" cmd="whoami" />
            <h2 class="titre-page font-display text-[clamp(40px,5.4vw,72px)] font-black uppercase leading-[0.98] tracking-[-0.01em]">{{ whoami.title }}</h2>
            <p class="max-w-[620px] text-lg text-muted-light">{{ whoami.text }}</p>
            <p v-if="whoami.extra" class="max-w-[620px] text-muted-light">{{ whoami.extra }}</p>
          </div>

          <Fiche
            tag="div"
            tab="profil.yml"
            class="min-w-0 flex-[1_1_340px]"
            shadow="primary"
            :stamp="search.open ? 'Ouvert' : ''"
            stamp-size="lg"
            :stamp-rotate="-7"
            stamp-class="-bottom-5 -right-2 sm:-right-3.5"
          >
            <dl class="grid grid-cols-[max-content_minmax(0,1fr)] gap-x-4 gap-y-3 px-5 py-[22px] font-mono text-sm">
              <template v-for="row in profileYml" :key="row.key">
                <dt class="text-accent-text">{{ row.key }}:</dt>
                <dd>{{ row.value }}</dd>
              </template>
              <dt class="text-accent-text">contact:</dt>
              <dd class="break-words"><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></dd>
            </dl>
          </Fiche>
        </section>

        <!-- Fiche 01 · projets mis en avant -->
        <section class="flex flex-col gap-11 border-t-2 border-dashed border-line pt-14">
          <div class="flex flex-wrap items-end justify-between gap-4">
            <div>
              <PromptLabel code="Fiche 01" cmd="ls projets/ --featured" class="mb-1.5" />
              <h2 class="font-display text-[clamp(40px,5vw,52px)] font-black uppercase leading-none">Projets</h2>
            </div>
            <router-link to="/projects" class="inline-flex min-h-[44px] items-center border-2 border-lilac bg-surface px-4 py-2 font-mono text-[13px] font-bold text-bg-light shadow-dur-3 hover:text-bg-light">ls projets/ ({{ projects.length }}) →</router-link>
          </div>

          <div class="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-2">
            <Fiche
              v-for="(p, i) in featured"
              :key="p.key"
              :tab="`#${String(i + 1).padStart(2, '0')} · ${categoryTab(p.category)}`"
              :tab-tone="i === 0 ? 'primary' : 'dark'"
              :shadow="i === 0 ? 'primary' : 'dark'"
              :stamp="stampOf(p).label"
              :stamp-tone="stampOf(p).tone"
              :stamp-rotate="i % 2 === 0 ? -8 : 6"
              stamp-class="-bottom-[18px] -right-2 sm:-right-3"
            >
              <div class="flex items-baseline justify-between gap-3 border-b-2 border-lilac bg-primary-dark px-5 py-3.5">
                <h3 class="font-display text-2xl font-extrabold uppercase">{{ p.title }}</h3>
                <span v-if="p.repo" class="truncate font-mono text-xs text-lilac">{{ repoLabel(p.repo) }}</span>
              </div>
              <div class="flex flex-col gap-4 p-5">
                <img v-if="p.image" :src="p.image" :alt="`Capture de ${p.title}`" class="block h-[170px] w-full border-2 border-line object-cover" loading="lazy" />
                <div v-else class="flex h-[170px] items-center justify-center border-2 border-dashed border-line bg-ink font-display text-4xl font-black uppercase text-line" aria-hidden="true">{{ p.title }}</div>
                <p class="font-mono text-xs font-bold uppercase tracking-[0.08em] text-accent-text">{{ p.context }}</p>
                <p class="text-muted-light">{{ p.pitch }}</p>
                <TagList :items="p.tech.slice(0, 4)" />
                <div class="flex flex-wrap gap-3 font-mono text-sm font-bold">
                  <router-link
                    :to="{ name: 'Projects', query: { project: p.key } }"
                    class="inline-flex min-h-[44px] items-center border-2 border-bg-light bg-bg-light px-4 py-2 text-primary-dark shadow-dur-3 hover:text-primary-dark"
                  >ouvrir<span class="sr-only"> la fiche {{ p.title }}</span>&nbsp;→</router-link>
                  <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-[44px] items-center px-1.5 py-2">code<span class="sr-only"> de {{ p.title }}</span>&nbsp;↗</a>
                </div>
              </div>
            </Fiche>
          </div>
        </section>

        <!-- Fiche 02 · stack -->
        <section class="flex flex-col gap-8 border-t-2 border-dashed border-line pt-14">
          <div>
            <PromptLabel code="Fiche 02" cmd="cat stack.json" class="mb-1.5" />
            <h2 class="font-display text-[clamp(40px,5vw,52px)] font-black uppercase leading-none">Compétences</h2>
          </div>

          <div class="flex flex-wrap items-start gap-10">
            <div class="min-w-0 flex-[2_1_560px] border-2 border-lilac bg-surface shadow-dur-8">
              <div class="flex items-center gap-2 border-b-2 border-lilac bg-primary-dark px-4 py-2.5 font-mono text-xs text-lilac">
                <span class="h-2.5 w-2.5 border border-lilac bg-primary" aria-hidden="true"></span>
                <span class="h-2.5 w-2.5 border border-lilac bg-muted-light" aria-hidden="true"></span>
                <span class="h-2.5 w-2.5 border border-lilac bg-bg-light" aria-hidden="true"></span>
                <span class="ml-2">~/stack.json</span>
              </div>
              <div class="overflow-x-auto whitespace-pre py-5 font-mono text-[15px] leading-[1.9]">
                <div v-for="(line, n) in stackLines" :key="n" class="flex">
                  <span class="w-[52px] flex-none pr-5 text-right text-[#5E5A93]" aria-hidden="true">{{ n + 1 }}</span>
                  <span v-if="line.brace" class="text-muted">{{ line.brace }}</span>
                  <span v-else>{{ '  ' }}<span class="text-accent-text">"{{ line.key }}"</span><span class="text-muted">: [</span>{{ line.values }}<span class="text-muted">]{{ line.last ? '' : ',' }}</span></span>
                </div>
              </div>
            </div>

            <Fiche v-if="besideCode.length" tag="div" tab="~/.config" class="min-w-0 flex-[1_1_300px]">
              <div class="flex flex-col gap-3 p-5">
                <h3 class="font-mono text-xs font-bold uppercase tracking-[0.08em] text-muted">À côté du code</h3>
                <ul class="flex flex-col gap-2 text-muted-light">
                  <li v-for="item in besideCode" :key="item"><span class="font-mono text-accent-text" aria-hidden="true">→</span> {{ item }}</li>
                </ul>
              </div>
            </Fiche>
          </div>
        </section>

        <!-- Fiche 03 · musique (statistiques ListenBrainz) -->
        <section class="flex flex-col gap-8 border-t-2 border-dashed border-line pt-14" aria-labelledby="titre-musique">
          <div>
            <PromptLabel code="Fiche 03" cmd="tmux attach -t music" class="mb-1.5" />
            <h2 id="titre-musique" class="font-display text-[clamp(40px,5vw,52px)] font-black uppercase leading-none">Musique</h2>
            <p class="mt-4 max-w-[640px] text-muted-light">Mes écoutes, suivies avec ListenBrainz et mises à jour toutes les 6 heures.</p>
          </div>
          <MusicStats />
        </section>

        <!-- Fiche 04 · alternance -->
        <section v-if="search.open" class="relative flex flex-col gap-5 border-2 border-lilac bg-primary-dark p-6 shadow-dur-10 sm:p-12">
          <PromptLabel code="Fiche 04" :cmd="search.command" light />
          <h2 class="max-w-[780px] font-display text-[clamp(30px,4vw,54px)] font-black uppercase leading-[1.04]">{{ search.headline }}</h2>
          <p class="max-w-[640px] text-muted-light">{{ search.text }}</p>
          <div class="flex flex-wrap gap-3.5 font-mono text-sm font-bold">
            <button type="button" class="min-h-[48px] border-2 border-bg-light bg-bg-light px-5 py-3 text-primary-dark shadow-dur-4" @click="openContact">./contact.sh →</button>
            <a :href="cvUrl" download="CV_Harry_Troule.pdf" class="inline-flex min-h-[48px] items-center border-2 border-bg-light px-5 py-3 text-bg-light hover:text-bg-light">cv.pdf ↓</a>
            <a :href="contact.linkedin" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-[48px] items-center px-2 py-3 text-lilac">linkedin ↗</a>
            <a :href="contact.github" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-[48px] items-center px-2 py-3 text-lilac">github ↗</a>
          </div>
          <Stamp label="Ouvert" tone="inverse" size="lg" :rotate="8" class="absolute right-9 top-9 hidden lg:block" />
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue'
import bgImage from '../assets/hero-bg.webp'
import Marquee from '../components/Marquee.vue'
import MusicStats from '../components/MusicStats.vue'
import Fiche from '../components/Fiche.vue'
import Stamp from '../components/Stamp.vue'
import TagList from '../components/TagList.vue'
import PromptLabel from '../components/PromptLabel.vue'
import { projects, categories, statusStamps } from '../data/projects.js'
import { contact, whoami, profileYml, search, stack, besideCode } from '../data/profile.js'
import { linkedinPath, githubPath } from '../data/icons.js'

const emit = defineEmits(['update-scroll'])

const openContact = inject('openContact')
const contentSection = ref(null)

// Base URL gérée par Vite (le site est servi sous /Portfolio/)
const cvUrl = import.meta.env.BASE_URL + 'CV.pdf'
const profileUrl = import.meta.env.BASE_URL + 'images/profile.webp'

const featured = projects.filter((p) => p.featured)

const categoryTab = (key) => categories.find((c) => c.key === key)?.tab || key
const stampOf = (p) => statusStamps[p.status] || { label: p.status, tone: 'default' }
const repoLabel = (url) => url.replace(/^https:\/\/github\.com\//, '')

// Lignes du fichier stack.json
const stackLines = [
  { brace: '{' },
  ...stack.map((entry, i) => ({
    key: entry.key,
    values: entry.values.map((v) => `"${v}"`).join(', '),
    last: i === stack.length - 1
  })),
  { brace: '}' }
]

const scrollToContent = () => {
  contentSection.value?.scrollIntoView({ behavior: 'smooth' })
}

// La barre de navigation devient opaque après la moitié de la première section
const handleScroll = () => {
  const scrollY = window.scrollY
  const windowHeight = window.innerHeight
  const startFade = windowHeight * 0.5
  const endFade = windowHeight * 0.9

  let opacity = 0
  if (scrollY > startFade) {
    opacity = Math.min((scrollY - startFade) / (endFade - startFade), 1)
  }
  emit('update-scroll', opacity)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  emit('update-scroll', 1)
})
</script>
