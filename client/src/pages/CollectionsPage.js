import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUserById, getAllUsers} from "../redux/actions/users";


export const CollectionsPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const onHandler =() => {
    // console.log(user.userId);
    // console.log(isAuthenticated);
    // dispatch(getCurrentUser(user.id))
    // dispatch(getUserById(user.userId))
    dispatch(getAllUsers())
    // console.log(user.userId);
  }

  return (
    <div className="container">
      <h1 className="center-align">CollectionsPage</h1>
      <button onClick={onHandler}>dhaskljdhlsakhd</button>
    </div>
  )
}