import React from "react";
import Wrapper from '../Wrapper/Wrapper'
import './Header.css'

function Header() {
  return (
    <>
      <header className="header">
        <a href="#s" className="logo">Lingo Master</a>
        {/*<input className="menu-btn" type="checkbox" id="menu-btn" />*/}
        {/*<label className="menu-icon" htmlFor={'menu-btn'}>*/}
        {/*  <span className="navicon"></span>*/}
        {/*</label>*/}
        <div className="block__menu">
        <ul className="menu">
          <li><a href="#header">Home</a> </li>
          <li><a href="#teachers">Teachers</a></li>
          <li><a href="#students">Students</a></li>
          <li><a href="#footer">Footer</a> </li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#results">Results</a></li>
        </ul>
        </div>
      </header>

      <Wrapper />
    </>
  );
}

export default Header;
