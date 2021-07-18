// Librairies
import React from 'react';

// import
import classes from './Header.module.css';
import logo from '../../logo.png';

function Header() {
  return (
    <header className={classes.Header}>
      <img src={logo} alt="logo" />
    </header>
  );
}

export default Header;