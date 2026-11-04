<template>
  <p class="font-mono text-[13px] font-bold uppercase tracking-[0.1em]" :class="light ? 'text-lilac' : 'text-muted'">
    {{ code }} · <span :class="light ? 'text-bg-light' : 'text-accent-text'">$</span> {{ cmd }}
  </p>
</template>

<script setup>
// Surtitre de section : « Fiche 01 · $ ls projets/ »
defineProps({
  code: { type: String, required: true },
  cmd: { type: String, required: true },
  // light : sur fond indigo
  light: { type: Boolean, default: false }
})
</script>
