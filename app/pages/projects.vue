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
    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <Motion
        v-for="(project, index) in projects"
        :key="project.title"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 * index }"
        :in-view-options="{ once: true }"
      >
        <UPageCard
          :title="project.title"
          :description="project.description"
          :to="project.url"
          orientation="horizontal"
          variant="naked"
          :reverse="index % 2 === 1"
          class="group"
          :ui="{
            wrapper: 'max-sm:order-last'
          }"
        >
          <template #leading>
            <span class="text-sm text-muted">
              {{ new Date(project.date).getFullYear() }}
            </span>
          </template>
          <template #footer>
            <ULink
              :to="project.url"
              class="text-sm text-primary flex items-center"
            >
              Ver proyecto
              <UIcon
                name="i-lucide-arrow-right"
                class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </ULink>
          </template>
          <button
            type="button"
            class="cursor-zoom-in rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full h-48 overflow-hidden"
            :aria-label="`Ampliar imagen del proyecto ${project.title}`"
            @click.stop="openImage(project)"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="object-cover w-full h-full rounded-lg"
            >
          </button>
        </UPageCard>
      </Motion>
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
