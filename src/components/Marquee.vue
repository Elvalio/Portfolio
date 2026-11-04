<template>
  <section
    :aria-label="t('marquee.label')"
    class="overflow-hidden whitespace-nowrap border-y-2 border-lilac bg-primary py-3 font-mono text-[13px] tracking-[0.04em] text-white"
  >
    <p class="defile m-0">
      <template v-for="(entry, i) in entries" :key="i">
        <span v-if="entry.prefix" class="font-bold">{{ entry.prefix }} </span>
        <span :class="entry.bold ? 'font-bold' : ''">{{ entry.lead }}</span>
        <span v-if="entry.rest"> · {{ entry.rest }}</span>
        <span aria-hidden="true" class="mx-6">∆</span>
      </template>
    </p>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { timeline } from '../data/timeline.js'
import { search } from '../data/profile.js'
import { t, tr } from '../i18n'

// Bandeau façon `git log --oneline`, du plus récent au plus ancien, généré
// depuis la frise et le statut de recherche.
const entries = computed(() => [
  ...[...timeline]
    .reverse()
    .filter((step) => step.ticker)
    .map((step) => ({
      prefix: step.type === 'en-cours' ? '(HEAD → main)' : '',
      lead: tr(step.ticker),
      rest: '',
      bold: false
    })),
  ...(search.open ? [{ prefix: '', lead: tr(search.command), rest: tr(search.ticker), bold: true }] : [])
])
</script>
