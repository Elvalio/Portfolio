<template>
  <!-- Overlay -->
  <Teleport to="body">
    <Transition name="fade">
      <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" @click="closeModal" v-if="isOpen"></div>
    </Transition>

    <!-- Modal Container -->
    <Transition name="slide-down">
      <div class="fixed inset-0 flex items-center justify-center z-50 p-4" @click="closeModal" v-if="isOpen">
        <div class="rounded-xl border border-gray-700 shadow-2xl overflow-hidden w-full max-w-2xl relative" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));" @click.stop>
        <!-- Fond avec blur -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        
        <!-- Contenu -->
        <div class="relative z-10">
        <div class="flex items-center justify-between p-6 md:p-8 border-b border-gray-700">
          <div>
            <h2 class="text-3xl font-bold text-white">Contactez-moi</h2>
            <p class="text-sm text-muted-light mt-1">Je réponds généralement sous 48 heures.</p>
          </div>
          <button
            @click="closeModal"
            class="text-gray-300 hover:text-white transition-colors"
            aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="p-6 md:p-8 space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <label class="block text-sm text-gray-300">
              Nom complet
              <input v-model="form.name" type="text" class="mt-1 w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 focus:border-primary focus:ring-primary outline-none" placeholder="John Doe" required />
            </label>
            <label class="block text-sm text-gray-300">
              Email
              <input v-model="form.email" type="email" class="mt-1 w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 focus:border-primary focus:ring-primary outline-none" placeholder="vous@example.com" required />
            </label>
          </div>

          <label class="block text-sm text-gray-300">
            Sujet
            <input v-model="form.subject" type="text" class="mt-1 w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 focus:border-primary focus:ring-primary outline-none" placeholder="Proposition de projet" required />
          </label>

          <label class="block text-sm text-gray-300">
            Message
            <textarea v-model="form.message" rows="6" class="mt-1 w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 focus:border-primary focus:ring-primary outline-none" placeholder="Bonjour Harry, ..." required></textarea>
          </label>

          <div class="flex flex-col gap-3 pt-4">
            <button type="submit" class="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition disabled:opacity-60 font-semibold" :disabled="status === 'loading'">
              <span v-if="status === 'loading'">Envoi...</span>
              <span v-else>Envoyer</span>
            </button>
            <div class="flex items-center gap-3 justify-center">
              <span v-if="status === 'success'" class="text-emerald-400 text-sm">✓ Message envoyé!</span>
              <span v-else-if="status === 'error'" class="text-rose-400 text-sm">{{ feedback }}</span>
            </div>
          </div>
        </form>
        </div>
      </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { reactive, ref, defineProps, defineEmits } from 'vue'
import emailjs from '@emailjs/browser'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const status = ref('idle')
const feedback = ref('')

const closeModal = () => {
  emit('close')
  // Réinitialiser le formulaire
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  status.value = 'idle'
  feedback.value = ''
}

const handleSubmit = () => {
  if (status.value === 'loading') return

  if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
    status.value = 'error'
    feedback.value = 'Merci de remplir tous les champs.'
    return
  }

  status.value = 'loading'
  feedback.value = ''

  const templateParams = {
    name: form.name,
    email: form.email,
    title: form.subject,
    message: form.message,
    time: new Date().toLocaleString('fr-FR')
  }

  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    templateParams,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  .then(() => {
    status.value = 'success'
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    setTimeout(() => {
      closeModal()
    }, 2000)
  })
  .catch((err) => {
    status.value = 'error'
    feedback.value = 'Erreur lors de l\'envoi. Vérifiez vos identifiants EmailJS.'
    console.error('Erreur EmailJS', err)
  })
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
