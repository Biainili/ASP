import React from 'react'
import '../styles/styles.css'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
      <div className="container">
        <a href="/" className="navbar-brand">Arm Service Provider</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarId"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarId">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-2">
              <a href="#migarm" className="nav-link">Migration in Armenia</a>
            </li>
            <li className="nav-item px-2">
              <a href="#services" className="nav-link">Services</a>
            </li>
            <li className="nav-item px-2">
              <a href="#contactus" className="nav-link">Contact us</a>
            </li>
            <li className="nav-item px-2">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item px-2">
              <button  className=" bnt_get_start" >Get Start</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header