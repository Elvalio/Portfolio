<template>
  <section class="py-12 md:py-20 min-h-screen flex flex-col">
    <div class="mb-8 flex-shrink-0">
      <h2 class="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Mon Parcours</h2>
      <p class="text-muted-light text-lg">Une chronologie de ma formation et expériences professionnelles</p>
    </div>
    
    <!-- Horizontal Timeline -->
    <div ref="timelineContainer" class="relative overflow-x-auto pb-8 scroll-smooth">
      <div class="min-w-max px-8 relative">
        <!-- Timeline Line with Arrows -->
        <div class="absolute top-2 left-8 right-8 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary" style="width: calc(100% - 4rem);">
          <!-- Arrow 1 -->
          <div class="absolute top-1/2 transform -translate-y-1/2" style="left: 25%;">
            <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </div>
          
          <!-- Arrow 2 -->
          <div class="absolute top-1/2 transform -translate-y-1/2" style="left: 50%;">
            <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </div>
          
          <!-- Arrow 3 -->
          <div class="absolute top-1/2 transform -translate-y-1/2" style="left: 75%;">
            <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </div>
        </div>

        <!-- Timeline Items Container - Horizontal Layout -->
        <div class="flex gap-12 relative pt-8 pb-8">
          
          <!-- Item 1: Stage Observation (Oldest - 2022) -->
          <div class="timeline-item group w-96 flex-shrink-0">
            <!-- Connection Line to Dot -->
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-purple-400/30 to-purple-400"></div>
            
            <!-- Timeline Dot -->
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 -translate-y-2 w-6 h-6 bg-purple-500 rounded-full border-4 border-gray-900 shadow-lg shadow-purple-500/50"></div>

            <div class="timeline-card" style="border-color: rgba(168, 85, 247, 0.3)">
              <!-- Header with Icon and Badge -->
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </div>
                <div class="badge" style="background: rgba(168, 85, 247, 0.2); color: rgb(192, 132, 252); border-color: rgba(168, 85, 247, 0.4);">Observation</div>
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white mb-2">Stage d'Observation</h3>
              <p class="text-purple-400 font-semibold mb-1 text-base">Avril 2022 (1 semaine)</p>
              <p class="text-sm text-muted-light mb-3">🏢 GigaHertz (maintenant LDLC) - Trégueux</p>
              
              <!-- Skills Grid -->
              <div class="space-y-2">
                <div class="skill-item">
                  <p class="text-xs font-semibold text-white/90 flex items-center gap-2 mb-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    Maintenance informatique
                  </p>
                </div>
                
                <div class="skill-item">
                  <p class="text-xs font-semibold text-white/90 flex items-center gap-2 mb-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    Assistance aux ventes
                  </p>
                </div>
                
                <div class="skill-item">
                  <p class="text-xs font-semibold text-white/90 flex items-center gap-2 mb-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    Gestion des contrats
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Item 2: Baccalauréat (2020-2023) -->
          <div class="timeline-item group w-96 flex-shrink-0">
            <!-- Connection Line to Dot -->
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-amber-400/30 to-amber-400"></div>
            
            <!-- Timeline Dot -->
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 -translate-y-2 w-6 h-6 bg-amber-400 rounded-full border-4 border-gray-900 shadow-lg shadow-amber-400/50"></div>

            <div class="timeline-card">
              <!-- Header with Icon and Badge -->
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.001C2 20.31 3.1 23.3 4.972 25.5C6.844 27.7 9.522 29 12 29c2.478 0 5.156-1.3 7.028-3.5C20.9 23.3 22 20.31 22 17.001c0-6.003-4.5-10.748-10-10.748z"/>
                  </svg>
                </div>
                <div class="badge">Complété</div>
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white mb-2">Baccalauréat Général</h3>
              <p class="text-amber-400 font-semibold mb-1 text-base">2020 - 2023</p>
              <p class="text-sm text-muted-light mb-3">🏫 Lycée St Joseph - Lamballe</p>
              <p class="text-sm text-gray-300"><strong>Spécialités :</strong> Mathématiques / Numériques et Sciences de l'Informatique</p>
            </div>
          </div>

          <!-- Item 3: Bachelor (Sept 2023 - Aujourd'hui) -->
          <div class="timeline-item group w-96 flex-shrink-0">
            <!-- Connection Line to Dot -->
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-primary/30 to-primary"></div>
            
            <!-- Timeline Dot -->
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 -translate-y-2 w-6 h-6 bg-primary rounded-full border-4 border-gray-900 shadow-lg shadow-primary/50"></div>

            <div class="timeline-card active">
              <!-- Header with Icon and Badge -->
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.001C2 20.31 3.1 23.3 4.972 25.5C6.844 27.7 9.522 29 12 29c2.478 0 5.156-1.3 7.028-3.5C20.9 23.3 22 20.31 22 17.001c0-6.003-4.5-10.748-10-10.748z"/>
                  </svg>
                </div>
                <div class="badge active">En cours</div>
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white mb-2">Bachelor Universitaire de Technologie</h3>
              <p class="text-primary font-semibold mb-1 text-base">Septembre 2023 - Aujourd'hui</p>
              <p class="text-sm text-muted-light mb-3">🏫 IUT de Lannion</p>
              <p class="text-sm text-gray-300 leading-relaxed">BUT Informatique - Formation généraliste en développement et administration de systèmes</p>
            </div>
          </div>

          <!-- Item 4: Stage Unissia (Most Recent - 2025) -->
          <div class="timeline-item group w-96 flex-shrink-0">
            <!-- Connection Line to Dot -->
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-blue-400/30 to-blue-400"></div>
            
            <!-- Timeline Dot -->
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 -translate-y-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900 shadow-lg shadow-blue-500/50"></div>

            <div class="timeline-card highlight">
              <!-- Header with Icon and Badge -->
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div class="badge highlight">Expérience</div>
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white mb-2">Développeur Web Fullstack</h3>
              <p class="text-blue-400 font-semibold mb-1 text-base">Juillet 2025 - Août 2025</p>
              <p class="text-sm text-muted-light mb-3">💼 Unissia | Plérin</p>

              <!-- Skills Grid -->
              <div class="space-y-2">
                <div class="skill-item">
                  <p class="text-xs font-semibold text-white/90 flex items-center gap-2 mb-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    Back-End
                  </p>
                  <p class="text-xs text-muted-light leading-tight">API REST Node.js, Express, MongoDB</p>
                </div>
                
                <div class="skill-item">
                  <p class="text-xs font-semibold text-white/90 flex items-center gap-2 mb-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    Front-End
                  </p>
                  <p class="text-xs text-muted-light leading-tight">Vue.js, Tailwind CSS, API Integration</p>
                </div>
                
                <div class="skill-item">
                  <p class="text-xs font-semibold text-white/90 flex items-center gap-2 mb-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    Git & GitHub
                  </p>
                  <p class="text-xs text-muted-light leading-tight">Versioning, Branches, Pull Requests</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const timelineContainer = ref(null);

onMounted(() => {
  // Scroll to the right (most recent events) on mount
  if (timelineContainer.value) {
    timelineContainer.value.scrollLeft = timelineContainer.value.scrollWidth;
  }
  
  // Add wheel event listener to window for the entire page
  window.addEventListener('wheel', handleWheel, { passive: false });
});

onUnmounted(() => {
  window.removeEventListener('wheel', handleWheel);
});

const handleWheel = (e) => {
  // Always convert vertical scroll to horizontal scroll on this page
  if (timelineContainer.value) {
    e.preventDefault();
    timelineContainer.value.scrollLeft += e.deltaY;
  }
};
</script>

<style scoped>
/* Timeline Items Animation */
.timeline-item {
  opacity: 0;
  animation: slideInUp 0.7s ease-out forwards;
}

.timeline-item:nth-child(4) {
  animation-delay: 0.2s;
}

.timeline-item:nth-child(6) {
  animation-delay: 0.4s;
}

.timeline-item:nth-child(8) {
  animation-delay: 0.6s;
}

.timeline-item:nth-child(10) {
  animation-delay: 0.8s;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Timeline Cards */
.timeline-card {
  position: relative;
  padding: 28px;
  background: linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(17, 24, 39, 0.5) 100%);
  border: 1px solid rgba(107, 114, 128, 0.3);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.timeline-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-primary, #6366f1), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.timeline-card:hover::before {
  opacity: 1;
}

.timeline-card:hover {
  border-color: rgba(99, 102, 241, 0.5);
  background: linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(17, 24, 39, 0.6) 100%);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
}

