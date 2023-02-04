import React from 'react'
import { Link } from 'react-scroll';

const NavLinks = ({handelMenu}) => {
  const Links = [
    {
      name: 'Platform',
      path: 'platform'
    },
    {
      name: 'Developers',
      path: 'developers'
    },
    {
      name: 'Community',
      path: 'subscribe'
    },
    {
      name: 'About',
      path: 'about'
    }
  ]
  return (
    <>
      {
        Links.map((link, index) => (
          <li key={index} className='list_item'>
            <Link to={link.path} smooth={true} duration={500} onClick={handelMenu}>
              {link.name}
            </Link>
          </li>
        ))
      }
    </>
  )
}

export default NavLinks
