<template>
  <div class="mx-auto flex max-w-[1100px] flex-col gap-12 px-4 pb-28 pt-[72px] sm:px-8">
    <!-- En-tête de page + légende -->
    <section class="flex flex-col gap-[18px]">
      <PromptLabel code="Dossier FO" cmd="git log --graph --reverse parcours" />
      <h1 class="titre-page font-display text-[clamp(56px,7vw,96px)] font-black uppercase leading-[0.95]">Parcours</h1>
      <p class="max-w-[640px] text-lg text-muted-light">Ma formation et mes expériences, du bac au master, dans l'ordre.</p>
      <ul aria-label="Légende" class="mt-2 flex flex-wrap gap-x-7 gap-y-3.5 border-2 border-line bg-surface px-[18px] py-3.5 font-mono text-[13px]">
        <li class="inline-flex items-center gap-2.5"><span class="h-3.5 w-3.5 border-2 border-lilac bg-primary" aria-hidden="true"></span>diplôme <span class="text-muted">· branche formation</span></li>
        <li class="inline-flex items-center gap-2.5"><span class="h-3.5 w-3.5 rounded-full bg-lilac" aria-hidden="true"></span>expérience <span class="text-muted">· branche pro</span></li>
        <li class="inline-flex items-center gap-2.5"><span class="h-3.5 w-3.5 rounded-full border-2 border-lilac" aria-hidden="true"></span>observation</li>
        <li class="inline-flex items-center gap-2.5"><span class="h-3.5 w-3.5 rounded-full bg-primary shadow-[0_0_0_4px_rgba(109,59,217,0.35)]" aria-hidden="true"></span>en cours <span class="text-muted">· HEAD</span></li>
      </ul>
    </section>

    <!-- Frise : graphe Git + fiches -->
    <ol class="graphe">
      <li v-for="(step, i) in rows" :key="step.key" class="grid grid-cols-[var(--gouttiere)_minmax(0,1fr)]">
        <!-- Graphe (décoratif) -->
        <div class="relative" aria-hidden="true">
          <span class="trait voie-a" :style="{ top: step.formTop, height: step.formHeight, bottom: step.formHeight ? 'auto' : '0' }"></span>
          <span v-if="step.pro" class="trait voie-b" :style="{ top: step.proTop }"></span>
          <span v-if="step.branchOut" class="branche"></span>
          <template v-if="step.mergeIn">
            <svg class="fusion hidden md:block" width="96" height="40" viewBox="0 0 96 40"><path d="M68.5 0 V8 Q68.5 29 40 29" /></svg>
            <svg class="fusion md:hidden" width="60" height="40" viewBox="0 0 60 40"><path d="M44.5 0 V8 Q44.5 29 28 29" /></svg>
          </template>
          <span class="repere" :class="`repere-${step.type}`"></span>
        </div>

        <!-- Fiche -->
        <div :class="i === rows.length - 1 ? 'pb-2' : 'pb-12'">
          <Fiche
            :border="step.lane === 'formation' ? 'lilac' : 'line'"
            :bg="step.type === 'en-cours' ? 'primary-dark' : 'surface'"
            :shadow="step.type === 'en-cours' || step.type === 'diplome' ? 'primary' : 'dark'"
            :shadow-size="step.type === 'en-cours' ? 10 : 6"
            :stamp="step.stamp"
            :stamp-tone="stampTones[step.type]"
            stamp-size="sm"
            :stamp-rotate="[-5, 4, -4, 5, -6, -4][i % 6]"
            stamp-class="-bottom-[15px] right-[18px]"
          >
            <div
              class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b-2 px-[18px] py-2.5"
              :class="[step.type === 'en-cours' ? 'bg-primary' : 'bg-primary-dark', step.lane === 'formation' ? 'border-lilac' : 'border-line']"
            >
              <h2 class="font-display text-xl font-extrabold uppercase">{{ step.title }}</h2>
              <span class="font-mono text-xs" :class="step.type === 'en-cours' ? 'font-bold text-white' : 'text-lilac'">{{ step.code }} · {{ step.dates }}</span>
            </div>
            <div class="flex flex-col gap-2 px-[18px] pb-[22px] pt-3.5">
              <p class="font-mono text-[13px]" :class="step.type === 'en-cours' ? 'text-lilac' : 'text-accent-text'">{{ step.commit }}</p>
              <p v-if="step.text" :class="step.type === 'en-cours' ? 'text-bg-light' : 'text-muted-light'">{{ step.text }}</p>
              <ul v-if="step.items" class="flex flex-col gap-1 text-muted-light">
                <li v-for="item in step.items" :key="item"><span class="font-mono text-accent-text" aria-hidden="true">+</span> {{ item }}</li>
              </ul>
              <router-link
                v-if="step.project"
                :to="{ name: 'Projects', query: { project: step.project } }"
                class="inline-flex min-h-[44px] items-center self-start font-mono text-sm font-bold"
              >→ voir le projet {{ projectTitle(step.project) }}</router-link>
            </div>
          </Fiche>
        </div>
      </li>
    </ol>

    <!-- git status : prochaine étape -->
    <section v-if="search.open" class="mt-6 flex flex-col gap-1.5 border-2 border-line bg-ink-deep px-5 py-6 font-mono text-sm sm:px-7">
      <h2 class="text-muted"><span class="text-accent-text">$</span> git status</h2>
      <p>Sur la branche main</p>
      <p class="text-muted-light">Prochaine étape : {{ search.nextStep }}.</p>
      <p class="text-muted-light">  (utilisez "<button type="button" class="text-accent-text transition-colors hover:text-lilac" @click="openContact">./contact.sh</button>" pour en parler)</p>
      <p class="mt-2 flex items-center gap-1.5" aria-hidden="true"><span class="text-accent-text">$</span><span class="curseur inline-block h-[18px] w-[9px] bg-accent-text"></span></p>
    </section>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import Fiche from '../components/Fiche.vue'
