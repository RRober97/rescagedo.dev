<script setup lang="ts">
</script>

<template>
  <div class="app-shell">
    <div
      class="app-background"
      aria-hidden="true"
    >
      <span class="app-blob app-blob--primary" />
      <span class="app-blob app-blob--accent" />
      <span class="app-grid" />
    </div>

    <div class="app-content">
      <UContainer class="app-page-container">
        <AppHeader :links="navLinks" />
        <main class="app-main">
          <slot />
        </main>
        <AppFooter />
      </UContainer>
    </div>
  </div>
</template>
