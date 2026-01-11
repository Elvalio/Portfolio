<template>
  <div class="min-h-screen text-gray-100 bg-gradient-to-b from-primary-dark via-gray-900 to-gray-800">
    <NavBar :scrollOpacity="scrollOpacity" />
    <main :class="isHomePage ? '' : 'container mx-auto px-4 py-10'">
      <router-view @update-scroll="updateScroll" />
    </main>
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
