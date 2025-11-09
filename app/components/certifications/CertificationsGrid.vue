<script setup lang="ts">
type Certification = {
  title: string
  description?: string
  url?: string
  image?: string
  issuer?: string
  date?: string | number
  credentialId?: string
  skills?: string[]
}

defineProps<{
  certifications: Certification[] | null | undefined
}>()
</script>

<template>
  <div>
    <Motion
      v-for="(cert, index) in certifications || []"
      :key="`${cert.title}-${cert.issuer}`"
      :initial="{ opacity: 0, transform: 'translateY(10px)' }"
      :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ delay: 0.08 * index }"
      :in-view-options="{ once: true }"
      class="mb-10"
    >
      <UPageCard
        :title="cert.title"
        :description="cert.description"
        :to="cert.url || undefined"
        orientation="horizontal"
        variant="naked"
        :reverse="index % 2 === 1"
        class="group"
        :ui="{ wrapper: 'max-sm:order-last' }"
      >
        <template #leading>
          <div class="flex items-center gap-2 text-sm text-muted">
            <span v-if="cert.date">{{ new Date(cert.date).toLocaleDateString() }}</span>
            <span v-if="cert.issuer">•</span>
            <UBadge
              v-if="cert.issuer"
              color="primary"
              variant="soft"
            >
              {{ cert.issuer }}
            </UBadge>
            <UBadge
              v-if="cert.credentialId"
              variant="subtle"
            >
              ID: {{ cert.credentialId }}
            </UBadge>
          </div>
        </template>

        <template #footer>
          <div class="flex items-center gap-3">
            <ULink
              v-if="cert.url"
              :to="cert.url"
              class="text-sm text-primary flex items-center"
            >
              Ver credencial
              <UIcon
                name="i-lucide-arrow-right"
                class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </ULink>
            <div
              v-if="cert.skills?.length"
              class="flex flex-wrap gap-1"
            >
              <UBadge
                v-for="skill in cert.skills"
                :key="skill"
                size="xs"
                variant="soft"
              >
                {{ skill }}
              </UBadge>
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
  </div>
</template>
