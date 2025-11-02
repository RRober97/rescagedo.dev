<template>
  <header class="mb-6">
    <h2 class="text-2xl font-semibold">{{ title }}</h2>
    <p v-if="subtitle" class="text-sm text-slate-500 mt-1">{{ subtitle }}</p>
  </header>
</template>

<script setup>
defineProps({ title: { type: String, required: true }, subtitle: { type: String, default: '' } })
</script>