.timeline-card.active {
  border-color: rgba(99, 102, 241, 0.6);
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(17, 24, 39, 0.7) 100%);
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.15);
}

.timeline-card.active:hover {
  box-shadow: 0 20px 50px rgba(99, 102, 241, 0.2);
}

.timeline-card.highlight {
  border-color: rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(17, 24, 39, 0.6) 100%);
}

.timeline-card.highlight:hover {
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.1);
}

/* Badge Styling */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: rgba(107, 114, 128, 0.3);
  color: rgb(156, 163, 175);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 999px;
  border: 1px solid rgba(107, 114, 128, 0.4);
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.badge.active {
  background: rgba(99, 102, 241, 0.2);
  color: rgb(129, 140, 248);
  border-color: rgba(99, 102, 241, 0.4);
}

.badge.active::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  background: rgb(129, 140, 248);
  border-radius: 50%;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.badge.highlight {
  background: rgba(59, 130, 246, 0.2);
  color: rgb(96, 165, 250);
  border-color: rgba(59, 130, 246, 0.4);
}

.badge.highlight::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  background: rgb(96, 165, 250);
  border-radius: 50%;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Skill Items */
.skill-item {
  padding: 8px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.skill-item:hover {
  background: rgba(99, 102, 241, 0.05);
  border-color: rgba(99, 102, 241, 0.2);
  transform: translateX(2px);
}

/* Pulse Animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  height: 12px;
}

::-webkit-scrollbar-track {
  background: rgba(17, 24, 39, 0.5);
  border-radius: 10px;
  margin: 0 20px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, rgb(99, 102, 241), rgb(139, 92, 246));
  border-radius: 10px;
  border: 2px solid rgba(17, 24, 39, 0.5);
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(90deg, rgb(129, 140, 248), rgb(167, 139, 250));
  border-color: rgba(17, 24, 39, 0.7);
}

/* Firefox Scrollbar */
.overflow-x-auto {
  scrollbar-width: thin;
  scrollbar-color: rgb(99, 102, 241) rgba(17, 24, 39, 0.5);
}

/* Responsive Mobile */
@media (max-width: 768px) {
  .timeline-card {
    padding: 16px;
  }
}
</style>
