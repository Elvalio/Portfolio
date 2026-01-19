<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300"
    :style="{ 
      opacity: scrollOpacity,
      backgroundColor: `rgba(17, 24, 39, ${scrollOpacity * 0.95})`,
      backdropFilter: scrollOpacity > 0.3 ? 'blur(10px)' : 'none'
    }"
  >
    <div class="container mx-auto flex items-center justify-between px-4">
      <div class="flex items-center gap-3">
        <router-link to="/" class="text-white font-semibold text-3xl hover:text-primary transition-colors">&lt;Harry /&gt;</router-link>
      </div>
      <div class="space-x-4">
        <router-link to="/" class="text-lg hover:text-primary">Accueil</router-link>
        <router-link to="/projects" class="text-lg hover:text-primary">Projets</router-link>
        <router-link to="/education" class="text-lg hover:text-primary">Formation</router-link>
        <router-link to="/contact" class="text-lg hover:text-primary">Contact</router-link>
        <a :href="baseUrl + 'CV.pdf'" download="CV.pdf" class="ml-4 inline-block bg-primary text-white px-3 py-1 rounded">Télécharger CV</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  scrollOpacity: {
    type: Number,
    default: 1
  }
})

// Base URL géré par Vite (utile si le site est servi sous /Portfolio/)
const baseUrl = import.meta.env.BASE_URL || '/'
</script>
