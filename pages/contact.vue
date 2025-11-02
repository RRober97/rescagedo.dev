<template>
  <div class="max-w-3xl mx-auto py-12">
    <SectionTitle title="Contacto" subtitle="Email & redes" />

    <div class="grid gap-6 md:grid-cols-2 mt-6">
      <div class="site-card p-6">
        <h3 class="font-semibold">Email</h3>
        <p class="mt-2"><a :href="`mailto:${profile.email}`" class="underline">{{ profile.email }}</a></p>

        <h4 class="mt-4 font-semibold">Redes</h4>
        <div class="mt-2 flex gap-3">
          <a v-for="(s,i) in profile.socials" :key="i" :href="s.url" target="_blank" rel="noreferrer" class="text-sm underline">{{ s.label }}</a>
        </div>
      </div>

      <div class="p-6">
        <h4 class="font-semibold">Formulario (opcional)</h4>
        <p class="text-sm text-slate-500">TODO: agregar formulario funcional o usar un servicio de terceros. Por ahora, usa el email.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from '~/app/components/SectionTitle.vue'
import profile from '@/data/profile'
</script>
