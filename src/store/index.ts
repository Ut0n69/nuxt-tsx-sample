import Vuex from 'vuex'
import { RootState } from '@/store/types'

import * as member from '@/store/modules/Member'

export default () =>
  new Vuex.Store<RootState>({
    modules: {
      member: member.store
    }
  })
