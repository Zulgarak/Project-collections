import axios from 'axios'
import jwtDecode from 'jwt-decode'

import { SET_CURRENT_USER } from '../types'
import setAuthToken from '../../utils/setAuthToken'
import setMessage from '../../utils/message'



export const register = (userData, history) => () => {
  axios
    .post('/api/auth/register', userData)
    .then((res) => {
      setMessage(res.data.message)
      history.push("/login");
    })
    .catch((err)=> {
      setMessage(err.response.data.message)
    })
}

export const login = (userData, history) => (dispatch) => {
  axios
    .post('/api/auth/login', userData)
    .then((res) => {
      const { token, userAccess,  } = res.data
      localStorage.setItem('access_token', token)
      setAuthToken(token)
      const decoded = jwtDecode(token)
      const { userId } = decoded
      const obj = {userId, userAccess}
      dispatch(setCurrentUser(obj))
      setMessage(res.data.message)
      history.push("/collections")
      console.log(res);
    })
    .catch((err)=> {
      setMessage(err.response.data.message)
    })
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('access_token')
  setAuthToken(false)
  dispatch(setCurrentUser({}))
}



export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
})