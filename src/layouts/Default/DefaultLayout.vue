<script setup>
import FooterComponent from './FooterComponent.vue'
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid class="content-container">
        <slot />
      </v-container>
    </v-main>
    <FooterComponent class="mt-6" />
  </v-app>
</template>

<style lang="postcss" scoped>
.content-container {
  max-width: var(--content-max-width);
}
</style>
