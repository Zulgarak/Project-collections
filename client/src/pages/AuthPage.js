import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory, Link} from 'react-router-dom'
import {register, setCurrentUser} from "../redux/actions/auth";
import axios from 'axios'



export const AuthPage = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const isUser = useSelector(state => state.auth.user)
  const history = useHistory()


  const [form, setForm] = useState({
    email: '', password: '', name: ''
  })

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/')
    }
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(register({ ...form }, history))
  }

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
    console.log(form);
  }

  return (
    <div className="row">
      <div className="col m6 xl4 s12 offset-m3 offset-xl4">
        <div className="card grey lighten-3 mt-4">
          <div className="card-content black-text">
            <a className="card-title">Sign Up</a>
            <div className="input-field">
              <input
                id="name"
                name ="name"
                type="text"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="name">Name</label>
            </div>

            <div className="input-field">
              <input
                id="email"
                name ="email"
                type="text"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input
                id="password"
                name="password"
                type="password"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="card-action card-action-container">
            <button type="submit" onClick={onSubmit} className="btn teal lighten-2 waves-effect">Sign Up</button>
            <Link to='/login'>Have an account?</Link>
          </div>
        </div>
      </div>
    </div>

  )
}
