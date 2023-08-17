import React from "react";
import logo from '../assets/investment-calculator-logo.png';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
};

export default Header;
