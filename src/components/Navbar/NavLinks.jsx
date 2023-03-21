import React from "react";
import { Link } from "react-scroll";

const NavLinks = ({ item: {name,path},handelMenu}) => {
  return (
    <li className='list_item'>
      <Link to={path} smooth={true} duration={500} onClick={handelMenu}>{name}</Link>
    </li>
  );
};

export default NavLinks;
