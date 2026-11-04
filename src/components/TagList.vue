<template>
  <ul class="flex flex-wrap gap-2 font-mono text-xs font-bold">
    <li v-for="item in items" :key="item" class="border border-accent-text px-2 py-[3px] text-lilac">{{ item }}</li>
  </ul>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true }
})
</script>
