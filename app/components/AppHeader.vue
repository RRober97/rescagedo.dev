<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <header class="app-navbar">
    <div class="app-navbar__inner">
      <UNavigationMenu
        :items="links"
        variant="link"
        color="neutral"
        class="app-navbar__menu"
        :ui="{
          root: 'gap-1',
          list: 'gap-1',
          link: 'app-navbar__link',
          linkLeadingIcon: 'hidden'
        }"
      >
        <template #list-trailing>
          <ColorModeButton />
        </template>
      </UNavigationMenu>
    </div>
  </header>
</template>
