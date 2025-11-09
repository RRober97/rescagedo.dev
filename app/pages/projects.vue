<script setup lang="ts">
const { data: page } = await useAsyncData('projects-page', () => {
  return queryCollection('pages').path('/projects').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects').all()
})

const { global } = useAppConfig()

const expandedProject = ref<{ title: string; image: string } | null>(null)

const openImage = (project: { title: string; image: string }) => {
  expandedProject.value = {
    title: project.title,
    image: project.image
  }
}

const closeImage = () => {
  expandedProject.value = null
}

useEventListener('keydown', (event) => {
  if (event.key === 'Escape' && expandedProject.value) {
    closeImage()
  }
})

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :links="page.links"
      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    >
      <template #links>
        <div
          v-if="page.links?.length"
          class="flex items-center gap-2"
        >
          <UButton
            v-for="(link, index) in page.links"
            :key="index"
            :to="link.to || `mailto:${global.email}`"
            v-bind="link"
          />
        </div>
      </template>
    </UPageHero>
    <UPageSection :ui="{ container: '!pt-0' }">
      <ProjectsGrid :projects="projects" />
    </UPageSection>
  </UPage>

  <Teleport to="body">
    <Transition>
      <div
        v-if="expandedProject"
        class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        @click.self="closeImage"
      >
        <div class="relative">
          <button
            type="button"
            class="absolute top-2 right-2 text-white bg-black/60 hover:bg-black/80 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white"
            @click="closeImage"
            aria-label="Cerrar imagen ampliada"
          >
            <UIcon name="i-lucide-x" class="size-5" />
          </button>
          <img
            v-if="expandedProject"
            :src="expandedProject.image"
            :alt="expandedProject.title"
            class="object-contain max-h-[90vh] max-w-[90vw]"
          >
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
