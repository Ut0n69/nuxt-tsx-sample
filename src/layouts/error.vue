<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      Not Found...
    </h1>
    <h1 v-else>
      Something Wrong...
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    error: {
      type: Object,
      required: true
    }
  }
})
</script>

<style scoped>
.container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--font8);
  color: red;
}
</style>
