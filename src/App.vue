<template>
  <div class="min-h-screen text-gray-100 bg-gradient-to-b from-primary-dark via-gray-900 to-gray-800">
    <NavBar :scrollOpacity="scrollOpacity" />
    <Transition name="fade-slide" mode="out-in">
      <main :key="route.path" :class="isHomePage ? '' : 'container mx-auto px-4 py-10 min-h-[calc(100vh-120px)]'">
        <router-view @update-scroll="updateScroll" />
      </main>
    </Transition>
    <Footer v-if="!isHomePage" />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const scrollOpacity = ref(1)

const isHomePage = computed(() => route.path === '/')

const updateScroll = (opacity) => {
  scrollOpacity.value = opacity
}

watch(() => route.path, () => {
  if (!isHomePage.value) {
    scrollOpacity.value = 1
  } else {
    scrollOpacity.value = 0
  }
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
