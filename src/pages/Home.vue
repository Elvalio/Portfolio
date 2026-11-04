<template>
  <div class="w-full">
    <!-- Section full-screen d'introduction -->
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
        <p>Photo by <a href="https://www.instagram.com/rmradev/" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">@rmradev</a></p>
        <p>Source: <a href="https://4kwallpapers.com/nature/moon-evening-sky-mountains-forest-silhouette-402.html" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">4kwallpapers</a></p>
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
          <a :href="contact.linkedin" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" aria-hidden="true"><path :d="linkedinPath" /></svg>
          </a>
          <a :href="contact.github" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-primary transition-colors duration-300" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" aria-hidden="true"><path :d="githubPath" /></svg>
          </a>
        </div>

        <!-- Flèche cliquable avec texte -->
        <div class="mt-16">
          <p class="text-gray-300 text-sm mb-4 animate-pulse">Défilez pour découvrir</p>
          <button
            @click="scrollToContent"
            class="animate-bounce text-white hover:text-primary transition-colors cursor-pointer"
            aria-label="Défiler vers le contenu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Contenu principal avec padding-top pour le header fixe -->
    <div ref="contentSection" class="pt-20">
      <div class="container mx-auto px-4 py-12">
        <section class="space-y-6 reveal">
          <div class="card p-6 rounded-lg">
            <h2 class="text-2xl font-bold">À propos</h2>
            <p class="mt-3 text-muted-light">
              Je suis en première année de Master Informatique, parcours Ingénierie du Logiciel de la Société Numérique (ILSEN), à Avignon Université, après un BUT Informatique à l'IUT de Lannion.
              J'ai réalisé deux stages de développeur fullstack, chez Unissia puis chez Jikigai, où j'ai travaillé sur une plateforme d'agents IA.
            </p>
          </div>
        </section>

        <section class="mt-8 reveal">
          <div class="flex justify-between items-center gap-4 mb-6">
            <h2 class="text-2xl font-bold">Projets mis en avant</h2>
            <router-link to="/projects" class="text-primary hover:underline">Voir tous les projets →</router-link>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="p in featured"
              :key="p.key"
              class="card p-4 rounded-lg hover:scale-105 transition-transform cursor-pointer"
              role="button"
              tabindex="0"
              @click="goToProject(p.key)"
              @keyup.enter="goToProject(p.key)"
            >
              <h3 class="font-semibold text-xl">{{ p.title }}</h3>
              <p class="text-sm text-muted-light mt-2">{{ p.short }}</p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span v-for="t in p.tech.slice(0, 4)" :key="t" class="text bg-primary/20 px-2 py-1 rounded flex items-center">
                  <img v-if="techLogos[t]" :src="techLogos[t]" alt="" class="inline w-4 h-4 mr-1" />{{ t }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section class="mt-12 reveal">
          <h2 class="text-2xl font-bold mb-6">Compétences</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="s in skills" :key="s.title" class="card p-4 text-center">
              <div class="text-3xl mb-2" aria-hidden="true">{{ s.icon }}</div>
              <h3 class="font-semibold">{{ s.title }}</h3>
              <p class="text-xs text-muted-light mt-1">{{ s.detail }}</p>
            </div>
          </div>
        </section>

        <section class="mt-12 reveal text-center">
          <div class="card p-8 rounded-lg">
            <h2 class="text-2xl font-bold mb-4">Travaillons ensemble</h2>
            <p class="text-muted-light mb-6">Je recherche une alternance en développement pour mener mon master en entreprise, à partir de janvier 2027.</p>
            <div class="flex justify-center gap-4 flex-wrap">
              <button @click="openContact" class="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition">
                Me contacter
              </button>
              <a :href="cvUrl" download="CV_Harry_Troule.pdf" class="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition">
                Télécharger mon CV
              </a>
              <a :href="contact.linkedin" target="_blank" rel="noopener noreferrer" class="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition">
                LinkedIn
              </a>
              <a :href="contact.github" target="_blank" rel="noopener noreferrer" class="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import bgImage from '../assets/hero-bg.webp'
import { projects } from '../data/projects.js'
import { contact, skills } from '../data/profile.js'
import { linkedinPath, githubPath } from '../data/icons.js'
import TailwindLogo from '../assets/logos/TailwindCSS.png'
import VueLogo from '../assets/logos/VueJS.png'
import HtmlLogo from '../assets/logos/HTML.png'
import CssLogo from '../assets/logos/CSS.png'
import JsLogo from '../assets/logos/JavaScript.png'
import PostgresLogo from '../assets/logos/PostgreSQL.png'

const emit = defineEmits(['update-scroll'])

const router = useRouter()
const openContact = inject('openContact')
const contentSection = ref(null)

// Base URL gérée par Vite (le site est servi sous /Portfolio/)
const cvUrl = import.meta.env.BASE_URL + 'CV.pdf'
const profileUrl = import.meta.env.BASE_URL + 'images/profile.webp'

const featured = projects.filter((p) => p.featured)

const techLogos = {
  'Tailwind CSS': TailwindLogo,
  'Vue 3': VueLogo,
  HTML: HtmlLogo,
  CSS: CssLogo,
  JavaScript: JsLogo,
  PostgreSQL: PostgresLogo
}

const scrollToContent = () => {
  contentSection.value?.scrollIntoView({ behavior: 'smooth' })
}

const goToProject = (projectKey) => {
  router.push({ name: 'Projects', query: { project: projectKey } })
}

// La navbar apparaît progressivement après la moitié de la première section
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

let observer = null

onMounted(() => {
  // Apparition des sections au défilement
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', handleScroll)
  emit('update-scroll', 1)
})
</script>

<style scoped>
.reveal { opacity: 0; transform: translateY(18px); transition: opacity .6s ease, transform .6s ease; }
.revealed { opacity: 1; transform: translateY(0); }
</style>
