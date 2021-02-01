import React, {useState, useEffect, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {deleteUser, getAllUsers, updateUser} from '../redux/actions/users'
import {logout} from "../redux/actions/auth";
import axios from 'axios'



export const UsersList = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const auth = useSelector(state => state.auth.user)
  const users = useSelector(state => state.users.users)
  const dispatch = useDispatch();
  const history = useHistory()
  const [userPicked, setUserPicked] = useState([])
  const [isChecked, setIsChecked] = useState(false)
  const [check, setCheck] = useState(false)
  const [isCheckedArray, setIsCheckedArray] = useState(null)

  const getAll = useCallback(
      () => {
      dispatch(getAllUsers())
    }, []
  )

  const someHandler = () => {
    console.log(isCheckedArray);
  }
  const checkOwnAction = (updateUser) => {
    const bool = auth.userId === updateUser._id
    if (bool) {
      dispatch(logout())
      history.push('/')
    }
  }

  const putHandler = (e , action) => {
    if(!isCheckedArray) {
      return
    }
    const updatedUser = isCheckedArray
    if (action === 'block') {
      updatedUser.status = false
      dispatch(updateUser(updatedUser))
      // setDisabled(true)
      setIsCheckedArray(null)
    }
    if (action === 'unblock') {
      updatedUser.status = true
      dispatch(updateUser(updatedUser))
      setIsCheckedArray(null)
    }
    if (action === 'delete') {
      // console.log(updatedUser);
      dispatch(deleteUser(updatedUser))
      setIsCheckedArray(null)
    }
    if (action === 'admin') {
      console.log('admin');
      updatedUser.access = 'admin'
      dispatch(updateUser(updatedUser))
      setIsCheckedArray(null)
    }
  }

  const onItemClick = (index, e) => {
    const value = e.target.value
    const checked = e.target.checked
    setCheck(!checked)
    // setDisabled(false)
    const checkedArray = isChecked
    if(checkedArray[index] === true) {
      checkedArray.fill(false)
      checkedArray[index] = false
      setIsChecked(checkedArray)
    } else {
      checkedArray.fill(false)
      checkedArray[index] = true
      setIsChecked(checkedArray)
    }

    const f = userPicked.filter((item)=> {return item._id === value})
    setIsCheckedArray(...f)
  }

  useEffect(() => {
    getAll()
  }, [])

  useEffect(() => {
    setUserPicked(users)
  });

  useEffect(() => {
    const x = new Array(users.length)
    x.fill(false)
    setIsChecked(x)
  // }, [users]);
  }, [users]);

  return (
    <>
      <nav>
        {/*<div className="nav-wrapper cyan lighten-2" style={{ padding: '0 2rem', marginTop: '1rem' }}>*/}
        <div className="nav-wrapper grey" style={{ padding: '0 2rem', borderTop: '1px solid #616161'}}>
          <span className="brand-logo">ADMIN'S Tools</span>
          <ul id="nav-mobile" className="right hide-on-med-and-down df">
            <li>
              <button
                // disabled={disabled}
                onClick={someHandler}
                className="btn waves-effect waves-light red lighten-2 mr-1">User Page</button>
            </li>
            <li>
              <button
                // disabled={disabled}
                onClick={(e)=> {putHandler(e, 'block')}}
                className="btn waves-effect waves-light red lighten-2 mr-1">block</button>
            </li>
            <li>
              <button
                // disabled={disabled}
                onClick={(e)=> {putHandler(e, 'unblock')}}
                className="btn waves-effect waves-light green accent-3 mr-1">unblock</button>
            </li>
            <li>
              <button
                // disabled={disabled}
                onClick={(e)=> {putHandler(e, 'delete')}}
                className="btn waves-effect waves-light red accent-4 mr-1">delete</button>
            </li>
            <li>
              <button
                // disabled={disabled}
                onClick={(e)=> {putHandler(e, 'admin')}}
                className="btn waves-effect waves-light blue lighten-2">appoint admin</button>
            </li>
          </ul>
        </div>
      </nav>

      <table>
        <thead>
        <tr>
          <th>
            {/*<label className="df">*/}
              {/*<input type="checkbox" className="filled-in" onChange={(e)=> {checkedHandler(e)}} />*/}
              {/*<span></span>*/}
            {/*</label>*/}
          </th>
          <th>№</th>
          <th>Name</th>
          <th>Email</th>
          <th>Id</th>
          <th>Role</th>
          {/*<th>Date registration</th>*/}
          {/*<th>Last login</th>*/}
          <th>Status</th>
        </tr>
        </thead>

        <tbody>
        {/*{ users.map((user, index) => {*/}
        { users.map((user, index) => {
          return (
            <tr key={user._id}>
              <td>
                <label className="df-center">
                <input
                  value={user._id}
                  checked={isChecked[index]}
                  // checked={CHECK}
                  onChange={(e)=> {onItemClick(index, e)}}
                  type="checkbox"
                  className="filled-in" />
                <span></span>
                </label>
              </td>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user._id}</td>
              <td>{user.access}</td>
              {/*<td>date</td>*/}
              {/*<td>date</td>*/}
              <td>{user.status ? 'active' : 'blocked'}</td>
            </tr>

          )
        })
        }



            {/*<tr>*/}
              {/*<td>*/}
                {/*/!*<label className="df">*!/*/}
                  {/*/!*<input checked={isChecked[index]} value={user._id} onChange={(e)=> {onItemHintClick(index, e)}} type="checkbox"  className="filled-in" />*!/*/}
                  {/*/!*<span></span>*!/*/}
                {/*/!*</label>*!/*/}
                {/*<label className="df-center">*/}
                  {/*<input type="checkbox" className="filled-in" />*/}
                  {/*<span></span>*/}
                {/*</label>*/}
              {/*</td>*/}
              {/*<td>index</td>*/}
              {/*<td>user</td>*/}
              {/*<td>name</td>*/}
              {/*<td>email</td>*/}
              {/*<td>date</td>*/}
              {/*<td>date</td>*/}
              {/*<td>status</td>*/}
            {/*</tr>*/}
          {/*)*/}
        {/*}) }*/}
        </tbody>
      </table>
    </>
  )
}
