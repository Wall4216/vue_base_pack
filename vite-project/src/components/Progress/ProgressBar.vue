<template>
<div class="progress-container">
  <div class="progress">
    <div class="progress-bar">

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ProgressBar"
}
</script>

<style lang="scss" scoped>
.progress {
  height: 10px;
  border-radius: 4px;
  &-container {
    margin-bottom: 20px;
    overflow: hidden;
  }
  &-bar {
    background: #000;
    height: 100%;
    border-radius: 4px;
    transition: .5s;
  }
  &-percent {
    display: block;
    text-align: center;
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 10px;
  }
}
</style>