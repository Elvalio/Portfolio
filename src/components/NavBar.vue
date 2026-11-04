<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300"
    :style="{
      opacity: visibleOpacity,
      pointerEvents: visibleOpacity < 0.1 ? 'none' : 'auto',
      backgroundColor: `rgba(17, 24, 39, ${visibleOpacity * 0.95})`,
      backdropFilter: visibleOpacity > 0.3 ? 'blur(10px)' : 'none'
    }"
  >
    <div class="container mx-auto flex items-center justify-between px-4">
      <router-link to="/" class="text-white font-semibold text-2xl md:text-3xl hover:text-primary transition-colors">&lt;Harry /&gt;</router-link>

      <!-- Liens (écran large) -->
      <div class="hidden md:flex items-center space-x-4">
        <router-link v-for="l in links" :key="l.to" :to="l.to" class="text-lg hover:text-primary">{{ l.label }}</router-link>
        <a :href="cvUrl" download="CV_Harry_Troule.pdf" class="ml-4 inline-block bg-primary text-white px-3 py-1 rounded">Télécharger CV</a>
      </div>

      <!-- Bouton menu (mobile) -->
      <button
        type="button"
        class="md:hidden text-white hover:text-primary transition-colors"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="Menu"
        @click="menuOpen = !menuOpen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Menu déroulant (mobile) -->
    <div v-if="menuOpen" id="mobile-menu" class="md:hidden container mx-auto px-4 pt-4 flex flex-col gap-3">
      <router-link v-for="l in links" :key="l.to" :to="l.to" class="text-lg hover:text-primary">{{ l.label }}</router-link>
      <a :href="cvUrl" download="CV_Harry_Troule.pdf" class="self-start bg-primary text-white px-3 py-1 rounded">Télécharger CV</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  scrollOpacity: {
    type: Number,
    default: 1
  }
})

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/projects', label: 'Projets' },
  { to: '/education', label: 'Formation' }
]

const menuOpen = ref(false)
const route = useRoute()

// Le menu ouvert reste visible même en haut de l'accueil
const visibleOpacity = computed(() => (menuOpen.value ? 1 : props.scrollOpacity))

// Ferme le menu à chaque changement de page
watch(() => route.fullPath, () => { menuOpen.value = false })

// Base URL gérée par Vite (le site est servi sous /Portfolio/)
const cvUrl = import.meta.env.BASE_URL + 'CV.pdf'
</script>
