<script setup lang="ts">
type AboutImage = {
  src: string
  alt: string
}

type AboutPage = {
  title: string
  description?: string
  images?: AboutImage[]
  content?: string
}

defineProps<{ page: AboutPage }>()

const { global } = useAppConfig()
</script>

<template>
  <div>
    <UPageHero
      :title="page.title"
      :description="page.description"
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    >
      <UColorModeAvatar
        class="sm:rotate-4 size-36 rounded-lg ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
        :light="global.picture?.light!"
        :dark="global.picture?.dark!"
        :alt="global.picture?.alt!"
      />
    </UPageHero>

    <UPageSection :ui="{ container: '!pt-0' }">
      <MDC
        v-if="page.content"
        :value="page.content"
        unwrap="p"
      />

      <div
        v-if="page.images?.length"
        class="flex flex-row justify-center items-center py-10 space-x-[-2rem]"
      >
        <PolaroidItem
          v-for="(image, index) in page.images"
          :key="`${image.src}-${index}`"
          :image="image"
          :index="index"
        />
      </div>
    </UPageSection>
  </div>
</template>
