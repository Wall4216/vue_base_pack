<template>
  <h1 class="heading-1">Typography</h1>
  <h2 class="heading-2"></h2>
  <h3 class="heading-3"></h3>
  <h4 class="heading-4"></h4>
</template>

<script>
export default {
  name: "typography"
}
</script>

<style lang="scss">
.heading {
  &-1 {
    font-size: 34px;
    margin: 20px 0px;
    font-weight: 300;
  }
  &-2 {
    font-size: 22px;
    margin: 20px 0px;
    font-weight: 300;
  }
  &-3 {
    font-size: 17px;
    margin: 20px 0px;
    font-weight: 300;
  }
}
</style>