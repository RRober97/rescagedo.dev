<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup>
import { useHead } from '#app'
useHead({ title: 'Roberto Escagedo — rescagedo.dev', meta: [{ name: 'description', content: 'Portafolio de Roberto Escagedo — Software Engineer' }] })
</script>
