import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from '@assets/gablogo.png';
import underline from "@assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "@assets/menu_open.svg";
import menu_close from "@assets/menu_close.svg";

function Navbar() {
  const [menu, setMenu] = useState("home");
  
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  };
  
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  };

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef}  className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          className="nav-mob-close"
          alt=""
        />
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#portfolio">
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
