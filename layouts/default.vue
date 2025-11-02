<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
    <SiteHeader />
    <main class="max-w-6xl mx-auto px-6">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from '~/app/components/SiteHeader.vue'
import SiteFooter from '~/app/components/SiteFooter.vue'
</script>

<style>
main{ padding-top: 2rem; padding-bottom: 2rem }
</style>
