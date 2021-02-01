import {
  GET_COLLECTIONS,
  GET_COLLECTION
} from '../types'


const initialState = {
  collections: [],
  collection: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    case GET_COLLECTION:
      return {
        ...state,
        collection: action.payload
      }
    default:
      return state
  }
}