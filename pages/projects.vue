<template>
  <div class="max-w-6xl mx-auto py-12">
    <SectionTitle title="Proyectos" subtitle="Portfolio de proyectos seleccionados" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <ProjectCard v-for="p in projects" :key="p.slug" :project="p" @open="openProject" />
    </div>

    <ProjectModal :modelValue="openModal" :project="activeProject" @update:modelValue="openModal = $event" />
  </div>
</template>

<script setup>
import SectionTitle from '~/app/components/SectionTitle.vue'
import ProjectCard from '~/app/components/ProjectCard.vue'
import ProjectModal from '~/app/components/ProjectModal.vue'
import projects from '@/data/projects'
import { ref } from 'vue'

const openModal = ref(false)
const activeProject = ref(null)
function openProject(p){ activeProject.value = p; openModal.value = true }
</script>
