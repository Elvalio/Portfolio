<template>
  <section class="py-12 md:py-16 px-4 md:px-8 min-h-screen">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="mb-12 text-center">
        <h2 class="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">Mon Parcours</h2>
        <p class="text-muted-light text-lg">Une chronologie de ma formation et expériences professionnelles</p>
      </div>
      
      <!-- Vertical Timeline -->
      <div class="relative">
        <!-- Central Timeline Line -->
        <div class="timeline-line"></div>

        <!-- Timeline Items Container - Vertical Layout -->
        <div class="space-y-12 relative">
          
          <!-- Item 1: Stage Observation (Left) -->
          <div class="timeline-item timeline-left">
            <!-- Timeline Dot -->
            <div class="timeline-marker">
              <div class="marker-dot"></div>
            </div>

            <!-- Card -->
            <div class="timeline-card group w-full md:w-96">
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

          <!-- Item 2: Baccalauréat (Right) -->
          <div class="timeline-item timeline-right">
            <!-- Timeline Dot -->
            <div class="timeline-marker">
              <div class="marker-dot"></div>
            </div>

            <!-- Card -->
            <div class="timeline-card group w-full md:w-96">
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

          <!-- Item 3: Bachelor (Left) -->
          <div class="timeline-item timeline-left">
            <!-- Timeline Dot -->
            <div class="timeline-marker">
              <div class="marker-dot active"></div>
            </div>

            <!-- Card -->
            <div class="timeline-card active group w-full md:w-96">
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

          <!-- Item 4: Stage Unissia (Right) -->
          <div class="timeline-item timeline-right">
            <!-- Timeline Dot -->
            <div class="timeline-marker">
              <div class="marker-dot highlight"></div>
            </div>

            <!-- Card -->
            <div class="timeline-card highlight group w-full md:w-96">
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
// No wheel event handling - normal scroll behavior
</script>

<style scoped>
/* Timeline Line */
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  margin-left: -2px;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0), rgba(99, 102, 241, 1), rgba(99, 102, 241, 0));
}

/* Timeline Layout */
.timeline-item {
  opacity: 0;
  animation: fadeInScale 0.7s ease-out forwards;
  display: flex;
  position: relative;
  gap: 2rem;
}

.timeline-item:nth-child(1) {
  animation-delay: 0.1s;
}

.timeline-item:nth-child(2) {
  animation-delay: 0.2s;
}

.timeline-item:nth-child(3) {
  animation-delay: 0.3s;
}

.timeline-item:nth-child(4) {
  animation-delay: 0.4s;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Alternating Left-Right Layout */
.timeline-left {
  justify-content: flex-end;
}

.timeline-left .timeline-card {
  text-align: right;
}

.timeline-right {
  justify-content: flex-start;
}

.timeline-right .timeline-card {
  text-align: left;
}

/* Timeline Marker (Dot on the timeline) */
.timeline-marker {
  position: absolute;
  left: 50%;
  top: 2rem;
  transform: translateX(-50%);
  z-index: 10;
  width: 0;
}

.marker-dot {
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(99, 102, 241, 0.8));
  border: 3px solid rgba(17, 24, 39, 1);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.3), inset 0 0 10px rgba(99, 102, 241, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.marker-dot:hover {
  width: 24px;
  height: 24px;
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.6), inset 0 0 15px rgba(99, 102, 241, 0.3);
  margin-top: -4px;
  margin-left: -4px;
}

.marker-dot.active {
  background: linear-gradient(135deg, var(--primary), rgba(99, 102, 241, 1));
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.8), inset 0 0 15px rgba(99, 102, 241, 0.4);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.marker-dot.highlight {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(59, 130, 246, 0.8));
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.3), inset 0 0 10px rgba(59, 130, 246, 0.2);
}

.marker-dot.highlight:hover {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.6), inset 0 0 15px rgba(59, 130, 246, 0.3);
}

/* Timeline Cards */
.timeline-card {
  position: relative;
  padding: 28px;
  background: linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(17, 24, 39, 0.4) 100%);
  border: 1px solid rgba(107, 114, 128, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* Gradient top border effect */
.timeline-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-primary, #6366f1), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.timeline-card:hover::before {
  opacity: 1;
}

/* Hover Effects */
.timeline-card:hover {
  border-color: rgba(99, 102, 241, 0.4);
  background: linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.5) 100%);
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(99, 102, 241, 0.15), 0 0 40px rgba(99, 102, 241, 0.1);
}

.timeline-card.active {
  border-color: rgba(99, 102, 241, 0.5);
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(17, 24, 39, 0.6) 100%);
  box-shadow: 0 0 40px rgba(99, 102, 241, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.timeline-card.active:hover {
  border-color: rgba(99, 102, 241, 0.7);
  box-shadow: 0 20px 50px rgba(99, 102, 241, 0.25), 0 0 40px rgba(99, 102, 241, 0.15);
  transform: translateY(-8px);
}

.timeline-card.highlight {
  border-color: rgba(59, 130, 246, 0.3);
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(17, 24, 39, 0.6) 100%);
}

.timeline-card.highlight:hover {
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow: 0 20px 50px rgba(59, 130, 246, 0.15), 0 0 40px rgba(59, 130, 246, 0.08);
  transform: translateY(-6px);
}

/* Badge Styling */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: rgba(107, 114, 128, 0.2);
  color: rgb(156, 163, 175);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 999px;
  border: 1px solid rgba(107, 114, 128, 0.3);
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  width: fit-content;
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
  padding: 12px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.skill-item:hover {
  background: rgba(99, 102, 241, 0.08);
  border-color: rgba(99, 102, 241, 0.2);
  transform: translateX(-2px);
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

/* Mobile Responsive */
@media (max-width: 768px) {
  .timeline-item {
    flex-direction: column;
    justify-content: flex-start !important;
    gap: 1rem;
  }

  .timeline-left,
  .timeline-right {
    justify-content: flex-start;
  }

  .timeline-left .timeline-card,
  .timeline-right .timeline-card {
    text-align: left !important;
  }

  .timeline-marker {
    position: static;
    transform: none;
    width: auto;
    margin-bottom: -1.5rem;
    z-index: 0;
  }

  .marker-dot {
    width: 12px;
    height: 12px;
  }

  .marker-dot:hover {
    width: 16px;
    height: 16px;
  }

  .timeline-card {
    padding: 20px;
    width: 100% !important;
  }

  /* Hide the central timeline line on mobile */
  .timeline-line {
    display: none;
  }
}

/* Desktop responsive container */
@media (min-width: 768px) {
  .timeline-item {
    width: 100%;
    justify-content: space-between;
  }

  .timeline-left {
    flex-direction: row-reverse;
    justify-content: flex-start;
  }

  .timeline-card {
    width: calc(50% - 1rem);
  }
}
</style>
