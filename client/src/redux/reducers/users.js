import {
  GET_USERS,
  UPDATE_USER_STATUS,
  DELETE_USER
} from '../types'

// const initialState = {
//   users: []
// }
const initialState = {
  users: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    // case GET_CURRENT_USER:
    //   return {
    //     ...state,
    //     user: action.payload
    //   }
    // case GET_USERS:
    //   return {
    //     ...state,
    //     users: action.payload,
    //   }
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      }
      // return [
      //   ...state,
      //   ...action.payload
      // ]
    case UPDATE_USER_STATUS:
      return {
        ...state,
        users: state.users.map((u) => u._id === action.payload._id ? action.payload : u)
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((u) => u._id !== action.payload._id)
      }

    default:
      return state
  }
}