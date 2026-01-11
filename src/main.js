import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css'

const app = createApp(App)
app.use(router)

// Enable Vue DevTools in development for easier debugging
if (import.meta.env.DEV) {
	app.config.devtools = true
	// Ensure the global hook exists so some devtools can detect the app
	if (typeof window !== 'undefined') {
		try {
			window.__VUE_DEVTOOLS_GLOBAL_HOOK__ = window.__VUE_DEVTOOLS_GLOBAL_HOOK__ || {}
		} catch (err) {
			// ignore any errors when accessing window (e.g., restrictive environments)
			console.warn('Could not set Vue DevTools global hook:', err)
		}
	}
}

app.mount('#app')
