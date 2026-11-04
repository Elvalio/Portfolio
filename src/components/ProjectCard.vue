<template>
  <article
    class="relative flex flex-col gap-2.5 border-2 bg-ink p-[18px]"
    :class="highlight ? 'border-primary shadow-dur-6 shadow-primary' : 'border-line shadow-dur-6'"
  >
    <span class="font-mono text-xs font-bold text-accent-text">#{{ number }} · {{ tr(project.cadre) }}</span>
    <h3 class="font-display text-[22px] font-extrabold uppercase leading-tight">{{ project.title }}</h3>
    <p class="text-[15px] text-muted-light">{{ tr(project.short) }}</p>
    <p class="font-mono text-xs text-lilac">{{ project.tech.slice(0, 3).map(tr).join(' · ') }}</p>
    <router-link
      :to="{ name: 'Projects', query: { project: project.key } }"
      class="inline-flex min-h-[44px] items-center self-start font-mono text-sm font-bold"
    >cat README.md<span class="sr-only">{{ t('projects.readmeSr', { title: project.title }) }}</span>&nbsp;→</router-link>

    <Stamp
      class="absolute -right-2.5 -top-3.5"
      :label="tr(status.stamp)"
      :tone="status.tone"
      size="sm"
      :rotate="rotate"
    />
  </article>
</template>

<script setup>
import { computed } from 'vue'
import Stamp from './Stamp.vue'
import { statuses } from '../data/projects.js'
import { t, tr } from '../i18n'

const props = defineProps({
  project: { type: Object, required: true },
  index: { type: Number, required: true }
})

const number = computed(() => String(props.index + 1).padStart(2, '0'))
const highlight = computed(() => props.project.category === 'stage')
const status = computed(() => statuses[props.project.status] || statuses.done)
const rotate = computed(() => [6, -5, 4, -6, 5][props.index % 5])
</script>
