<script setup>
import {ref} from 'vue'
import Tabs from '@/components/Tabs.vue'
const tabs = [
  {name: 'About', label: 'О проекте'},
  {name: 'Vue', label: 'Про Vue'},
  {name: 'PHP', label: 'Laravel'},
]
const selectedTab = ref('Vue')
const changeTab = (tabName) => {
  selectedTab.value = tabName
}
</script>

<template>
  <h1 class="heading-1">Tabs</h1>
  <Tabs
      :names="tabs"
      :selectedTab="selectedTab"
      @changeTab="changeTab">
    <div v-if="selectedTab === 'About'">
      Я хз чо писать
    </div>
    <div v-if="selectedTab === 'Vue'">
      Молодежный фреймворк
    </div>
    <div v-if="selectedTab === 'PHP'">
      Моя родина
    </div>
  </Tabs>
</template>