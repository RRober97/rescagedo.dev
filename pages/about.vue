<template>
  <div class="max-w-3xl mx-auto py-12">
    <SectionTitle title="Sobre mí" subtitle="Bio breve y skills" />

    <div class="grid gap-6 md:grid-cols-2 mt-6">
      <div class="site-card p-6">
        <h3 class="font-semibold">{{ profile.name }}</h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 mt-2">{{ profile.intro }}</p>
        <p class="text-sm mt-3">Ubicación: {{ profile.location }}</p>
        <p class="text-sm mt-1">Rol: {{ profile.role }}</p>
      </div>

      <div class="p-6">
        <h4 class="font-semibold">Skills</h4>
        <div class="mt-3 flex gap-2 flex-wrap">
          <TechBadge v-for="(s,i) in profile.skills" :key="i" :label="s" />
        </div>

        <h4 class="mt-6 font-semibold">Highlights</h4>
        <ul class="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
          <li v-for="(h,i) in profile.highlights" :key="i">{{ h }}</li>
        </ul>
      </div>
    </div>

    <section class="mt-8">
      <SectionTitle title="Trayectoria" subtitle="Timeline (placeholder)" />
      <div class="mt-4 text-sm text-slate-600 dark:text-slate-300">TODO: completar timeline con hitos del LinkedIn</div>
    </section>
  </div>
</template>

<script setup>
import SectionTitle from '~/app/components/SectionTitle.vue'
import TechBadge from '~/app/components/TechBadge.vue'
import profile from '@/data/profile'
</script>
