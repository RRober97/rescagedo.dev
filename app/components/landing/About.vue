<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.about.title"
    :ui="{
      container: 'app-section app-section--stacked',
      title: 'app-section__title'
    }"
  >
    <template #description>
      <p class="app-section__body">
        {{ page.about.description }}
      </p>
    </template>
  </UPageSection>
</template>

<style scoped>

</style>
