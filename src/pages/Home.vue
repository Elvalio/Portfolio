<template>
  <div class="w-full">
    <!-- Contact Modal -->
    <Contact :isOpen="contactModalOpen" @close="contactModalOpen = false" />

    <!-- Section full-screen d'introduction -->
    <section class="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <!-- Image de fond -->
      <div
        class="absolute inset-0 bg-cover bg-center transform scale-105 filter blur-sm"
        :style="{ backgroundImage: `url('${bgUrl}')` }"
        aria-hidden="true"
      ></div>

      <!-- dark overlay -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true"></div>

      <!-- Crédit photo -->
      <div class="absolute bottom-4 right-4 z-10 text-xs text-gray-400/70 text-right">
        <p>Photo by <a href="https://www.instagram.com/rmradev/" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">@rmradev</a></p>
        <p>Source: <a href="https://4kwallpapers.com/nature/moon-evening-sky-mountains-forest-silhouette-402.html" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors">4kwallpapers</a></p>
      </div>

      <div class="relative z-10 max-w-4xl px-6">
        <div class="mx-auto w-fit">
          <div class="rounded-full p-1 bg-gradient-to-tr from-primary to-primary-dark inline-block">
            <div class="rounded-full overflow-hidden w-44 h-44 bg-transparent shadow-2xl">
              <img src="/images/profile.png" alt="Photo de profil" class="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        <h1 class="text-5xl md:text-7xl font-extrabold text-white mt-8">Harry Troulé</h1>
        <p class="text-xl md:text-2xl text-gray-200 mt-4">Étudiant — IUT de Lannion — BUT3</p>
        <p class="text-md md:text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
          Développeur web passionné par la création d'expériences numériques modernes et intuitives
        </p>

        <!-- Icônes réseaux sociaux -->
        <div class="mt-8 flex justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/harry-troule/" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-300 hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.869 0-9.793h3.554v1.391c-.009.015-.021.029-.033.042h.033v-.042c.537-.827 1.491-2.009 3.622-2.009 2.645 0 4.631 1.728 4.631 5.452v5.159zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.955.77-1.702 1.956-1.702 1.184 0 1.914.747 1.939 1.702 0 .947-.755 1.705-1.98 1.705zm1.946 11.597H3.392V9.659h3.891v10.793zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </a>
          <a 
            href="https://github.com/Elvalio/" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-300 hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        <!-- Flèche cliquable avec texte -->
        <div class="mt-16">
          <p class="text-gray-300 text-sm mb-4 animate-pulse">Scrollez pour découvrir</p>
          <button 
            @click="scrollToContent"
            class="animate-bounce text-white hover:text-primary transition-colors cursor-pointer"
            aria-label="Défiler vers le contenu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Contenu principal avec padding-top pour le header fixe -->
    <div ref="contentSection" class="pt-20">
      <main class="container mx-auto px-4 py-12">
        <section class="space-y-6 reveal">
          <div class="card p-6 rounded-lg">
            <h2 class="text-2xl font-bold">À propos</h2>
            <p class="mt-3 text-muted-light">Bienvenue sur mon portfolio. Je suis étudiant en BUT3 à l'IUT de Lannion, passionné par le développement web et les projets techniques. Explorez mes projets et ma formation ci-dessous.</p>
          </div>
        </section>

        <section class="mt-8 reveal">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold">Projets mis en avant</h2>
            <router-link to="/projects" class="text-primary hover:underline">Voir tous les projets →</router-link>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              class="card p-4 rounded-lg hover:scale-105 transition-transform cursor-pointer"
              role="button"
              tabindex="0"
              @click="goToProject('portfolio')"
              @keyup.enter="goToProject('portfolio')"
            >
              <h3 class="font-semibold text-xl">Portfolio Personnel</h3>
              <p class="text-sm text-muted-light mt-2">Site développé avec Vue 3, Vite et Tailwind CSS avec des animations modernes.</p>
                <div class="mt-4 flex gap-2">
                <div class="flex items-center gap-4">
                  <span class="text bg-primary/20 px-2 py-1 rounded flex items-center"><img src="../assets/logos/TailwindCSS.png" alt="Tailwind CSS" class="inline w-4 h-4 mr-1"/>Tailwind</span>
                  <span class="text bg-primary/20 px-2 py-1 rounded flex items-center"><img src="../assets/logos/VueJS.png" alt="Vue.js" class="inline w-4 h-4 mr-1"/>Vue.js</span>
                </div>
                </div>
            </div>
            <div
              class="card p-4 rounded-lg hover:scale-105 transition-transform cursor-pointer"
              role="button"
              tabindex="0"
              @click="goToProject('trip')"
              @keyup.enter="goToProject('trip')"
            >
              <h3 class="font-semibold text-xl">TripEnArmor</h3>
              <p class="text-sm text-muted-light mt-2">Site d'avis et de conseils touristiques en France avec front-end et back-end.</p>
              <div class="mt-4 flex gap-2">
                  <span class="text bg-primary/20 px-2 py-1 rounded flex items-center"><img src="../assets/logos/HTML.png" alt="HTML" class="inline w-4 h-4 mr-1"/>HTML</span>
                  <span class="text bg-primary/20 px-2 py-1 rounded flex items-center"><img src="../assets/logos/CSS.png" alt="CSS" class="inline w-4 h-4 mr-1"/>CSS</span>
                  <span class="text bg-primary/20 px-2 py-1 rounded flex items-center"><img src="../assets/logos/JavaScript.png" alt="JavaScript" class="inline w-4 h-4 mr-1"/>JavaScript</span>
                  <span class="text bg-primary/20 px-2 py-1 rounded flex items-center"><img src="../assets/logos/PostgreSQL.png" alt="PostgreSQL" class="inline w-4 h-4 mr-1"/>PostgreSQL</span>
              </div>
            </div>
          </div>
        </section>

        <section class="mt-12 reveal">
          <h2 class="text-2xl font-bold mb-6">Compétences</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="card p-4 text-center">
              <div class="text-3xl mb-2">🎨</div>
              <h3 class="font-semibold">Front-end</h3>
              <p class="text-xs text-muted-light mt-1">Vue, Tailwind, HTML/CSS/JS</p>
            </div>
            <div class="card p-4 text-center">
              <div class="text-3xl mb-2">⚙️</div>
              <h3 class="font-semibold">Back-end</h3>
              <p class="text-xs text-muted-light mt-1">Node.js, Express, APIs</p>
            </div>
            <div class="card p-4 text-center">
              <div class="text-3xl mb-2">🗄️</div>
              <h3 class="font-semibold">Bases de données</h3>
              <p class="text-xs text-muted-light mt-1">MongoDB, PostgreSQL</p>
            </div>
            <div class="card p-4 text-center">
              <div class="text-3xl mb-2"></div>
              <div class="text-3xl mb-2">♾️</div>
              <h3 class="font-semibold">DevOps</h3>
              <p class="text-xs text-muted-light mt-1">Git, Docker, Systèmes Linux</p>
            </div>
          </div>
        </section>

        <section class="mt-12 reveal text-center">
          <div class="card p-8 rounded-lg">
            <h2 class="text-2xl font-bold mb-4">Travaillons ensemble</h2>
            <p class="text-muted-light mb-6">Je suis ouvert aux opportunités de stage et projets collaboratifs.</p>
            <div class="flex justify-center gap-4 flex-wrap">
              <button @click="contactModalOpen = true" class="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition">
                Me contacter
              </button>
              <a :href="baseUrl + 'CV.pdf'" download="CV.pdf" class="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition">
                Télécharger mon CV
              </a>
              <a href="https://www.linkedin.com/in/harry-troule/" target="_blank" class="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition">
                LinkedIn
              </a>
              <a href="https://github.com/Elvalio/" target="_blank" class="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer intégré dans la page Home -->
      <footer class="mt-16 py-12 border-t border-gray-700">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <!-- Contact Info -->
            <div>
              <h3 class="text-lg font-bold mb-4">Contact</h3>
              <div class="space-y-2 text-muted-light text-sm">
                <p><strong>Email: </strong><a href="mailto:htroule@gmail.com" class="hover:text-primary transition">htroule@gmail.com</a></p>
                <p><strong>Localisation:</strong> Lannion, France</p>
              </div>
            </div>
            
            <!-- Liens rapides -->
            <div>
              <h3 class="text-lg font-bold mb-4">Liens rapides</h3>
              <div class="space-y-2 text-muted-light text-sm">
                <div><router-link to="/projects" class="hover:text-primary transition">Projets</router-link></div>
                <div><router-link to="/education" class="hover:text-primary transition">Formation</router-link></div>
                <div><a :href="baseUrl + 'CV.pdf'" download="CV.pdf" class="hover:text-primary transition">Télécharger CV</a></div>
              </div>
            </div>
            
            <!-- Réseaux sociaux -->
            <div>
              <h3 class="text-lg font-bold mb-4">Réseaux sociaux</h3>
              <div class="flex gap-4">
                <a href="https://www.linkedin.com/in/harry-troule/" target="_blank" rel="noopener noreferrer" class="text-muted-light hover:text-primary transition">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.869 0-9.793h3.554v1.391c-.009.015-.021.029-.033.042h.033v-.042c.537-.827 1.491-2.009 3.622-2.009 2.645 0 4.631 1.728 4.631 5.452v5.159zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.955.77-1.702 1.956-1.702 1.184 0 1.914.747 1.939 1.702 0 .947-.755 1.705-1.98 1.705zm1.946 11.597H3.392V9.659h3.891v10.793zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
                </a>
                <a href="https://github.com/Elvalio/" target="_blank" rel="noopener noreferrer" class="text-muted-light hover:text-primary transition">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div class="text-center text-sm text-muted-light pt-8 border-t border-gray-800">
            © {{ new Date().getFullYear() }} Harry Troulé — Portfolio
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
</script>

