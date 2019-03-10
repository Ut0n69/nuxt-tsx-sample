import Vue, { CreateElement, VNode } from 'vue'

export default Vue.extend({
  render(h: CreateElement): VNode {
    return (
      <header style={styles.header}>
        <h1 style={styles.title}>Member</h1>
      </header>
    )
  }
})

const styles = {
  header: {
    width: '100%',
    height: '120px',
    lineHeight: '120px',
    paddingLeft: 'var(--space4)',
    background: 'var(--colorMain)'
  },
  title: {
    fontSize: '38px'
  }
}
