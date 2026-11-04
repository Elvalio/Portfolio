<template>
  <div class="min-h-screen text-gray-100 bg-gradient-to-b from-primary-dark via-gray-900 to-gray-800">
    <NavBar :scrollOpacity="scrollOpacity" />
    <ContactModal :isOpen="contactOpen" @close="contactOpen = false" />
    <Transition name="fade-slide" mode="out-in">
      <main :key="route.path" :class="isHomePage ? '' : 'container mx-auto px-4 py-10 min-h-[calc(100vh-120px)]'">
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
})
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

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
