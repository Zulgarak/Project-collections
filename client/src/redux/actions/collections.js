import axios from 'axios'

import {
  GET_COLLECTIONS,
  GET_COLLECTION
} from "../types";



export const getAllCollections = () => async (dispatch) => {
  try {
    const {data} = await axios.get('/api/collections')
    dispatch(getCollections(data))
  } catch (e) {
    console.log(e);
  }
};

export const getCollectionByID = id => async (dispatch) => {
  try {
    const {data} = await axios.get(`/api/collections/${id}`)
    console.log('data in action',data);
    dispatch(getCollection(data))
  } catch (e) {
    console.log(e);
  }
};

// export const updateUser = (dataUser) => (dispatch) => {
//   axios
//     .put('/api/users', {...dataUser})
//     .then((res)=> dispatch({
//       type: UPDATE_USER_STATUS,
//       payload: res.data
//     }))
// }

// export const deleteCollection = (dataCollection) => (dispatch) => {
//   axios
//     .delete('/api/collections', {data: dataCollection})
//     // .then((res)=>  console.log(JSON.parse(res.config.data)))
//     .then((res)=> dispatch({
//       type: DELETE_COLLECTION,
//       payload: JSON.parse(res.config.data)
//     }))
// }


export const getCollections = (data) => ({
  type: GET_COLLECTIONS,
  payload: data
});

export const getCollection = (data) => ({
  type: GET_COLLECTION,
  payload: data
});

