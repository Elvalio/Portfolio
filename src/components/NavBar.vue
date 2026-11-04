<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b-2 transition-colors duration-300"
    :style="{
      backgroundColor: `rgba(11, 10, 30, ${0.94 * solid})`,
      borderColor: `rgba(58, 51, 145, ${solid})`
    }"
  >
    <div class="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3.5 font-mono text-sm sm:px-8">
      <router-link to="/" class="inline-flex min-h-[44px] items-center gap-1.5 font-bold text-bg-light hover:text-bg-light">
        <span>harry@portfolio:<span class="text-accent-text">{{ path }}</span>$</span>
        <span class="curseur inline-block h-[18px] w-[9px] bg-accent-text" aria-hidden="true"></span>
      </router-link>

      <!-- Liens (écran large) -->
      <nav aria-label="Navigation principale" class="hidden md:block">
        <ul class="flex flex-wrap items-center gap-2.5">
          <li v-for="l in links" :key="l.to">
            <router-link :to="l.to" :class="linkClass(l.to)">{{ l.label }}</router-link>
          </li>
          <li>
            <button type="button" :class="linkClass(null)" @click="openContact">./contact.sh</button>
          </li>
          <li>
            <a :href="cvUrl" download="CV_Harry_Troule.pdf" :class="cvClass">cv.pdf ↓</a>
          </li>
        </ul>
      </nav>

      <!-- Bouton menu (mobile) -->
      <button
        type="button"
        class="inline-flex min-h-[44px] items-center gap-2 border-2 border-lilac px-3 text-bg-light md:hidden"
        :class="solid < 0.5 ? 'bg-ink/75' : ''"
        :aria-expanded="menuOpen"
        aria-controls="menu-mobile"
        @click="menuOpen = !menuOpen"
      >
        <span>{{ menuOpen ? 'fermer' : 'menu' }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
          <path v-if="!menuOpen" stroke-linecap="square" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="square" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <!-- Menu déroulant (mobile) -->
    <nav v-if="menuOpen" id="menu-mobile" aria-label="Navigation principale" class="px-4 pb-4 font-mono text-sm md:hidden">
      <ul class="flex flex-col gap-2.5">
        <li v-for="l in links" :key="l.to">
          <router-link :to="l.to" :class="[linkClass(l.to), 'w-full']">{{ l.label }}</router-link>
        </li>
        <li>
          <button type="button" :class="[linkClass(null), 'w-full']" @click="menuOpen = false; openContact()">./contact.sh</button>
        </li>
        <li>
          <a :href="cvUrl" download="CV_Harry_Troule.pdf" :class="[cvClass, 'w-full']">cv.pdf ↓</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, watch, inject } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  // 0 : posée sur le Hero (transparente) · 1 : barre opaque
  scrollOpacity: {
    type: Number,
    default: 1
  }
})

const links = [
  { to: '/', label: '~/accueil' },
  { to: '/projects', label: '~/projets' },
  { to: '/education', label: '~/formation' }
]

// Chemin affiché dans le prompt
const paths = { '/': '~', '/projects': '~/projets', '/education': '~/formation' }

const route = useRoute()
const openContact = inject('openContact')
const menuOpen = ref(false)

const path = computed(() => paths[route.path] || '~')

// Le menu ouvert rend la barre opaque, même en haut de l'accueil
const solid = computed(() => (menuOpen.value ? 1 : props.scrollOpacity))

const baseLink = 'inline-flex min-h-[44px] items-center border-2 px-3.5 py-2 transition-colors'

const linkClass = (to) => {
  if (to && route.path === to) return `${baseLink} border-lilac bg-primary font-bold text-white hover:text-white`
  const surHero = solid.value < 0.5
  return `${baseLink} text-bg-light hover:border-lilac hover:text-bg-light ${surHero ? 'border-lilac bg-ink/75' : 'border-line'}`
}

const cvClass = `${baseLink} border-lilac bg-bg-light font-bold text-primary-dark shadow-dur-3 hover:text-primary-dark`

// Ferme le menu à chaque changement de page
watch(() => route.fullPath, () => { menuOpen.value = false })

// Base URL gérée par Vite (le site est servi sous /Portfolio/)
const cvUrl = import.meta.env.BASE_URL + 'CV.pdf'
</script>
