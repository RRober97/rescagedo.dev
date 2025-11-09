<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})

const { data: projectsPage } = await useAsyncData('home-projects-page', () => {
  return queryCollection('pages').path('/projects').first()
})

const { data: projects } = await useAsyncData('home-projects', () => {
  return queryCollection('projects').all()
})

const { data: certificationsPage } = await useAsyncData('home-certifications-page', () => {
  return queryCollection('pages').path('/certifications').first()
})

const { data: certifications } = await useAsyncData('home-certifications', () => {
  return queryCollection('certifications').order('date', 'DESC').all()
})

const { data: aboutPage } = await useAsyncData('home-about-page', () => {
  return queryCollection('about').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { global } = useAppConfig()

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: '!pt-0 lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <LandingAbout :page />
      <LandingWorkExperience :page />
    </UPageSection>

    <section
      v-if="projectsPage"
      id="projects"
      class="scroll-mt-24 pt-16"
    >
      <UPageHero
        :title="projectsPage.title"
        :description="projectsPage.description"
        :links="projectsPage.links"
        :ui="{
          title: '!mx-0 text-left',
          description: '!mx-0 text-left',
          links: 'justify-start'
        }"
      >
        <template #links>
          <div
            v-if="projectsPage.links?.length"
            class="flex items-center gap-2"
          >
            <UButton
              v-for="(link, index) in projectsPage.links"
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
    </section>

    <section
      v-if="certificationsPage"
      id="certifications"
      class="scroll-mt-24 pt-16"
    >
      <UPageHero
        :title="certificationsPage.title"
        :description="certificationsPage.description"
        :links="certificationsPage.links"
        :ui="{
          title: '!mx-0 text-left',
          description: '!mx-0 text-left',
          links: 'justify-start'
        }"
      >
        <template #links>
          <div
            v-if="certificationsPage.links?.length"
            class="flex items-center gap-2"
          >
            <UButton
              v-for="(link, index) in certificationsPage.links"
              :key="index"
              :to="link.to || `mailto:${global.email}`"
              v-bind="link"
            />
          </div>
        </template>
      </UPageHero>

      <UPageSection :ui="{ container: '!pt-0' }">
        <CertificationsGrid :certifications="certifications" />
      </UPageSection>
    </section>

    <section
      v-if="aboutPage"
      id="about"
      class="scroll-mt-24 pt-16"
    >
      <LandingAboutDetails :page="aboutPage" />
    </section>
  </UPage>
</template>
