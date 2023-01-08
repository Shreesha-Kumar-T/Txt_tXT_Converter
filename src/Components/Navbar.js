import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {//props-->properties; basically contains title and aboutText
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.modeset} bg-blue`}>
      <div className="container-fluid" style={props.mystyle}>
        <a className="navbar-brand" href="/"style={props.mystyle}>{props.title}</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/" style={props.mystyle}>{props.aboutText}</a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changemystyle}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.butntxt}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "This will be printed if nothing is there/otherthan string is passed as in",
  aboutText: "This will be printed if nothing is there"
}