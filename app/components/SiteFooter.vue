<template>
  <footer class="mt-12 py-8 border-t border-slate-200 dark:border-slate-700">
    <div class="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div class="text-sm">© <strong>Roberto Escagedo</strong> — <span class="opacity-80">rescagedo.dev</span></div>
      <div class="flex gap-3 items-center">
        <a :href="profile.socials[0].url" class="text-sm">LinkedIn</a>
        <a :href="profile.socials[1].url" class="text-sm">GitHub</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import profile from '@/data/profile'
</script>

<style scoped>
footer a{ color:inherit }
</style>
