<script setup>
import { ref } from 'vue'
import Radiobutton from '@/components/Radiobutton.vue'
const Italy = ref([
  {name: 'Juventus', id: 'f1'},
  {name: 'Milan', id: 'f2'},
  {name: 'Napoli', id: 'f3'},
  {name: 'Inter', id: 'f4'}
])
const selectedClub = ref('')
const disabledRadio = ref(true)
const disabledRadioChecked = ref(true)
</script>


<template>
  <h1 class="heading-1">Radiobutton</h1>
  <h2 class="heading-2">Basic</h2>
  <div class="line line_block">
    <p>Club: {{selectedClub}}</p>
    <div
        v-for="club in Italy"
        :key="club.id">
      <Radiobutton
          :value="club.name"
          :label="club.name"
          :id="club.id"
          name="club"
          v-model:checkedValue="selectedClub"/>
    </div>
  </div>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <Radiobutton
        value="Radiobutton Disabled"
        label="Radiobutton Disabled"
        id="RadiobuttonDisabled"
        name="RadiobuttonDisabled"
        :disabled="disabledRadio"
        v-model:checkedValue="disabledRadioChecked"/>
  </div>
</template>

<script>
export default {
  name: "RadioButton"
}
</script>

<style scoped>

</style>