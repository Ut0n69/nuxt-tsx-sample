export enum Types {
  ADD_MEMBER = 'member/add_member'
}

export interface IMember {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  location: {
    street: string
    city: string
    state: string
    postcode: number
    coordinates: {
      latitude: string
      longitude: string
    }
    timezone: {
      offset: string
      description: string
    }
  }
  email: string
  login: {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
  }
  dob: {
    date: string
    age: number
  }
  registered: {
    date: string
    age: number
  }
  phone: string
  cell: string
  id: {
    name: string
    value: string
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  nat: string
}

export interface IMemberState {
  list: IMember[]
}

export class AddMember implements FluxStandardAction {
  type = Types.ADD_MEMBER
  constructor(public payload: IMember) {}
}
