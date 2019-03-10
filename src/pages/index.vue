<template>
  <section class="container">
    <div>
      <MemberList />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import MemberList from '@/components/modules/Member/MemberList'

export default Vue.extend({
  components: {
    MemberList
  }
})
</script>
