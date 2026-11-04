import { ref, computed, watch } from 'vue'
import { messages } from './messages.js'

// Langues du site. Le français reste la langue de référence (repli).
export const languages = [
  { code: 'fr', label: 'fr', name: 'Français' },
  { code: 'en', label: 'en', name: 'English' }
]
const codes = languages.map((l) => l.code)
const STORAGE_KEY = 'langue'

// Choix mémorisé, sinon langue du navigateur (français ou, à défaut, anglais)
function initialLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (codes.includes(saved)) return saved
  } catch (e) {
    // Stockage indisponible (navigation privée, cookies bloqués) : on ignore
  }
  const nav = (navigator.languages?.[0] || navigator.language || 'fr').toLowerCase()
  return nav.startsWith('fr') ? 'fr' : 'en'
}

export const locale = ref(initialLocale())

watch(locale, (code) => {
  document.documentElement.lang = code
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch (e) {
    // Stockage indisponible : le choix vaut pour la visite en cours
  }
}, { immediate: true })

export const setLocale = (code) => {
  if (codes.includes(code)) locale.value = code
}

// Locale Intl pour les nombres et les dates
export const intlLocale = computed(() => (locale.value === 'fr' ? 'fr-FR' : 'en-GB'))

// Contenu bilingue des données ({ fr, en }) → texte de la langue courante
export const tr = (value) => {
  if (value && typeof value === 'object' && !Array.isArray(value) && ('fr' in value || 'en' in value)) {
    return value[locale.value] ?? value.fr
  }
  return value
}

// Texte de l'interface, avec remplacement des {variables}
export const t = (key, params = {}) => {
  const text = messages[locale.value]?.[key] ?? messages.fr[key] ?? key
  return text.replace(/\{(\w+)\}/g, (_, name) => (name in params ? params[name] : `{${name}}`))
}
