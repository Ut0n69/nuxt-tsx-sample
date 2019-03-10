import { MutationTree } from 'vuex'
import { Types, AddMember, IMemberState } from '@/store/modules/Member/types'

export const mutations: MutationTree<IMemberState> = {
  [Types.ADD_MEMBER]: (state, action: AddMember) => {
    state.list.push(action.payload)
  }
}
