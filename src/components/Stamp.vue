<template>
  <span
    class="pointer-events-none inline-block whitespace-nowrap border-2 font-mono font-bold uppercase"
    :class="[toneClass, sizeClass]"
    :style="{ transform: `rotate(${rotate}deg)` }"
  >{{ label }}</span>
</template>

<script setup>
import { computed } from 'vue'

// Tampon de statut incliné (OBTENU, TERMINÉ, EN COURS…)
const props = defineProps({
  label: { type: String, required: true },
  // default : lilas sur fond sombre · muted : gris · filled : plein violet · inverse : sur fond indigo
  tone: { type: String, default: 'default' },
  size: { type: String, default: 'md' },
  rotate: { type: Number, default: -6 }
})

const toneClass = computed(() => ({
  default: 'bg-ink text-lilac border-lilac outline outline-1 outline-lilac',
  muted: 'bg-ink text-muted-light border-muted-light outline outline-1 outline-muted-light',
  filled: 'bg-primary text-white border-bg-light outline outline-1 outline-bg-light',
  inverse: 'bg-transparent text-bg-light border-bg-light border-[3px] outline outline-1 outline-bg-light'
}[props.tone]))

const sizeClass = computed(() => ({
  sm: 'px-2.5 py-0.5 text-[11px] tracking-[0.16em] outline-offset-2',
  md: 'px-2.5 py-[3px] text-xs tracking-[0.16em] outline-offset-2',
  lg: 'px-3.5 py-1 text-sm tracking-[0.2em] outline-offset-[3px]'
}[props.size]))
</script>
