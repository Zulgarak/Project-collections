import React from 'react'
// import {NavLink} from 'react-router-dom'


export const Footer = () => {

  return (
    <footer className="teal lighten-2 footer">
      <div className="container row" style={{ marginBottom: '0px' }}>
        <div className="col s6 valign-wrapper">
          <span>Designed for <a href="https://itransition.by"
                                target="_blank"
                                className="purple-link"
          >Itransition</a></span>
        </div>
        <div className="col s6 right-align">
          <span>Created by <a href="https://github.com/Zulgarak"
                              target="_blank"
                              className="purple-link"
          >NNF</a></span>
        </div>

      </div>
    </footer>
  )
}