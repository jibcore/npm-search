<script setup>
import PackageCardTitle from './PackageCardTitle.vue'
import PackageCardSubtitle from './PackageCardSubtitle.vue'
import PackageCardFooter from './PackageCardFooter.vue'

defineProps({
  packageInfo: {
    type: Object,
    required: true
  }
})

let emit = defineEmits(['packageClick'])
</script>

<template>
  <v-card>
    <v-card-item>
      <PackageCardTitle :package-info="packageInfo" @package-click="emit('packageClick', $event)" />
      <PackageCardSubtitle :package-info="packageInfo" />
    </v-card-item>
    <v-card-text> {{ packageInfo.description }} </v-card-text>
    <PackageCardFooter :package-info="packageInfo" />
  </v-card>
</template>
