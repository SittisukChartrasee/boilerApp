import * as Types from '../rootTypes'

const init = {
  root: 'DEV'
}

export default (state = init, action) => {
  switch (action.type) {
    case Types.CH_ROOT:
      return { ...state, root: action.value }
  
    default:
      return state
  }
}