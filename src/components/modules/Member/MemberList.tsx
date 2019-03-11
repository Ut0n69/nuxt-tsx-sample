import Vue, { CreateElement, VNode } from 'vue'
import MemberCard from './MemberCard'
import { IMember } from '@/store/modules/Member/types'

export default Vue.extend({
  components: {
    MemberCard
  },
  computed: {
    memberList() {
      const memberState = this.$store.state.member
      return memberState.list
    }
  },
  created() {},
  render(h: CreateElement): VNode {
    return (
      <section>
        <div style={styles.list}>
          {this.memberList && this.memberList.map((member: IMember) => (
            <MemberCard name={member.name.first} />
          ))}
        </div>
      </section>
    )
  }
})

const styles = {
  list: {
    maxWidth: '1024px',
    margin: 'var(--space4) auto',
    padding: 'var(--space4)',
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 300px))',
    justifyContent: 'center'
  },
  card: {
    textAlign: 'center',
    width: '100%',
    height: '380px',
    background: '#fff',
    border: '5px solid var(--colorMain)'
  }
}
