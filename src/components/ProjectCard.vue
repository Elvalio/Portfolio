<template>
  <div class="rounded-xl border border-gray-700 bg-gray-800/40 overflow-hidden hover:border-primary/40 transition-colors group flex flex-col">
    <!-- Image Container -->
    <div class="relative h-64 bg-gray-900/60 flex items-center justify-center overflow-hidden">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="`Aperçu du projet ${project.title}`"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <span
        v-else
        class="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300"
      >{{ project.title }}</span>
      <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
    </div>

    <!-- Content -->
    <div class="p-6 flex flex-col flex-1">
      <div class="flex items-start justify-between gap-3 mb-3">
        <h4 class="text-lg font-bold text-white">{{ project.title }}</h4>
        <span :class="statusStyles[project.status]" class="px-2.5 py-1 rounded-full text-xs border flex-shrink-0">{{ project.status }}</span>
      </div>
      <p class="text-sm text-gray-300 mb-3">{{ project.short }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="t in project.tech.slice(0, 4)" :key="t" class="px-2 py-0.5 rounded-full bg-gray-800/60 border border-gray-700 text-gray-300 text-xs">{{ t }}</span>
      </div>
      <button
        @click="$emit('select', project.key)"
        class="mt-auto w-full text-center px-3 py-2 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition-colors text-sm"
      >Voir le détail</button>
    </div>
  </div>
</template>

<script setup>
import { statusStyles } from '../data/projects.js'

defineProps({
  project: { type: Object, required: true }
})

defineEmits(['select'])
</script>
