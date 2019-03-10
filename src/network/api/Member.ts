import { Store } from 'vuex'
import { Ajax } from '@/network/Ajax.ts'
import { AjaxRequest } from '@/network/AjaxRequest'
import { AddMember } from '@/store/modules/Member/types'
import { RootState } from '@/store/types'

export interface IFetchMember {}
export class MemberApiClient implements IFetchMember {
  private _store: Store<RootState>

  constructor(store: Store<RootState>) {
    this._store = store
  }

  fetchMember() {
    const request: AjaxRequest = {
      path: '/',
      params: '',
      data: {}
    }
    Ajax.shared.get(request).then((data: any) => {
      this._store.commit(new AddMember(data.results[0]))
    })
  }
}
