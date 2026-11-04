<template>
  <section class="py-10 min-h-[calc(100vh-120px)]">
    <div class="mb-8">
      <h2 class="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Projets</h2>
      <p class="text-muted-light">Sélection de réalisations académiques, professionnelles et personnelles</p>
    </div>

    <!-- Aperçu des projets -->
    <div class="mb-10">
      <h3 class="text-xl font-semibold text-white mb-4">Aperçu</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard v-for="p in projects" :key="p.key" :project="p" @select="goToDetail" />
      </div>
    </div>

    <!-- Détail du projet sélectionné -->
    <div class="space-y-10 scroll-mt-24" ref="detailSection">
      <div v-if="activeProject" class="rounded-xl border border-gray-700 bg-gray-800/40 p-6 md:p-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 class="text-2xl md:text-3xl font-bold text-white">{{ activeProject.title }}</h3>
            <p class="text-sm text-muted-light">{{ activeProject.subtitle }}</p>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <span :class="statusStyles[activeProject.status]" class="px-3 py-1 rounded-full text-sm border">{{ activeProject.status }}</span>
            <a
              v-if="activeProject.repo"
              :href="activeProject.repo"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
            >Voir le code</a>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="md:col-span-2 space-y-4">
            <p class="text-gray-300">{{ activeProject.description }}</p>
            <div v-for="section in activeProject.sections" :key="section.title">
              <h4 class="font-semibold text-white mb-2">{{ section.title }}</h4>
              <ul class="list-disc list-inside text-gray-300 space-y-1">
                <li v-for="item in section.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-3">Stack</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="t in activeProject.tech" :key="t" class="px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700 text-gray-300 text-sm">
                {{ t }}
              </span>
            </div>
            <div v-if="activeProject.aside" class="mt-6">
              <h4 class="font-semibold text-white mb-2">{{ activeProject.aside.title }}</h4>
              <p class="text-gray-300 text-sm">{{ activeProject.aside.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, nextTick, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'
import { projects, statusStyles } from '../data/projects.js'

const route = useRoute()
const router = useRouter()
const detailSection = ref(null)
const activeKey = ref(null)

const activeProject = computed(() => projects.find((p) => p.key === activeKey.value) || null)
const validKeys = new Set(projects.map((p) => p.key))

const scrollToDetail = () => {
  if (detailSection.value) {
    detailSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Ouvre la fiche et met à jour l'URL pour permettre les liens directs
function goToDetail(key) {
  if (!validKeys.has(key)) return
  if (route.query.project !== key) {
    router.push({ name: 'Projects', query: { ...route.query, project: key } })
  }
  activeKey.value = key
  nextTick(scrollToDetail)
}

const hydrateFromQuery = (key) => {
  if (validKeys.has(key)) {
    activeKey.value = key
    // Laisse la transition de page se terminer avant de défiler
    setTimeout(scrollToDetail, 500)
  } else {
    activeKey.value = null
  }
}

onMounted(() => hydrateFromQuery(route.query.project))

watch(() => route.query.project, (key) => {
  if (key !== activeKey.value) hydrateFromQuery(key)
})
</script>
