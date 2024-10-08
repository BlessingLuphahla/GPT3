import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { FaRobot } from 'react-icons/fa'


function Menu() {
  return (
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">what is gpt3</a></p>
      <p><a href="#possibility">Open AI</a></p>
      <p><a href="#features">case studies</a></p>
      <p><a href="#blog">Library</a></p>
    </>
  )
}


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <FaRobot color='white' size={46} />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign In</p>
          <button type='button'>Sign Up</button>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? <RiCloseLine color='#fff' size={37} onClick={() => setToggleMenu(false)} /> : <RiMenu3Line color='#fff' size={37} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu-container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
