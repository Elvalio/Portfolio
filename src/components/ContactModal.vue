<template>
  <Teleport to="body">
    <Transition name="fondu">
      <div v-if="isOpen" class="fixed inset-0 z-[55] bg-[rgba(5,4,15,0.72)]" aria-hidden="true"></div>
    </Transition>

    <Transition name="glisse">
      <div v-if="isOpen" class="fixed inset-0 z-[60] overflow-y-auto px-4 py-16 sm:py-24" @click.self="closeModal">
        <div
          ref="dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="titre-contact"
          class="relative mx-auto mt-7 w-full max-w-[760px]"
          @keydown="onKeydown"
        >
          <span class="absolute -top-[26px] left-4 border-2 border-b-0 border-lilac bg-primary px-3 py-0.5 font-mono text-xs font-bold leading-5 text-white">Fiche CT · nouveau message</span>

          <div class="border-2 border-lilac bg-surface shadow-dur-12">
            <!-- Barre de titre -->
            <div class="flex items-center justify-between gap-3 border-b-2 border-lilac bg-primary-dark px-4 py-2.5 font-mono text-[13px]">
              <div class="flex min-w-0 items-center gap-2 text-lilac">
                <span class="h-2.5 w-2.5 flex-none border border-lilac bg-primary" aria-hidden="true"></span>
                <span class="h-2.5 w-2.5 flex-none border border-lilac bg-muted-light" aria-hidden="true"></span>
                <span class="h-2.5 w-2.5 flex-none border border-lilac bg-bg-light" aria-hidden="true"></span>
                <span class="ml-2 truncate">harry@portfolio:~$ ./contact.sh</span>
              </div>
              <button
                type="button"
                class="inline-flex h-11 w-11 flex-none items-center justify-center border-2 border-lilac text-bg-light"
                aria-label="Fermer"
                @click="closeModal"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </div>

            <div class="flex flex-col gap-6 p-5 sm:p-8">
              <div>
                <h2 id="titre-contact" class="font-display text-[40px] font-black uppercase leading-none">Me contacter</h2>
                <p class="mt-2.5 text-muted-light">Une offre d'alternance, une question sur un projet : je réponds généralement sous 48 heures.</p>
              </div>

              <form class="flex flex-col gap-[18px]" novalidate @submit.prevent="handleSubmit">
                <div class="flex flex-wrap gap-[18px]">
                  <label class="flex flex-[1_1_260px] flex-col gap-1.5 text-sm text-muted-light">
                    <span><span class="font-mono text-accent-text">--nom</span>  Nom complet</span>
                    <input ref="firstField" v-model="form.name" type="text" autocomplete="name" placeholder="Prénom Nom" required :class="fieldClass" />
                  </label>
                  <label class="flex flex-[1_1_260px] flex-col gap-1.5 text-sm text-muted-light">
                    <span><span class="font-mono text-accent-text">--email</span>  Adresse e-mail</span>
                    <input v-model="form.email" type="email" autocomplete="email" placeholder="vous@entreprise.fr" required :class="fieldClass" />
                  </label>
                </div>
                <label class="flex flex-col gap-1.5 text-sm text-muted-light">
                  <span><span class="font-mono text-accent-text">--sujet</span>  Sujet</span>
                  <input v-model="form.subject" type="text" placeholder="Alternance développeur" required :class="fieldClass" />
                </label>
                <label class="flex flex-col gap-1.5 text-sm text-muted-light">
                  <span><span class="font-mono text-accent-text">--message</span>  Message</span>
                  <textarea v-model="form.message" rows="6" placeholder="Bonjour Harry, …" required :class="[fieldClass, 'resize-y']"></textarea>
                </label>

                <!-- Piège anti-spam : invisible pour les visiteurs, coché par les robots -->
                <input v-model="form.botcheck" type="checkbox" class="hidden" tabindex="-1" autocomplete="off" aria-hidden="true" />

                <div class="flex flex-wrap items-center gap-3.5 font-mono text-sm font-bold">
                  <button
                    type="submit"
                    class="min-h-[48px] border-2 border-bg-light bg-bg-light px-[22px] py-3 text-primary-dark shadow-dur-4 disabled:opacity-60"
                    :disabled="status === 'loading'"
                  >envoyer ↵</button>
                  <button type="button" class="min-h-[48px] border-2 border-line px-[22px] py-3 text-bg-light" @click="closeModal">annuler</button>
                </div>
              </form>

              <!-- Sortie du script -->
              <div class="flex flex-col gap-1 border border-line bg-ink-deep px-4 py-3.5 font-mono text-[13px]" role="status" aria-live="polite">
                <p v-if="output" :class="output.tone">
                  {{ output.text }}<template v-if="output.mail"> · écrivez à <a :href="`mailto:${contact.email}`">{{ contact.email }}</a></template>
                </p>
                <p class="mt-1 flex items-center gap-1.5" aria-hidden="true">
                  <span class="text-accent-text">$</span><span class="curseur inline-block h-4 w-2 bg-accent-text"></span>
                </p>
              </div>

              <p class="text-sm text-muted-light">
                Ou directement : <a :href="`mailto:${contact.email}`" class="font-mono">{{ contact.email }}</a>
                · <a :href="contact.linkedin" target="_blank" rel="noopener noreferrer" class="font-mono">linkedin ↗</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { reactive, ref, computed, watch, nextTick, onBeforeUnmount } from 'vue'
