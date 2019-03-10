import Vue, { CreateElement, VNode } from 'vue'
import MemberCard from './MemberCard'

export default Vue.extend({
  components: {
    MemberCard
  },
  data() {
    return {
      memberList: ['aaa', 'bbb', 'ccc']
    }
  },
  created() {},
  render(h: CreateElement): VNode {
    return (
      <section>
        <div style={styles.list}>
          {this.memberList.map((name: string) => (
            <MemberCard name={name} />
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
