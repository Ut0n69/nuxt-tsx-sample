import Vue, { CreateElement, VNode } from 'vue'
import { IMember } from '@/store/modules/Member/types';

export default Vue.extend({
  computed: {
    memberData() {
      const id: number = Number(this.$route.query.id)
      const memberInfo: IMember = this.$store.state.member.list[id]
      return memberInfo
    }
  },
  render(h: CreateElement): VNode {
    return (
      <div style={styles.detail}>
        <div>
          <div style={styles.head}>
            <img src={this.memberData.picture.large}/>
            <h1>{this.memberData.name.first}&nbsp;{this.memberData.name.last}</h1>
          </div>
          <div style={styles.contents}>
            <h2 >Age:&nbsp;{this.memberData.dob.age}</h2>
            <h2>Gender:&nbsp;{this.memberData.gender}</h2>
            <h2>Phone:&nbsp;{this.memberData.phone}</h2>
            <h2>Email:&nbsp;{this.memberData.email}</h2>
            <h2>City:&nbsp;{this.memberData.location.city}</h2>
          </div>
        </div>
        <nuxt-link
          to='/'
          tag='button'
          style={styles.button}
        >
          Back To Top
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
  head: {
    margin: 'var(--space4)',
    fontSize: 'var(--font4)'
  },
  contents: {
    fontSize: 'var(--font2)'
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