import { contact, web3formsAccessKey } from '../data/profile.js'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const fieldClass = 'min-h-[44px] w-full border-2 border-line bg-ink px-3 py-2.5 text-[15px] text-bg-light placeholder:text-[#7F7BB0]'

const emptyForm = () => ({
  name: '',
  email: '',
  subject: '',
  message: '',
  botcheck: false
})

const form = reactive(emptyForm())
const status = ref('idle') // idle | loading | success | invalid | unavailable | error

const dialog = ref(null)
const firstField = ref(null)
let opener = null

// Ligne affichée dans la sortie du script
const output = computed(() => ({
  idle: null,
  loading: { text: '[..]  envoi en cours…', tone: 'text-muted', mail: false },
  success: { text: '[ok]  message envoyé · réponse sous 48 h', tone: 'text-lilac', mail: false },
  invalid: { text: '[err] remplissez les quatre champs, avec une adresse e-mail valide', tone: 'text-lilac', mail: false },
  unavailable: { text: '[err] formulaire indisponible pour le moment', tone: 'text-lilac', mail: true },
  error: { text: '[err] envoi impossible', tone: 'text-lilac', mail: true }
}[status.value]))

const resetForm = () => Object.assign(form, emptyForm())

const closeModal = () => {
  emit('close')
  resetForm()
  status.value = 'idle'
}

// Champs atteignables au clavier dans la fenêtre (pour garder le focus dedans)
const focusables = () => [...dialog.value.querySelectorAll(
  'a[href], button:not([disabled]), input:not([tabindex="-1"]), textarea, select'
)].filter((el) => el.offsetParent !== null)

const onKeydown = (event) => {
  if (event.key !== 'Tab') return
  const items = focusables()
  if (!items.length) return
  const first = items[0]
  const last = items[items.length - 1]
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

const onEscape = (event) => {
  if (event.key === 'Escape') closeModal()
}

watch(() => props.isOpen, async (open) => {
  if (open) {
    opener = document.activeElement
    document.addEventListener('keydown', onEscape)
    document.body.style.overflow = 'hidden'
    await nextTick()
    firstField.value?.focus()
  } else {
    document.removeEventListener('keydown', onEscape)
    document.body.style.overflow = ''
    // Rend le focus au bouton qui a ouvert la fenêtre
    if (opener && document.contains(opener)) opener.focus()
    opener = null
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onEscape)
  document.body.style.overflow = ''
})

const showSuccess = () => {
  status.value = 'success'
  resetForm()
  setTimeout(closeModal, 2000)
}

const handleSubmit = async () => {
  if (status.value === 'loading') return

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
  if (!form.name.trim() || !emailOk || !form.subject.trim() || !form.message.trim()) {
    status.value = 'invalid'
    return
  }

  // Case anti-spam cochée : c'est un robot, on fait semblant d'avoir envoyé
  if (form.botcheck) {
    showSuccess()
    return
  }

  // Sans clé Web3Forms, on renvoie vers l'adresse mail directement
  if (!web3formsAccessKey) {
    status.value = 'unavailable'
    return
  }

  status.value = 'loading'

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: web3formsAccessKey,
        subject: `[Portfolio] ${form.subject}`,
        name: form.name,
        email: form.email, // devient l'adresse de réponse du mail reçu
        message: form.message
      })
    })
    const result = await response.json()
    if (!response.ok || !result.success) {
      throw new Error(result.message || result.body?.message || `HTTP ${response.status}`)
    }
    showSuccess()
  } catch (err) {
    status.value = 'error'
    console.error('Erreur Web3Forms', err)
  }
}
</script>

<style scoped>
.fondu-enter-active,
.fondu-leave-active {
  transition: opacity 0.25s ease;
}

.fondu-enter-from,
.fondu-leave-to {
  opacity: 0;
}

.glisse-enter-active,
.glisse-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.glisse-enter-from,
.glisse-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}
</style>
