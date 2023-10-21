<template>
  <div>
    Home
    <BAlert :model-value="true">Default Alert</BAlert>
    <BButton>Button</BButton>
  </div>
</template>

<script>
import { BAlert, BButton } from 'bootstrap-vue-next'

export default {
  components: {
    BAlert,
    BButton,
  },
  setup() {


    return {}
  }
}
</script>

<style scoped>
</style>
