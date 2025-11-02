<template>
  <header class="w-full py-4 px-6 flex items-center justify-between bg-transparent">
    <div class="flex items-center gap-4">
      <a href="/" class="font-semibold text-lg">rescagedo.dev</a>
    </div>

    <nav class="flex items-center gap-4">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/about" class="nav-link">Sobre mí</NuxtLink>
      <NuxtLink to="/projects" class="nav-link">Proyectos</NuxtLink>
      <NuxtLink to="/contact" class="nav-link">Contacto</NuxtLink>
      <button @click="toggleTheme" :aria-pressed="isDark" class="ml-2 p-2 rounded">
        <span v-if="isDark">🌙</span>
        <span v-else>☀️</span>
      </button>
    </nav>
  </header>
</template>

<script setup>
import { useTheme } from '~/app/composables/useTheme'
const { theme, set } = useTheme()
const isDark = computed(() => theme.value === 'dark' || (theme.value === 'system' && typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches))
function toggleTheme(){ set(isDark.value ? 'light' : 'dark') }
</script>

<style scoped>
.nav-link{ color:var(--tw-prose-links); padding:6px 8px }
.nav-link.router-link-active{ font-weight:600; border-bottom:2px solid rgba(99,102,241,0.18) }
</style>
