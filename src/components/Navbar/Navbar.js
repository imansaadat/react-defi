import React, { useState } from "react";
import Button from "../Button/Button";
import {VscThreeBars} from 'react-icons/vsc'
import {VscClose} from 'react-icons/vsc'
import NavLinks from './NavLinks'
import './Navbar.css'
const Navbar = () => {
  const Links = [
    {
      name: "Platform",
      path: "platform",
    },
    {
      name: "Developers",
      path: "developers",
    },
    {
      name: "Community",
      path: "subscribe",
    },
    {
      name: "About",
      path: "about",
    },
  ];
  const [open, setOpen] = useState(false);

  const handelMenu = () => {
    setOpen(!open);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header_content">
          <h1 className="logo_name">Defi</h1>
          <nav className={open ? "navbar active" : "navbar"}>
            <ul className="nav_lists">
              {Links.map((item, index) => (
                <NavLinks item={item} key={index} handelMenu={handelMenu} />
              ))}
            </ul>
            <Button text="Use Defi" BtnType="btn" />
          </nav>
          <div className="hamMenu" onClick={handelMenu}>
            {open ? (
              <VscClose className="icon" />
            ) : (
              <VscThreeBars className="icon" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