import PromptLabel from '../components/PromptLabel.vue'
import { timeline } from '../data/timeline.js'
import { projects } from '../data/projects.js'
import { search } from '../data/profile.js'

const openContact = inject('openContact')

const stampTones = { diplome: 'default', observation: 'muted', experience: 'default', 'en-cours': 'filled' }
const projectTitle = (key) => projects.find((p) => p.key === key)?.title || key

// Tracé du graphe pour chaque étape : la branche « formation » court du début à
// la fin, la branche « pro » s'ouvre à la première étape pro et fusionne dans
// la dernière étape.
const last = timeline.length - 1
const firstPro = timeline.findIndex((s) => s.lane === 'pro')

const rows = timeline.map((step, i) => ({
  ...step,
  // Branche formation : part du repère sur la 1re ligne, s'arrête au repère sur la dernière
  formTop: i === 0 ? '30px' : '0',
  formHeight: i === last ? '22px' : '',
  // Branche pro : de la ligne qui l'ouvre jusqu'à l'avant-dernière ligne
  pro: firstPro >= 0 && i >= firstPro && i < last,
  proTop: i === firstPro ? '30px' : '0',
  branchOut: i === firstPro,
  mergeIn: firstPro >= 0 && i === last
}))
</script>

<style scoped>
/* Géométrie du graphe : position des deux branches dans la gouttière */
.graphe {
  --gouttiere: 60px;
  --voie-a: 15px;
  --voie-b: 43px;
}

@media (min-width: 768px) {
  .graphe {
    --gouttiere: 96px;
    --voie-a: 27px;
    --voie-b: 67px;
  }
}

.trait {
  position: absolute;
  bottom: 0;
  width: 3px;
}

.voie-a {
  left: var(--voie-a);
  background-color: #6D3BD9;
}

.voie-b {
  left: var(--voie-b);
  background-color: #CDBBF8;
}

/* Ouverture de la branche pro */
.branche {
  position: absolute;
  top: 29px;
  left: calc(var(--voie-a) + 3px);
  width: calc(var(--voie-b) - var(--voie-a) - 3px);
  border-top: 3px dashed #CDBBF8;
}

/* Fusion de la branche pro dans la dernière étape */
.fusion {
  position: absolute;
  left: 0;
  top: 0;
}

.fusion path {
  fill: none;
  stroke: #CDBBF8;
  stroke-width: 3;
  stroke-dasharray: 5 4;
}

.repere {
  position: absolute;
  box-sizing: border-box;
}

/* Diplôme : carré violet sur la branche formation */
.repere-diplome {
  top: 20px;
  left: calc(var(--voie-a) - 8px);
  width: 19px;
  height: 19px;
  background-color: #6D3BD9;
  border: 2px solid #CDBBF8;
}

/* Expérience : rond plein lilas sur la branche pro */
.repere-experience {
  top: 20px;
  left: calc(var(--voie-b) - 9px);
  width: 21px;
  height: 21px;
  border-radius: 9999px;
  background-color: #CDBBF8;
}

/* Observation : rond vide lilas sur la branche pro */
.repere-observation {
  top: 20px;
  left: calc(var(--voie-b) - 9px);
  width: 21px;
  height: 21px;
  border-radius: 9999px;
  background-color: #0E0D24;
  border: 3px solid #CDBBF8;
}

/* En cours : rond violet avec halo pulsé, sur la branche formation */
.repere-en-cours {
  top: 19px;
  left: calc(var(--voie-a) - 9px);
  width: 21px;
  height: 21px;
  border-radius: 9999px;
  background-color: #6D3BD9;
  border: 2px solid #CDBBF8;
  box-shadow: 0 0 0 5px rgba(109, 59, 217, 0.35);
  animation: halo 2s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .repere-en-cours {
    animation: none;
  }
}
</style>
