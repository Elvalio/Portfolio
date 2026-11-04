<template>
  <div class="grille min-h-screen text-bg-light">
    <a
      href="#contenu"
      class="sr-only z-[70] border-2 border-lilac bg-primary px-4 py-2 font-mono text-sm font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >Aller au contenu</a>
    <NavBar :scrollOpacity="scrollOpacity" />
    <ContactModal :isOpen="contactOpen" @close="contactOpen = false" />
    <Transition name="fade-slide" mode="out-in">
      <main id="contenu" :key="route.path" tabindex="-1" class="outline-none" :class="isHomePage ? '' : 'min-h-[calc(100vh-120px)] pt-[74px]'">
        <router-view @update-scroll="updateScroll" />
      </main>
    </Transition>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, watch, provide } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import ContactModal from './components/ContactModal.vue'

const route = useRoute()
const scrollOpacity = ref(1)
const contactOpen = ref(false)

// Permet d'ouvrir le formulaire de contact depuis n'importe quelle page
provide('openContact', () => { contactOpen.value = true })

const isHomePage = computed(() => route.path === '/')

const updateScroll = (opacity) => {
  scrollOpacity.value = opacity
}

watch(() => route.path, () => {
  scrollOpacity.value = isHomePage.value ? 0 : 1
}, { immediate: true })
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (prefers-reduced-motion: reduce) {
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: none;
  }

  .fade-slide-enter-from,
  .fade-slide-leave-to {
    transform: none;
  }
}
</style>
