<template>
  <div>
    <TheHeader />
    <transition mode="out-in" name="slideQuad">
      <nuxt />
    </transition>
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

<style scoped>
.slideQuad-enter-active {
  transition: all 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.slideQuad-leave-active {
  transition: all 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045);
}

.slideQuad-enter,
.slideQuad-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
