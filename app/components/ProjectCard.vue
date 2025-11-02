<template>
  <article class="site-card tilt p-4 cursor-pointer" @click="$emit('open', project)" @keydown.enter="$emit('open', project)" tabindex="0" :aria-label="project.title">
    <div class="overflow-hidden rounded-lg h-40 bg-slate-100 dark:bg-slate-800 mb-3 flex items-center justify-center">
      <img :src="project.cover" :alt="project.title + ' cover'" class="object-cover w-full h-full" />
    </div>
    <h3 class="font-semibold">{{ project.title }}</h3>
    <p class="text-sm text-slate-500 mt-1">{{ project.short }}</p>
    <div class="mt-3 flex gap-2 flex-wrap">
      <TechBadge v-for="(t, i) in project.stack.slice(0,3)" :key="i" :label="t" />
    </div>
  </article>
</template>

<script setup>
import TechBadge from './TechBadge.vue'
defineProps({ project: { type: Object, required: true } })
defineEmits(['open'])
</script>

<style scoped>
.site-card{ transition: transform .18s ease, box-shadow .18s }
.site-card:focus{ transform: translateY(-4px) }
</style>
