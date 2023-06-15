<template>
  <DefaultLayout>
    <h1 class="text-center mb-5">NPM Package Search</h1>
    <AlgoliaSearchField v-model="searchQuery" @update:model-value="refreshItems" />
    <PackageCardList
      :items="items"
      :page="page"
      :total-pages="totalPages"
      @on-page-changed="onPageChanged"
      @on-package-click="selectedPackage = $event"
    />
    <PackageInfoDialog :package-info="selectedPackage" @close="selectedPackage = undefined" />
  </DefaultLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DefaultLayout from './layouts/Default/DefaultLayout.vue'
import AlgoliaSearchField from './components/AlgoliaSearchField.vue'
import PackageCardList from './components/PackageCardList.vue'
import PackageInfoDialog from './components/PackageInfoDialog.vue'
import { search } from './services/AlgoliaSearchService'

let searchQuery = ''
let itemsPerPage = 10
let page = ref(1)
let totalPages = ref(0)
let items = ref([])
let selectedPackage = ref(undefined)

onMounted(() => {
  refreshItems()
})

async function refreshItems() {
  console.log(searchQuery)
  let response = await search(searchQuery, page.value - 1, itemsPerPage)
  page.value = response.page + 1
  totalPages.value = response.nbPages
  items.value = response.hits
  console.log(response)
}

function onPageChanged(nextPage) {
  page.value = nextPage
  refreshItems()
}
</script>
