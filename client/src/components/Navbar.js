import React from 'react'
// import {NavLink} from 'react-router-dom'


export const Navbar = () => {

  return (
    <nav>
      <div className="nav-wrapper teal lighten-2" style={{ padding: '0 2rem' }}>
        <span className="brand-logo">LOGO</span>
        <ul id="nav-mobile" className="right">
          {/*<li><NavLink to="/users">Users</NavLink></li>*/}
          <li><a href="/">Exit</a></li>
        </ul>
      </div>
    </nav>
  )
}