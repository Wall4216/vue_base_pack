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
  <h2 class="header-2">Rounded</h2>
  <div class="line">
    <Button label="primary" color="primary" :rounded="true"/>
    <Button label="Secondary" color="secondary" :rounded="true"/>
    <Button label="Success" color="success" :rounded="true"/>
    <Button label="Info" color="info" :rounded="true"/>
    <Button label="Morning" color="morning" :rounded="true"/>
    <Button label="Danger" color="danger" :rounded="true"/>
  </div>
  <h2 class="header-2">Disabled</h2>
  <div class="line">
    <Button label="primary" color="primary" :disabled="true"/>
    <Button label="Secondary" color="secondary" :disabled="true"/>
    <Button label="Success" color="success" :disabled="true"/>
    <Button label="Info" color="info" :disabled="false"/>
    <Button label="Morning" color="morning" :disabled="true"/>
    <Button label="Danger" color="danger" :disabled="true"/>
  </div>
  <h2 class="heading-2">Outlined</h2>
  <div class="line">
    <Button label="Primary" color="primary" outlined/>
    <Button label="Secondary" color="second" outlined/>
    <Button label="Success" color="success" outlined/>
    <Button label="Info" color="info" outlined/>
    <Button label="Warning" color="warning" outlined/>
    <Button label="Danger" color="danger" outlined/>
  </div>
  <h2 class="heading-2">Icon</h2>
  <div class="line">
    <Button color="primary" icon="heart" outlined/>
    <Button color="second" icon="hand"/>
    <Button color="success" icon="address-book" outlined/>
    <Button color="info" icon="credit-card"/>
    <Button color="warning" icon="lemon" outlined/>
    <Button color="danger" icon="hourglass"/>
  </div>
  <h2 class="heading-2">Size</h2>
  <div class="line">
    <Button label="Normal" color="primary" />
    <Button label="Large" color="primary" size="large"/>
  </div>
  <h2 class="heading-2">Event</h2>
  <div class="line">
    <Button label="@click" color="danger" @click="eventForButton"/>
  </div>
</template>


<style>
</style>
<script>
export default {
name: "ButtonView"
}
</script>