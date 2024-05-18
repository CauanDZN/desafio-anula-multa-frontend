import React from 'react';
import Icon from './Icon';
import classes from './Button.module.css';

const Button = ({ children, onClick, icon }) => (
  <button className={classes.button} onClick={onClick}>
    {!!icon && <Icon name={icon} />}
    <span className={classes.label}>{children}</span>
  </button>
);

export default Button;
