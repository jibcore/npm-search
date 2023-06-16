<script setup>
defineProps({
  packageInfo: [Object, undefined]
})

const emit = defineEmits(['close'])
</script>

<template>
  <div class="text-center">
    <v-dialog
      v-if="packageInfo !== undefined"
      :modelValue="true"
      width="auto"
      maxWidth="500"
      @update:modelValue="emit('close')"
    >
      <v-card>
        <v-card-title class="text-center">README</v-card-title>
        <v-card-text>
          <div class="readme" v-html="packageInfo.readme"></div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="postcss" scoped>
.readme {
  white-space: break-spaces;
  overflow-wrap: anywhere;
}
</style>
