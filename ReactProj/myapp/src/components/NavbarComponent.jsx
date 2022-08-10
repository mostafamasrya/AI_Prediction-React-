import React from 'react';
import { Link } from 'react-router-dom'

import './ComponentStatic/navbar.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState, useEffect } from 'react'
function NavbarComponent() {



  return (<>
    <div className="header" id="header">
      <div className="container">
        <Link to="/" className="logo my-1">
          <img src={require(`./ComponentStatic/logo.jpeg`)} alt="Navbar Logo" className="logo border rounded " />
          <p className="mt-3 mx-3">AI Predict</p>
        </Link>
        <ul className="main-nav" id='nav22'>


              <li><Link to="/">Home</Link></li>
           
 

        </ul>
      
      </div>


    </div>

  </>
  )
}
export default NavbarComponent