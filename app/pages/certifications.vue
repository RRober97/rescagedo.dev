<script setup lang="ts">
const { data: page } = await useAsyncData('certs-page', () => {
  return queryCollection('pages').path('/certifications').first()
})
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: certs } = await useAsyncData('certifications', () => {
  return queryCollection('certifications').order('date', 'DESC').all()
})

const { global } = useAppConfig()

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
      :ui="{ title: '!mx-0 text-left', description: '!mx-0 text-left', links: 'justify-start' }"
    >
      <template #links>
        <div v-if="page.links" class="flex items-center gap-2">
          <UButton :to="`mailto:${global.email}`" v-bind="page.links[0]" />
        </div>
      </template>
    </UPageHero>

    <UPageSection :ui="{ container: '!pt-0' }">
      <Motion
        v-for="(cert, index) in certs"
        :key="cert.title + cert.issuer"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.08 * index }"
        :in-view-options="{ once: true }"
      >
        <UPageCard
          :title="cert.title"
          :description="cert.description"
          :to="cert.url"
          orientation="horizontal"
          variant="naked"
          :reverse="index % 2 === 1"
          class="group"
          :ui="{ wrapper: 'max-sm:order-last' }"
        >
          <template #leading>
            <div class="flex items-center gap-2 text-sm text-muted">
              <span>{{ new Date(cert.date).toLocaleDateString() }}</span>
              <span>•</span>
              <UBadge color="primary" variant="soft">{{ cert.issuer }}</UBadge>
              <UBadge v-if="cert.credentialId" variant="subtle">ID: {{ cert.credentialId }}</UBadge>
            </div>
          </template>

          <template #footer>
            <div class="flex items-center gap-3">
              <ULink v-if="cert.url" :to="cert.url" class="text-sm text-primary flex items-center">
                Ver credencial
                <UIcon name="i-lucide-arrow-right" class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
              </ULink>
              <div v-if="cert.skills?.length" class="flex flex-wrap gap-1">
                <UBadge v-for="s in cert.skills" :key="s" size="xs" variant="soft">{{ s }}</UBadge>
              </div>
            </div>
          </template>

          <img
            v-if="cert.image"
            :src="cert.image"
            :alt="cert.title"
            class="object-cover w-full h-48 rounded-lg"
            loading="lazy"
          >
        </UPageCard>
      </Motion>
    </UPageSection>
  </UPage>
</template>
