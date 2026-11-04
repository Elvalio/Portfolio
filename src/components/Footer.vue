<template>
  <footer class="mt-16 py-12 border-t border-gray-700">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-bold mb-4">Contact</h3>
          <div class="space-y-2 text-muted-light text-sm">
            <p><strong>Email : </strong><a :href="`mailto:${contact.email}`" class="hover:text-primary transition">{{ contact.email }}</a></p>
            <p><strong>Localisation :</strong> {{ contact.location }}</p>
            <p><button type="button" @click="openContact" class="hover:text-primary transition">Formulaire de contact</button></p>
          </div>
        </div>

        <!-- Liens rapides -->
        <div>
          <h3 class="text-lg font-bold mb-4">Liens rapides</h3>
          <div class="space-y-2 text-muted-light text-sm">
            <div><router-link to="/" class="hover:text-primary transition">Accueil</router-link></div>
            <div><router-link to="/projects" class="hover:text-primary transition">Projets</router-link></div>
            <div><router-link to="/education" class="hover:text-primary transition">Formation</router-link></div>
            <div><a :href="cvUrl" download="CV_Harry_Troule.pdf" class="hover:text-primary transition">Télécharger CV</a></div>
          </div>
        </div>

        <!-- Réseaux sociaux -->
        <div>
          <h3 class="text-lg font-bold mb-4">Réseaux sociaux</h3>
          <div class="flex gap-4">
            <a :href="contact.linkedin" target="_blank" rel="noopener noreferrer" class="text-muted-light hover:text-primary transition" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" aria-hidden="true"><path :d="linkedinPath" /></svg>
            </a>
            <a :href="contact.github" target="_blank" rel="noopener noreferrer" class="text-muted-light hover:text-primary transition" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8" aria-hidden="true"><path :d="githubPath" /></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="text-center text-sm text-muted-light pt-8 border-t border-gray-800">
        © {{ new Date().getFullYear() }} {{ contact.name }} — Portfolio
      </div>
    </div>
  </footer>
</template>

<script setup>
import { inject } from 'vue'
import { contact } from '../data/profile.js'
import { linkedinPath, githubPath } from '../data/icons.js'

const openContact = inject('openContact')
const cvUrl = import.meta.env.BASE_URL + 'CV.pdf'
</script>
