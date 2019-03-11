<template>
  <div>
    <TheHeader />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '@/components/common/TheHeader'
import { MemberApiClient } from '@/network/api/Member'
import { FETCH_MEMBER_COUNT } from '@/utils/utils'

export default Vue.extend({
  components: {
    TheHeader
  },
  created() {
    const memberApiClient = new MemberApiClient(this.$store)

    for (let i = 0; i < FETCH_MEMBER_COUNT; i++) {
      memberApiClient.fetchMember()
    }
  }
})
</script>
