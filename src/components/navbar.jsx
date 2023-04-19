import '../CSS/animation.css';
import '../CSS/navbar.scss';
import { React, useState } from 'react';
import { Link } from 'react-router-dom';

// @to-do add focus to spans

const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <div class = "navbar">
      <h1> <div id="nav-icon1" className = {open ? 'open': null} onClick = { () => {
        setOpen(!open)}
      }>
        <span/>
        <span/>
        <span/>

        </div>
      </h1>
      <ul id="navs" className = {open ? 'navigation-open': 'navigation-close'}>
        <li><Link to = "/"> Home </Link></li>
        <li><Link to = "/about"> About </Link></li>
        <li><Link to = "/contact"> Contact </Link></li>
        <li><Link to = "/portfolio"> Portfolio </Link></li>
      </ul>
    </div>
  );
};


export default Navbar;