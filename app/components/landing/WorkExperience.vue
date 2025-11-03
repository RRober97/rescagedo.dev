<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.experience.title"
    :ui="{
      container: 'app-section app-section--split',
      title: 'app-section__title',
      description: 'app-section__body'
    }"
  >
    <template #description>
      <div class="app-timeline">
        <Motion
          v-for="(experience, index) in page.experience.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="app-timeline__item"
        >
          <div class="app-timeline__date">
            {{ experience.date }}
          </div>
          <USeparator class="app-timeline__separator" />
          <ULink
            class="app-timeline__role"
            :to="experience.company.url"
            target="_blank"
          >
            <span class="app-timeline__position">
              {{ experience.position }}
            </span>
            <div
              class="app-timeline__company"
              :style="{ color: experience.company.color }"
            >
              <span class="font-medium">{{ experience.company.name }}</span>
              <UIcon :name="experience.company.logo" />
            </div>
          </ULink>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>

<style scoped>

</style>