<script>
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Contact from '../pages/Contact.vue'
import bgImage from '../assets/moon-evening-sky-mountains-forest-silhouette-3840x2160-402.jpg'


export default {
  components: {
    Contact
  },
  emits: ['update-scroll'],
  setup(props, { emit }) {
    const bgUrl = ref(bgImage)
    const contentSection = ref(null)
    const router = useRouter()
    const contactModalOpen = ref(false)
  // Base URL géré par Vite (utile si le site est servi sous /Portfolio/)
  const baseUrl = import.meta.env.BASE_URL || '/'

    const scrollToContent = () => {
      if (contentSection.value) {
        contentSection.value.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const goToProject = (projectKey) => {
      router.push({ name: 'Projects', query: { project: projectKey } })
    }

    const handleScroll = () => {
      // Calculer l'opacité du header en fonction du scroll
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Le header commence à apparaître après 50% du scroll de la première section
      // et est complètement visible après 80% du scroll
      const startFade = windowHeight * 0.5
      const endFade = windowHeight * 0.9
      
      let opacity = 0
      if (scrollY > startFade) {
        opacity = Math.min((scrollY - startFade) / (endFade - startFade), 1)
      }
      
      emit('update-scroll', opacity)
    }

    onMounted(() => {
      // simple reveal-on-scroll for elements with class 'reveal'
      const reveals = document.querySelectorAll('.reveal')
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            io.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12 })

      reveals.forEach((el) => io.observe(el))
      
      // Écouter le scroll
      window.addEventListener('scroll', handleScroll)
      // Initialiser l'opacité
      handleScroll()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      // Réinitialiser l'opacité quand on quitte la page
      emit('update-scroll', 1)
    })

    return { bgUrl, contentSection, scrollToContent, baseUrl, goToProject, contactModalOpen }
  }
}
</script>

<style scoped>
.reveal { opacity: 0; transform: translateY(18px); transition: opacity .6s ease, transform .6s ease; }
.revealed { opacity: 1; transform: translateY(0); }
</style>
