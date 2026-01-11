<template>
  <div class="card p-4 rounded-lg">
    <div class="flex items-start justify-between">
      <div>
        <h3 class="text-lg font-semibold">{{ project.title }}</h3>
        <p class="text-sm text-muted-light mt-1">{{ project.short }}</p>
      </div>
      <div class="text-sm text-primary cursor-pointer" @click="open = true">Voir</div>
    </div>

    <div v-if="open" class="mt-4 bg-gray-900 p-4 rounded">
      <div class="flex justify-between items-start">
        <div>
          <h4 class="font-bold">{{ project.title }}</h4>
          <p class="text-sm text-muted-light mt-2">{{ project.long }}</p>
          <div class="mt-3 flex gap-2 flex-wrap">
            <span v-for="t in project.tech" :key="t" class="text-xs px-2 py-1 bg-primary/15 rounded">{{ t }}</span>
          </div>
        </div>
        <button @click="open = false" class="text-muted-light">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({ project: Object })
const open = ref(false)
</script>
