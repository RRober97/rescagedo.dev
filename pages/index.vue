<template>
  <div>
    <Hero />

    <section class="max-w-4xl mx-auto py-12">
      <SectionTitle title="Últimos proyectos" subtitle="Seleccionados" />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <ProjectCard v-for="p in featured" :key="p.slug" :project="p" @open="openProject" />
      </div>
      <div class="mt-6 text-center">
        <NuxtLink to="/projects" class="text-sm underline">Ver todos los proyectos</NuxtLink>
      </div>
    </section>

    <ProjectModal :modelValue="openModal" :project="activeProject" @update:modelValue="openModal = $event" />
  </div>
</template>

<script setup>
import Hero from '~/app/components/Hero.vue'
import SectionTitle from '~/app/components/SectionTitle.vue'
import ProjectCard from '~/app/components/ProjectCard.vue'
import ProjectModal from '~/app/components/ProjectModal.vue'
import projects from '@/data/projects'
import { useModal } from '~/app/composables/useModal'

const { open, payload, show, hide } = useModal()
const openModal = useState('openModal', () => false)
const activeProject = useState('activeProject', () => null)

const featured = projects.slice(0,3)
function openProject(p){ activeProject.value = p; openModal.value = true }
</script>
