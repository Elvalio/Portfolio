<template>
  <div class="min-h-screen flex items-center justify-center py-10">
    <!-- Overlay -->
    <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"></div>

    <!-- Modal -->
    <div class="relative z-50 w-full max-w-2xl mx-auto px-4">
      <div class="card rounded-xl border border-gray-700 bg-gray-800/95 shadow-2xl overflow-hidden">
        <!-- Header -->
        <div class="flex items-center justify-between p-6 md:p-8 border-b border-gray-700">
          <div>
            <h2 class="text-3xl font-bold text-white">Contactez-moi</h2>
            <p class="text-sm text-muted-light mt-1">Je réponds généralement sous 48 heures.</p>
          </div>
          <button
            @click="$router.go(-1)"
            class="text-gray-400 hover:text-white transition-colors"
            aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

          <div class="flex items-center justify-between gap-3 pt-4">
            <div class="flex items-center gap-3">
              <button type="submit" class="bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary/90 transition disabled:opacity-60" :disabled="status === 'loading'">
                <span v-if="status === 'loading'">Envoi...</span>
                <span v-else>Envoyer</span>
              </button>
              <span v-if="status === 'success'" class="text-emerald-400 text-sm">✓ Message envoyé!</span>
              <span v-else-if="status === 'error'" class="text-rose-400 text-sm">{{ feedback }}</span>
            </div>
            <button type="button" @click="$router.go(-1)" class="text-gray-400 hover:text-gray-300 px-4 py-2 rounded-lg border border-gray-700">
              Fermer
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const status = ref('idle')
const feedback = ref('')

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
      router.go(-1)
    }, 2000)
  })
  .catch((err) => {
    status.value = 'error'
    feedback.value = 'Erreur lors de l\'envoi. Vérifiez vos identifiants EmailJS.'
    console.error('Erreur EmailJS', err)
  })
}
</script>
