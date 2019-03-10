import Vue, { CreateElement, VNode } from 'vue'

export default Vue.extend({
  render(h: CreateElement): VNode {
    return <button style={styles.button}>Back To Top</button>
  }
})

const styles = {
  button: {
    width: '160px',
    height: '50px',
    fontSize: 'var(--font2)',
    background: 'var(--colorMain)'
  }
}
