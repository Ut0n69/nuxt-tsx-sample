import { Module } from 'vuex'
import { mutations } from '@/store/modules/Member/mutations'
import { initialState } from '@/store/modules/Member/state'
import { IMemberState } from '@/store/modules/Member/types'
import { RootState } from '@/store/types'

export const store: Module<IMemberState, RootState> = {
  state: initialState,
  mutations
}
