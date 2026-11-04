import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import Education from '../pages/Education.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/education', name: 'Education', component: Education },
  // Toute URL inconnue renvoie vers l'accueil
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    // Même page (ex. ouverture d'une fiche projet) : la page gère son propre défilement
    if (to.path === from.path) {
      return false
    }
    // Retarder le scroll pour laisser la transition se faire
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: 'instant' })
      }, 450) // Légèrement plus long que la transition (400ms)
    })
  }
})

export default router
