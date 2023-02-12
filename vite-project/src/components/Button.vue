<script setup>
const props = defineProps({
 label: {
   type: String,
   default: 'Button'
 },
 })
</script>


<template>
<button class="btn">{{label}}</button>
</template>

<script>
export default {
  name: "Button"
}
</script>


<style lang="scss" scoped>
.btn {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 20px;
  height: 40px;
  color: #fff;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: .2s;
  &_primary {
    background: var(--primary);
    border: 1px solid var(--primary);

    &:enabled:hover {
      background: var(--primary-hover);
    }
  }
}
</style>