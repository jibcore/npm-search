<script setup>
import millify from 'millify'

const props = defineProps({
  packageInfo: {
    type: Object,
    required: true
  }
})

const userUrl = `https://www.jsdelivr.com/?query=${encodeURIComponent(
  `author: ${props.packageInfo.owner.name}`
)}`
</script>

<template>
  <v-card-subtitle class="d-flex justify-space-between">
    <div class="d-flex flex-wrap align-center gap-2">
      <a :href="userUrl" target="_blank" class="author-link">
        <v-avatar class="mr-2" size="20px">
          <v-img :src="packageInfo.owner.avatar" />
        </v-avatar>
        <span>{{ packageInfo.owner.name }}</span>
      </a>
      <v-chip v-if="packageInfo.popular" size="small" color="green"> Popular </v-chip>
      <v-chip v-if="packageInfo.deprecated" size="small" color="red"> Deprecated </v-chip>
      <v-chip v-if="packageInfo.version" size="small">
        <span>
          Version: <strong>{{ packageInfo.version }}</strong>
        </span>
      </v-chip>
      <v-chip v-if="packageInfo.license" size="small">
        <span>
          License: <strong>{{ packageInfo.license }}</strong>
        </span>
      </v-chip>
    </div>
    <div>
      <v-chip size="small">
        <span>
          <strong>{{ millify(packageInfo.jsDelivrHits) }}</strong> downloads
        </span>
      </v-chip>
    </div>
  </v-card-subtitle>
</template>

<style lang="postcss" scoped>
.author-link {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    background-color: unset;
  }
}
</style>
