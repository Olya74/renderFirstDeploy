import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {
    
  return (
    <>
      <nav className="nav">
        <h1>Home Page</h1>
        <ul>
          <li>
            <NavLink to="/">Display</NavLink>
          </li>
          <li>
            <NavLink to="/contact" >Contact</NavLink>
          </li>
            <li>
                <NavLink to="/friends" >Friends</NavLink>
            </li>
        </ul>
      </nav>
        <Outlet />
    </>
  );
}

export default Layout
