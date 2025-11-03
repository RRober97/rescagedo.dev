<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const props = defineProps<{
  page: IndexCollectionItem
}>()

const items = computed(() => {
  return props.page.faq?.categories.map((faq) => {
    return {
      label: faq.title,
      key: faq.title.toLowerCase(),
      questions: faq.questions
    }
  })
})

const ui = {
  root: 'app-tabs',
  list: 'app-tabs__list',
  indicator: 'app-tabs__indicator',
  trigger: 'app-tabs__trigger',
  label: 'truncate',
  content: 'app-tabs__content',
  panel: 'app-tabs__panel'
}
</script>

<template>
  <UPageSection
    :title="page.faq.title"
    :description="page.faq.description"
    :ui="{
      container: 'app-section app-section--split gap-6',
      title: 'app-section__title',
      description: 'app-section__body'
    }"
  >
    <UTabs
      :items
      orientation="horizontal"
      :ui
    >
      <template #content="{ item }">
        <UAccordion
          trailing-icon="lucide:plus"
          :items="item.questions"
          :unmount-on-hide="false"
          :ui="{
            item: 'border-none',
            trigger: 'app-accordion__trigger',
            trailingIcon: 'app-accordion__icon',
            body: 'app-accordion__body'
          }"
        >
          <template #body="{ item: _item }">
            <MDC
              :value="_item.content"
              unwrap="p"
              class="px-4"
            />
          </template>
        </UAccordion>
      </template>
    </UTabs>
  </UPageSection>
</template>
