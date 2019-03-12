<template>
  <section class="container">
    <MemberDetail />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import MemberDetail from '@/components/modules/Member/MemberDetail'

export default Vue.extend({
  components: {
    MemberDetail
  }
})
</script>
