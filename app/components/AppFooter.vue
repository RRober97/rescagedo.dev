<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <footer class="app-footer">
    <UFooter
      class="app-footer__content"
      :ui="{ left: 'text-xs text-muted', right: 'gap-2' }"
    >
      <template #left>
        {{ footer.credits }}
      </template>

      <template #right>
        <template v-if="footer?.links">
          <UButton
            v-for="(link, index) of footer?.links"
            :key="index"
            v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
            class="app-footer__link"
          />
        </template>
      </template>
    </UFooter>
  </footer>
</template>
