import Vue, { CreateElement, VNode } from 'vue'
import { IMember } from '@/store/modules/Member/types'

export default Vue.extend({
  computed: {
    memberList() {
      const memberState = this.$store.state.member
      return memberState.list
    }
  },
  render(h: CreateElement): VNode {
    return (
      <div style={styles.list}>
        {this.memberList.length === 6
          ? this.memberList.map((member: IMember) => (
            <div style={styles.card}>
              <img style={styles.image} src={member.picture.large}/>
              <h1 style={styles.name}>{member.name.first}</h1>
              <nuxt-link
                to={{
                  path: 'detail',
                  query: { id: member.id.value }
                }}
                tag='button'
                style={styles.button}
              >
                About Me
              </nuxt-link>
            </div>))
          : <h1 style={styles.loading}>Now Loading...</h1>
        }
      </div>
    )
  }
})

const styles = {
  loading: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 'var(--font8)'
  },
  name: {
    fontSize: 'var(--font4)'
  },
  list: {
    maxWidth: '1024px',
    margin: 'var(--space4) auto',
    padding: 'var(--space2)',
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 300px))',
    justifyContent: 'center'
  },
  card: {
    textAlign: 'center',
    width: '100%',
    background: '#fff',
    border: '15px solid var(--colorMain)',
    borderBottom: '5px solid var(--colorMain)'
  },
  image: {
    borderRadius: '50%',
    marginTop: '15px'
  },
  button: {
    width: '100%',
    height: '50px',
    fontSize: 'var(--font2)',
    background: 'var(--colorMain)',
    border: 0,
    marginTop: '15px'
  }
}
