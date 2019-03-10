<template>
  <div>
    <TheHeader />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '@/components/common/TheHeader'

export default Vue.extend({
  components: {
    TheHeader
  }
})
</script>
