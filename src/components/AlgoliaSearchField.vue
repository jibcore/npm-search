<script setup>
import { ref, watch } from 'vue'
import AlgoliaGreyImage from '../assets/algolia_grey.svg'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])
const internalValue = ref(props.modelValue)

watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue)
})

function onAppendInnerClick() {
  window.open('https://www.algolia.com', '_blank')
}
</script>

<template>
  <v-text-field
    v-bind="$attrs"
    v-model="internalValue"
    label="search all of npm"
    variant="solo"
    prepend-inner-icon="mdi-magnify"
    :append-inner-icon="AlgoliaGreyImage"
    single-line
    hide-details
  >
    <template #append-inner>
      <v-img class="append-icon" width="50px" :src="AlgoliaGreyImage" @click="onAppendInnerClick" />
    </template>
  </v-text-field>
</template>

<style lang="postcss" scoped>
.append-icon {
  cursor: pointer;
}
</style>
