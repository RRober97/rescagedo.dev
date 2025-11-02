<template>
  <span class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">{{ label }}</span>
</template>

<script setup>
defineProps({ label: { type: String, required: true } })
</script>
