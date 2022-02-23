import React, { useState } from 'react'
import {VscThreeBars} from 'react-icons/vsc'
import {VscClose} from 'react-icons/vsc'
import './Navbar.css'
const Navbar = () => {
  const [open,setOpen] = useState(false)

  const handelMenu = ()=>{
    setOpen(!open)
  }
  return (
    <header className='header'>
      <div className='container'>
        <div className='header_content'>
          <h1 className='logo_name'>Defi</h1>
          <nav className={open ? 'navbar active' : 'navbar'}>
            <ul className='nav_lists'>
              <li className='list_item'><a href="/">Platform</a></li>
              <li className='list_item'><a href="/">Developers</a></li>
              <li className='list_item'><a href="/">Community</a></li>
              <li className='list_item'><a href="/">About</a></li>
              <li className='list_item'><a href="/" className='btn'>Use Defi</a></li>
            </ul>
          </nav>
          <div className='hamMenu' onClick={handelMenu}>
              {open ? (<VscClose className='icon'/>):( <VscThreeBars className='icon'/>)}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar