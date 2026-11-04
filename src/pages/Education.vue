<template>
  <section class="py-12 md:py-16 px-4 md:px-8 min-h-screen">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="mb-12 text-center">
        <h2 class="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">Mon Parcours</h2>
        <p class="text-muted-light text-lg">Une chronologie de ma formation et de mes expériences professionnelles</p>
      </div>

      <!-- Vertical Timeline -->
      <div class="relative">
        <!-- Central Timeline Line -->
        <div class="timeline-line"></div>

        <!-- Timeline Items Container - Vertical Layout -->
        <div class="space-y-12 relative">
          <div
            v-for="(item, index) in timeline"
            :key="item.title"
            class="timeline-item"
            :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'"
          >
            <!-- Timeline Dot -->
            <div class="timeline-marker">
              <div class="marker-dot" :class="variants[item.variant].marker"></div>
            </div>

            <!-- Card -->
            <div class="timeline-card group w-full md:w-96" :class="variants[item.variant].card">
              <!-- Header with Icon and Badge -->
              <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0" :class="variants[item.variant].iconBg">
                  <svg class="w-6 h-6" :class="variants[item.variant].color" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path v-for="d in icons[item.icon]" :key="d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="d"/>
                  </svg>
                </div>
                <div class="badge" :class="variants[item.variant].badge" :style="variants[item.variant].badgeStyle">{{ item.badge }}</div>
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white mb-2">{{ item.title }}</h3>
              <p class="font-semibold mb-1 text-base" :class="variants[item.variant].color">{{ item.date }}</p>
              <p class="text-sm text-muted-light mb-3">{{ item.place }}</p>
              <p v-if="item.text" class="text-sm text-gray-300 leading-relaxed" v-html="item.text"></p>

              <!-- Skills Grid -->
              <div v-if="item.skills" class="space-y-2">
                <div v-for="skill in item.skills" :key="skill.title" class="skill-item">
                  <p class="text-xs font-semibold text-white/90 flex items-center gap-2 mb-1">
                    <span class="w-1.5 h-1.5 rounded-full" :class="variants[item.variant].dot"></span>
                    {{ skill.title }}
                  </p>
                  <p v-if="skill.detail" class="text-xs text-muted-light leading-tight">{{ skill.detail }}</p>
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
import { timeline } from '../data/timeline.js'

// Couleurs et classes associées à chaque type d'étape
const variants = {
  observation: {
    color: 'text-purple-400',
    dot: 'bg-purple-400',
    iconBg: 'from-purple-500/20 to-purple-500/10',
    marker: '',
    card: '',
    badge: '',
    badgeStyle: 'background: rgba(168, 85, 247, 0.2); color: rgb(192, 132, 252); border-color: rgba(168, 85, 247, 0.4);'
  },
  done: {
    color: 'text-amber-400',
    dot: 'bg-amber-400',
    iconBg: 'from-amber-500/20 to-amber-500/10',
    marker: '',
    card: '',
    badge: '',
    badgeStyle: ''
  },
  experience: {
    color: 'text-blue-400',
    dot: 'bg-blue-400',
    iconBg: 'from-blue-500/20 to-blue-500/10',
    marker: 'highlight',
    card: 'highlight',
    badge: 'highlight',
    badgeStyle: ''
  },
  active: {
    color: 'text-primary',
    dot: 'bg-primary',
    iconBg: 'from-primary/30 to-primary/10',
    marker: 'active',
    card: 'active',
    badge: 'active',
    badgeStyle: ''
  }
}

// Tracés des icônes (Heroicons, viewBox 24x24)
const icons = {
  eye: [
    'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
  ],
  school: [
    'M12 14l9-5-9-5-9 5 9 5z',
    'M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
  ],
  bolt: ['M13 10V3L4 14h7v7l9-11h-7z']
}
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

.timeline-item:nth-child(5) {
  animation-delay: 0.5s;
}

.timeline-item:nth-child(6) {
  animation-delay: 0.6s;
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
