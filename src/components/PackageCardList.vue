<script setup>
import PackageCard from './PackageCard/PackageCard.vue'

defineProps({
  items: Array,
  page: Number,
  totalPages: Number,
  totalVisible: {
    type: Number,
    default: 5
  }
})

const emit = defineEmits(['onPackageClicked', 'onPageChanged'])
</script>

<template>
  <PackageCard
    v-for="item in items"
    class="my-5"
    :key="item.objectID"
    :package-info="item"
    @package-click="emit('onPackageClick', $event)"
  />
  <v-pagination
    v-if="totalPages > 0"
    :value-model="page"
    :size="$vuetify.display.mobile ? 'x-small' : 'small'"
    :length="totalPages"
    :total-visible="totalVisible"
    @update:model-value="emit('onPageChanged', $event)"
  />
</template>
