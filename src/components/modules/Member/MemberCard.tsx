import Vue, { CreateElement, VNode } from 'vue'
import { MemberApiClient } from '@/network/api/Member'

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    addItem() {
      const memberApiClient = new MemberApiClient(this.$store)
      memberApiClient.fetchMember()
    }
  },
  render(h: CreateElement): VNode {
    return (
      <div style={styles.card}>
        <h1>{this.name}</h1>
        <button onClick={() => this.addItem()}>Click Me</button>
      </div>
    )
  }
})

const styles = {
  card: {
    textAlign: 'center',
    width: '100%',
    height: '380px',
    background: '#fff',
    border: '5px solid var(--colorMain)'
  }
}
