<template>
  <ul class="flex flex-wrap gap-2 font-mono text-xs font-bold">
    <li v-for="(item, i) in items" :key="i" class="border border-accent-text px-2 py-[3px] text-lilac">{{ tr(item) }}</li>
  </ul>
</template>

<script setup>
import { tr } from '../i18n'

// Les éléments peuvent être des chaînes ou des textes bilingues { fr, en }
defineProps({
  items: { type: Array, required: true }
})
</script>
