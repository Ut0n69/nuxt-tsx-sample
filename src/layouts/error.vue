<template>
  <div>
    <h1 v-if="error.statusCode === 404">
      Not Found...
    </h1>
    <h1 v-else>
      Something Wrong...
    </h1>
    <nuxt-link to="/">
      <TheButton />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheButton from '@/components/common/TheButton'

export default Vue.extend({
  components: {
    TheButton
  },
  props: {
    error: {
      type: Object,
      required: true
    }
  }
})
</script>
