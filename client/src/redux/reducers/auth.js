import {GET_CURRENT_USER, SET_CURRENT_USER} from '../types'

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length !== 0,
        user: action.payload
      }
    // case GET_CURRENT_USER:
    //   return {
    //     ...state,
    //     user: action.payload
    //   }
    default:
      return state
  }
}