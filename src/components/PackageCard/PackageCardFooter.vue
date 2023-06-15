<script setup>
defineProps({
  packageInfo: Object
})
</script>

<template>
  <v-card-actions v-if="packageInfo.keywords.length" class="d-flex flex-wrap">
    <v-chip v-for="keyword in packageInfo.keywords" :key="keyword" size="x-small" class="mr-2 mt-1">
      {{ keyword }}
    </v-chip>
  </v-card-actions>
</template>
