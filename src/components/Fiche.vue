<template>
  <component :is="tag" class="relative" :class="tab ? 'mt-7' : ''">
    <!-- Onglet de classeur collé au bord supérieur -->
    <span
      v-if="tab"
      class="absolute -top-[26px] left-4 border-2 border-b-0 border-lilac px-3 py-0.5 font-mono text-xs font-bold leading-5"
      :class="tabTone === 'primary' ? 'bg-primary text-white' : 'bg-primary-dark text-bg-light'"
    >{{ tab }}</span>

    <div class="border-2" :class="[borderClass, bgClass, shadowClass]">
      <slot />
    </div>

    <Stamp
      v-if="stamp"
      class="absolute"
      :class="stampClass"
      :label="stamp"
      :tone="stampTone"
      :size="stampSize"
      :rotate="stampRotate"
    />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import Stamp from './Stamp.vue'

// Fiche de dossier : onglet, cadre à bordure épaisse, ombre portée dure, tampon.
const props = defineProps({
  tag: { type: String, default: 'article' },
  tab: { type: String, default: '' },
  tabTone: { type: String, default: 'dark' },
  border: { type: String, default: 'lilac' },
  bg: { type: String, default: 'surface' },
  shadow: { type: String, default: 'dark' },
  shadowSize: { type: Number, default: 8 },
  stamp: { type: String, default: '' },
  stampTone: { type: String, default: 'default' },
  stampSize: { type: String, default: 'md' },
  stampRotate: { type: Number, default: -6 },
  stampClass: { type: String, default: '-bottom-4 -right-3' }
})

const borderClass = computed(() => ({
  lilac: 'border-lilac',
  line: 'border-line',
  primary: 'border-primary'
}[props.border]))

const bgClass = computed(() => ({
  surface: 'bg-surface',
  ink: 'bg-ink',
  'primary-dark': 'bg-primary-dark'
}[props.bg]))

// Classes écrites en entier pour que Tailwind les détecte
const shadowClass = computed(() => ({
  'dark-6': 'shadow-dur-6',
  'primary-6': 'shadow-dur-6 shadow-primary',
  'dark-8': 'shadow-dur-8',
  'primary-8': 'shadow-dur-8 shadow-primary',
  'dark-10': 'shadow-dur-10 shadow-primary-dark',
  'primary-10': 'shadow-dur-10',
  'primary-12': 'shadow-dur-12'
}[`${props.shadow}-${props.shadowSize}`]))
</script>
