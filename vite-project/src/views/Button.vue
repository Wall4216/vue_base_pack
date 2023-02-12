<script setup>
import Button from "@/components/Button.vue";

</script>

<template>
<h1 class="heading-1">Button</h1>
  <h2 class="header-2">Colors</h2>
  <div class="line">
  <Button label="primary" color="primary"/>
  <Button label="Secondary" color="secondary"/>
  <Button label="Success" color="success"/>
  <Button label="Info" color="info"/>
  <Button label="Morning" color="morning"/>
  <Button label="Danger" color="danger"/>
  </div>
</template>


<style>
</style>
<script>
export default {
name: "ButtonView"
}
</script>