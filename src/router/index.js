import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import Education from '../pages/Education.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/education', name: 'Education', component: Education }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
