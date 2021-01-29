import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory, Link} from 'react-router-dom'
import {login} from "../redux/actions/auth";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const user = useSelector(state => state.auth.user)
  const history = useHistory()

  const [form, setForm] = useState({
    email: '', password: '', name: ''
  })

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ ...form }, history))
    console.log(user);
  }

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/')
    }
  }, [])

  return (
    <div className="row">
      <div className="col m6 xl4 s12 offset-m3 offset-xl4">
        <div className="card grey lighten-3 mt-4">
          <div className="card-content black-text">
            <a className="card-title">Sign In</a>
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
            <button type="submit" onClick={onSubmit} className="btn teal lighten-2 waves-effect">Sign In</button>
            <Link to='/register'>Need an account?</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

