<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useEventListener, useScrollLock } from '@vueuse/core'

type Project = {
  title: string
  description?: string
  url?: string
  image?: string
  date?: string | number
}

const props = defineProps<{
  projects: Project[] | null | undefined
}>()

const projectsList = computed(() => props.projects ?? [])
const expandedProject = ref<Project | null>(null)
const closeButtonRef = ref<HTMLButtonElement | null>(null)
const previouslyFocusedElement = ref<HTMLElement | null>(null)
const bodyElement = ref<HTMLElement | null>(null)
const isBodyScrollLocked = useScrollLock(bodyElement, false)

if (import.meta.client) {
  bodyElement.value = document.body
}

watch(expandedProject, (project) => {
  isBodyScrollLocked.value = Boolean(project)
})

async function openImage(project: Project, event?: MouseEvent | KeyboardEvent) {
  if (!project.image) {
    return
  }
  if (import.meta.client) {
    previouslyFocusedElement.value = event?.currentTarget as HTMLElement | null
  }
  expandedProject.value = project
  await nextTick()
  closeButtonRef.value?.focus()
}

function closeImage() {
  expandedProject.value = null
  if (import.meta.client) {
    previouslyFocusedElement.value?.focus()
  }
  previouslyFocusedElement.value = null
}

useEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeImage()
  }
})
</script>

<template>
  <div>
    <Motion
      v-for="(project, index) in projectsList"
      :key="project.title"
      :initial="{ opacity: 0, transform: 'translateY(10px)' }"
      :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ delay: 0.2 * index }"
      :in-view-options="{ once: true }"
      class="mb-10"
    >
      <UPageCard
        :title="project.title"
        :description="project.description"
        :to="project.url || undefined"
        orientation="horizontal"
        variant="naked"
        :reverse="index % 2 === 1"
        class="group"
        :ui="{ wrapper: 'max-sm:order-last' }"
      >
        <template #leading>
          <span
            v-if="project.date"
            class="text-sm text-muted"
          >
            {{ new Date(project.date).getFullYear() }}
          </span>
        </template>
        <template #footer>
          <ULink
            v-if="project.url"
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
          v-if="project.image"
          type="button"
          class="w-full h-48 rounded-lg overflow-hidden focus:outline-none focus-visible:ring focus-visible:ring-primary cursor-zoom-in"
          :aria-label="`Ver imagen ampliada de ${project.title}`"
          @click.stop="openImage(project, $event)"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="object-cover w-full h-full"
          >
        </button>
      </UPageCard>
    </Motion>

    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="expandedProject"
          class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          :aria-label="expandedProject.title"
          @click.self="closeImage"
        >
          <div class="relative max-h-[90vh] max-w-[90vw]">
            <button
              ref="closeButtonRef"
              type="button"
              class="absolute -top-3 -right-3 rounded-full bg-white/90 text-neutral-900 shadow-md p-2 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-primary"
              aria-label="Cerrar imagen"
              @click="closeImage"
            >
              <UIcon
                name="i-lucide-x"
                class="size-4"
              />
            </button>
            <img
              :src="expandedProject.image"
              :alt="expandedProject.title"
              class="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            >
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
