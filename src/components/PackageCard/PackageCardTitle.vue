<script setup>
const props = defineProps({
  packageInfo: {
    type: Object
  }
})

const emit = defineEmits(['packageClick'])

const gitHubUrl = props.packageInfo.githubRepo
  ? `https://github.com/${props.packageInfo.githubRepo.user}/${props.packageInfo.githubRepo.project}/`
  : ''
const npmUrl = `https://www.npmjs.com/package/${props.packageInfo.name}`
// const packageUrl = `https://www.jsdelivr.com/package/npm/${props.packageInfo.name}`
</script>

<template>
  <v-card-title class="d-flex justify-space-between">
    <div>
      <div @click="emit('packageClick', packageInfo)" class="package-title">
        {{ packageInfo.name }}
      </div>
    </div>
    <div>
      <v-btn
        v-if="packageInfo.homepage"
        size="small"
        variant="plain"
        icon="mdi-web"
        target="_blank"
        :ripple="false"
        :href="packageInfo.homepage"
      />
      <v-btn
        v-if="gitHubUrl"
        variant="plain"
        size="small"
        icon="mdi-github"
        target="_blank"
        :ripple="false"
        :href="gitHubUrl"
      />
      <v-btn
        v-if="npmUrl"
        size="small"
        variant="plain"
        icon="mdi-npm"
        target="_blank"
        :ripple="false"
        :href="npmUrl"
      />
    </div>
  </v-card-title>
</template>

<style lang="postcss" scoped>
.package-title {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>
