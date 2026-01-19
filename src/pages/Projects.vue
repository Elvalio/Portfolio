<template>
  <section class="py-10">
    <div class="mb-8">
      <h2 class="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Projets</h2>
      <p class="text-muted-light">Sélection de réalisations académiques et personnelles</p>
    </div>

    <!-- Aperçu des projets -->
    <div class="mb-10">
      <h3 class="text-xl font-semibold text-white mb-4">Aperçu</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="p in projectList" :key="p.key" class="rounded-xl border border-gray-700 bg-gray-800/40 overflow-hidden hover:border-primary/40 transition-colors group">
          <!-- Image Container -->
          <div class="relative h-64 bg-gray-900/60 flex items-center justify-center overflow-hidden">
            <img :src="p.image" :alt="p.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>
          
          <!-- Content -->
          <div class="p-6">
            <div class="flex items-start justify-between gap-3 mb-3">
              <h4 class="text-lg font-bold text-white">{{ p.title }}</h4>
              <span :class="p.badgeClass" class="px-2.5 py-1 rounded-full text-xs border flex-shrink-0">{{ p.status }}</span>
            </div>
            <p class="text-sm text-gray-300 mb-3">{{ p.short }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="t in p.tech.slice(0,4)" :key="t" class="px-2 py-0.5 rounded-full bg-gray-800/60 border border-gray-700 text-gray-300 text-xs">{{ t }}</span>
            </div>
            <button @click="goToDetail(p.key)" class="w-full text-center px-3 py-2 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition-colors text-sm">Voir le détail</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabs removed: previews drive the detail view -->

    <!-- Tab Content -->
    <div class="space-y-10" ref="detailSection">
      <!-- Portfolio -->
      <div v-if="activeTab === 'portfolio'" class="rounded-xl border border-gray-700 bg-gray-800/40 p-6 md:p-8">
        <div class="flex items-center justify-between gap-4 mb-6">
          <div>
            <h3 class="text-2xl md:text-3xl font-bold text-white">Mon Portfolio</h3>
            <p class="text-sm text-muted-light">Site vitrine personnel – en amélioration continue</p>
          </div>
          <router-link to="/" class="px-4 py-2 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition-colors">Ouvrir le site</router-link>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="md:col-span-2 space-y-4">
            <p class="text-gray-300">
              Portfolio moderne construit avec Vue 3, Tailwind CSS et Vite. Il
              présente un hero immersif, une navigation réactive au scroll, une frise
              chronologique éducation/expériences horizontale et une section projets
              structurée par onglets.
            </p>
            <div>
              <h4 class="font-semibold text-white mb-2">Fonctionnalités clés</h4>
              <ul class="list-disc list-inside text-gray-300 space-y-1">
                <li>Hero plein écran, texte et CTA, icônes sociaux</li>
                <li>Navbar fixe avec opacité dynamique au scroll</li>
                <li>Frise éducation horizontale avec défilement à la molette</li>
                <li>Animations fluides (reveal, survols, ombres colorées)</li>
                <li>Design responsive et accessibilité de base</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-white mb-2">Rôle</h4>
              <p class="text-gray-300">Conception UX/UI, intégration front, micro-interactions et polish.</p>
            </div>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-3">Stack</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="t in ['Vue 3','Vite','Tailwind CSS','Vue Router']" :key="t" class="px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700 text-gray-300 text-sm">
                {{ t }}
              </span>
            </div>
            <div class="mt-6">
              <h4 class="font-semibold text-white mb-2">Statut</h4>
              <span class="inline-block px-3 py-1 rounded-full text-primary bg-primary/15 border border-primary/30 text-sm">En production</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Muse Recommendation System -->
      <div v-else-if="activeTab === 'muse'" class="rounded-xl border border-gray-700 bg-gray-800/40 p-6 md:p-8">
        <div class="flex items-center justify-between gap-4 mb-6">
          <div>
            <h3 class="text-2xl md:text-3xl font-bold text-white">Système de recommandation Muse</h3>
            <p class="text-sm text-muted-light">Plateforme de recommandation musicale (projet de groupe)</p>
          </div>
          <span class="px-3 py-1 rounded-full text-amber-300 bg-amber-500/15 border border-amber-400/30 text-sm">En cours</span>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="md:col-span-2 space-y-4">
            <p class="text-gray-300">
              Ce projet vise à créer une plateforme de recommandation musicale en utilisant des modèles d’IA vus en cours.
              Réalisé en équipe de 6 étudiants (formation initiale) et 2 alternants, avec alternance des contributions entre groupes.
              Gestion de projet en autonomie, 3 sprints complétés : collecte des préférences via questionnaire, analyses et visualisations,
              puis prototypes de recommandations reliées à une base de musiques libres de droit (méthodes variées par membre).
            </p>
            <div>
              <h4 class="font-semibold text-white mb-2">Compétences mobilisées</h4>
              <ul class="list-disc list-inside text-gray-300 space-y-1">
                <li>Réaliser : mini-app Python pour exploiter les systèmes de reco</li>
                <li>Gérer : création et exploitation d’une base de données issue du questionnaire</li>
                <li>Conduire : méthodes de gestion de projet (sprints, livrables, rétro)</li>
                <li>Collaborer : travail d’équipe à 6 (+ 2 alternants), passation inter-sprints</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-3">Stack</h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700 text-gray-300 text-sm">Python</span>
              <span class="px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700 text-gray-300 text-sm">Pandas/NumPy (analyses)</span>
              <span class="px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700 text-gray-300 text-sm">Matplotlib/Seaborn (graphiques)</span>
              <span class="px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700 text-gray-300 text-sm">DB musique libre</span>
            </div>
            <div class="mt-6">
              <h4 class="font-semibold text-white mb-2">Organisation</h4>
              <p class="text-gray-300 text-sm">Équipe de 6 (+2 alternants), sprints, backlog, rétrospectives, alternance des responsabilités.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Trip en Armor -->
      <div v-else-if="activeTab === 'trip'" class="rounded-xl border border-gray-700 bg-gray-800/40 p-6 md:p-8">
        <div class="flex items-center justify-between gap-4 mb-6">
          <div>
            <h3 class="text-2xl md:text-3xl font-bold text-white">Trip en Armor</h3>
            <p class="text-sm text-muted-light">Plateforme d’avis et d’offres touristiques (BUT2, Agile Scrum)</p>
          </div>
          <span class="px-3 py-1 rounded-full text-emerald-300 bg-emerald-500/15 border border-emerald-400/30 text-sm">Terminé</span>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="md:col-span-2 space-y-4">
            <p class="text-gray-300">
              Projet universitaire visant à créer une plateforme permettant aux utilisateurs de consulter des offres de voyage
              et aux entreprises d’en publier. Réalisé en BUT2 (équipe de 8) avec Agile Scrum (sprints de 2–3 semaines, priorisation des lots).
              Contributions personnelles : mise en ligne/hors ligne d’offres (particuliers), publication d’avis, liste et suppression d’avis,
              page de modification du compte. Rétrospectives à chaque sprint pour améliorer le processus.
            </p>
            <div>
              <h4 class="font-semibold text-white mb-2">Compétences mobilisées</h4>
              <ul class="list-disc list-inside text-gray-300 space-y-1">
                <li>Réaliser : développement d’une application pour un client</li>
                <li>Optimiser : contraintes de performance et d’UX client</li>
                <li>Administrer : maintenance serveur et sécurité</li>
                <li>Gérer : conception/admin de la base PostgreSQL</li>
                <li>Conduire : Agile Scrum, satisfaction des feedbacks</li>
                <li>Collaborer : équipe de 8, coordination sereine</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-3">Stack</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="t in ['PHP','PostgreSQL','HTML','CSS','JavaScript']" :key="t" class="px-3 py-1 rounded-full bg-gray-800/60 border border-gray-700 text-gray-300 text-sm">
                {{ t }}
              </span>
            </div>
            <div class="mt-6">
              <h4 class="font-semibold text-white mb-2">Rôle</h4>
              <p class="text-gray-300 text-sm">Front et back sur les modules d’offres, avis et compte.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</template>

<script setup>
import { ref, nextTick, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PortfolioImg from '../assets/Portfolio.png'
import MuseImg from '../assets/MUSE.png'
import TripImg from '../assets/LPPDT.png'

const activeTab = ref(null)
const detailSection = ref(null)
const route = useRoute()
const router = useRouter()

const projectList = [
  {
    key: 'portfolio',
    title: 'Portfolio',
    short: 'Site vitrine moderne en Vue 3 + Tailwind, hero immersif et frise éducation horizontale.',
    status: 'En production',
    tech: ['Vue 3','Tailwind CSS','Vite','Vue Router'],
    badgeClass: 'text-primary bg-primary/15 border-primary/30',
    image: PortfolioImg
  },
  {
    key: 'muse',
    title: 'Muse (Reco Musique)',
    short: 'Plateforme IA de recommandation musicale, analyses et prototypes multi-méthodes.',
    status: 'En cours',
    tech: ['Python','Pandas','Matplotlib','DB musique'],
    badgeClass: 'text-amber-300 bg-amber-500/15 border-amber-400/30',
    image: MuseImg
  },
  {
    key: 'trip',
    title: 'Trip en Armor',
    short: 'Offres/avis touristiques avec rôles utilisateur, réalisé en Agile Scrum.',
    status: 'Terminé',
    tech: ['PHP','PostgreSQL','HTML','CSS','JavaScript'],
    badgeClass: 'text-emerald-300 bg-emerald-500/15 border-emerald-400/30',
    image: TripImg
  }
]

function goToDetail(key) {
  if (!validKeys.has(key)) return
  // Update the URL query so deep links open the right tab.
  if (route.query.project !== key) {
    router.push({ name: 'Projects', query: { ...route.query, project: key } })
  }
  activeTab.value = key
  nextTick(scrollToDetail)
}

const validKeys = new Set(projectList.map((p) => p.key))

const scrollToDetail = () => {
  if (detailSection.value) {
    detailSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const hydrateFromQuery = (projectKey) => {
  if (validKeys.has(projectKey)) {
    activeTab.value = projectKey
    nextTick(scrollToDetail)
  } else {
    activeTab.value = null
  }
}

onMounted(() => {
  hydrateFromQuery(route.query.project)
})

watch(
  () => route.query.project,
  (projectKey) => {
    hydrateFromQuery(projectKey)
  }
)
</script>

<style scoped>
/* Small polish for tabs */
button { outline: none; }
</style>
