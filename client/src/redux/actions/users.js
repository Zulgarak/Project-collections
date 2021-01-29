import axios from 'axios'

import {DELETE_USER, GET_CURRENT_USER, GET_USERS, UPDATE_USER_STATUS} from "../types";

// export const getUserById = (id) => (dispatch) => {
//   console.log(id);
//   axios
//     .get(`/api/users/${id}`)
//     .then((res) => {
//       // console.log(res.data);
//       console.log(id);
//       dispatch(getCurrentUser(res.data))
//     })
// }


// export const getAllUsers = () => (dispatch) => {
//    axios
//     .get('/api/users')
//     .then((res) => {
//       console.log(res.data);
//       dispatch(getUsers(res.data))
//     })
//     .catch((err) => console.log(err));
// };
export const getAllUsers = () => async (dispatch) => {
  try {
    const {data} = await axios.get('/api/users')
    dispatch(getUsers(data))
  } catch (e) {
    console.log(e);
  }
};
// export const updateUser = (dataUser) => {
export const updateUser = (dataUser) => (dispatch) => {
  axios
    .put('/api/users', {...dataUser})
    .then((res)=> dispatch({
      type: UPDATE_USER_STATUS,
      payload: res.data
    }))
}

export const deleteUser = (dataUser) => (dispatch) => {

  axios
    .delete('/api/users', {data: dataUser})
    // .then((res)=>  console.log(JSON.parse(res.config.data)))
    .then((res)=> dispatch({
      type: DELETE_USER,
      payload: JSON.parse(res.config.data)
    }))
}

export const getCurrentUser = (user) => ({
  type: GET_CURRENT_USER,
  payload: user
})

// export const getUsers = () => ({
//   type: GET_USERS
// });
export const getUsers = (data) => ({
  type: GET_USERS,
  payload: data
});

