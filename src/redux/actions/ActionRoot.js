import * as Types from '../rootTypes'

export const rootAction = val => ({ type: Types.CH_ROOT, value: val })

export const initailAction = () => (dispatch) => {
  dispatch(rootAction('beforlogin'))
}