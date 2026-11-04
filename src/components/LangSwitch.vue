<template>
  <div role="group" :aria-label="t('lang.label')" class="inline-flex min-h-[44px] items-stretch border-2 font-mono text-sm" :class="onHero ? 'border-lilac bg-ink/75' : 'border-line'">
    <button
      v-for="(lang, i) in languages"
      :key="lang.code"
      type="button"
      :lang="lang.code"
      :aria-label="lang.name"
      :aria-pressed="locale === lang.code"
      class="px-3 transition-colors"
      :class="[
        locale === lang.code ? 'bg-primary font-bold text-white' : 'text-muted-light hover:text-bg-light',
        i > 0 ? (onHero ? 'border-l-2 border-lilac' : 'border-l-2 border-line') : ''
      ]"
      @click="setLocale(lang.code)"
    >{{ lang.label }}</button>
  </div>
</template>

<script setup>
import { languages, locale, setLocale, t } from '../i18n'

// Sélecteur de langue façon option de commande : [ fr | en ]
defineProps({
  // Posé sur le Hero : bordure lilas et fond assombri, comme les liens de navigation
  onHero: { type: Boolean, default: false }
})
</script>
