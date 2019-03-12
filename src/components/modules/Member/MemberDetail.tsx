import Vue, { CreateElement, VNode } from 'vue'

export default Vue.extend({
  computed: {
    getRouteId() {
      return this.$route.query.id
    }
  },
  created() {
    console.log(this.getRouteId)
  },
  render(h: CreateElement): VNode {
    return (
      <div style={styles.detail}>
        <div>
          {this.getRouteId}
        </div>

        <nuxt-link
          to='/'
          tag='button'
          style={styles.button}
        >
          About Me
        </nuxt-link>
      </div>
    )
  }
})

const styles = {
  detail: {
    margin: 'var(--space4) auto',
    textAlign: 'center',
    width: '500px',
    background: '#fff',
    border: '15px solid var(--colorMain)',
    borderBottom: '5px solid var(--colorMain)'

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
