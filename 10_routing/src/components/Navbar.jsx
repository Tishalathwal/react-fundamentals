import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Home from './Home'
import './Navbar.css'
function Navbar() {
  return (

    <div>
      <ul>
        <li>
            <NavLink 
            to = '/' 
            className={({isActive})=>isActive?"active-link":""}>Home</NavLink>
        </li>
        <li>
            <NavLink 
            to = '/about' 
            className={({isActive})=>isActive?"active-link":""}>About</NavLink>
        </li>
        <li>
            <NavLink 
            to = '/contact' 
            className={({isActive})=>isActive?"active-link":""}>Contact</NavLink>
        </li>
      </ul>
    </div>


    /*
    <div>
      <ul>
        <li>
            <Link to = '/'>Home</Link>
        </li>
        <li>
            <Link to = '/about'>About</Link>
        </li>
        <li>
            <Link to = '/contact'>Contact</Link>
        </li>
      </ul>
    </div>
    */
  )
}

export default Navbar
