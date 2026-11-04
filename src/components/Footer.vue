<template>
  <footer class="border-t-2 border-line bg-ink-deep">
    <div class="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 pb-8 pt-10 sm:px-8">
      <div class="grid grid-cols-1 gap-7 text-[15px] sm:grid-cols-3">
        <div>
          <h2 class="mb-2 font-mono text-xs font-bold uppercase tracking-[0.1em] text-muted">Nom</h2>
          <p class="font-display text-xl font-extrabold uppercase">{{ contact.name }}</p>
          <p class="mt-1 font-mono text-[13px] text-muted-light">{{ contact.location }}</p>
        </div>

        <div>
          <h2 class="mb-2 font-mono text-xs font-bold uppercase tracking-[0.1em] text-muted">Contact</h2>
          <ul class="flex flex-col gap-1.5 font-mono text-[13px]">
            <li><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></li>
            <li><a :href="contact.linkedin" target="_blank" rel="noopener noreferrer">linkedin/harry-troule</a></li>
            <li><a :href="contact.github" target="_blank" rel="noopener noreferrer">github/Elvalio</a></li>
            <li>
              <button type="button" class="text-accent-text transition-colors hover:text-lilac" @click="openContact">./contact.sh</button>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="mb-2 font-mono text-xs font-bold uppercase tracking-[0.1em] text-muted">Colophon</h2>
          <p class="font-mono text-[13px] text-muted-light">
            build: vue 3 + vite<br />
            style: tailwind css<br />
            deploy: github pages
          </p>
        </div>
      </div>

      <div class="codebarre h-[26px] opacity-50" aria-hidden="true"></div>
      <p class="font-mono text-xs text-muted">© {{ new Date().getFullYear() }} harry-troule · exit 0</p>
    </div>
  </footer>
</template>

<script setup>
import { inject } from 'vue'
import { contact } from '../data/profile.js'

const openContact = inject('openContact')
</script>
