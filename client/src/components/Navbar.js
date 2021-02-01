import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../redux/actions/auth'
import {Link} from 'react-router-dom'


export const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const logoutHandler = event => {
    event.preventDefault()
    dispatch(logout())
  }

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     console.log('sdkhsadlhaslkjhdsaljhdlksajhd')
  //   }
  // }, [isAuthenticated])

  return (
    <nav className="teal lighten-2">
      <div className="nav-wrapper container">
        <span className="brand-logo">LOGO</span>
        <ul id="nav-mobile" className="right">
          {isAuthenticated &&
            <>
          <li><Link to="/collections/create">Create collection</Link></li>
          <li><Link to="/" onClick={logoutHandler}>Exit</Link></li>
            </>
          }
        </ul>
      </div>
    </nav>
  )
}
