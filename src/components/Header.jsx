// Header.jsx
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Icon from './Icon';
import Button from './Button';
import classes from './Header.module.css';
import Menu, { MenuItem } from './Menu';
import GoogleLogo from '../assets/google-black.png';
import EmailLogo from '../assets/envelope-black.png';

export default function Header() {
  const renderMenuButton = useCallback(
    (onClick) => (
      <Button icon="account_circle" onClick={onClick}>
        Login
      </Button>
    ),
    []
  );

  const loginWithGoogle = useCallback(() => console.log('Google'), []);

  return (
    <header className={classes.container}>
      <div className={classes.content}>
        <Logo />
        <ul className={classes.nav}>
          <li>
            <Link to="/report">
              <Button icon="insert_chart_outlined">Análise</Button>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <Button icon="settings">Configurações</Button>
            </Link>
          </li>
          <li>
            <Menu menuButton={renderMenuButton}>
              <MenuItem src={GoogleLogo} onClick={loginWithGoogle}>
                Login with Google
              </MenuItem>
              <Link to="/login">
                <MenuItem src={EmailLogo}>Login with Email</MenuItem>
              </Link>
            </Menu>
          </li>
        </ul>
      </div>
    </header>
  );
}
