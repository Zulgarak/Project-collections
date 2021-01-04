import React from 'react'
// import {NavLink} from 'react-router-dom'


export const Navbar = () => {

  return (
    <nav className="teal lighten-2">
      <div className="nav-wrapper container">
        <span className="brand-logo">LOGO</span>
        <ul id="nav-mobile" className="right">
          {/*<li><NavLink to="/users">Users</NavLink></li>*/}
          <li><a href="/">Exit</a></li>
        </ul>
      </div>
    </nav>
  )
}