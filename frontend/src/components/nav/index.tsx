import React from 'react';
import { Link } from 'gatsby';
import logo from '../../assets/images/logo.png';
import * as styles from './styles.module.scss';

const Nav = () => (
  <nav className={styles.nav}>
    <img src={logo} alt='logo' />
    <div className={styles.navItem}>
      <Link to='/' activeClassName={styles.active}>
        Home
      </Link>
      <Link activeClassName={styles.active} to='/about'>
        About
      </Link>
      <Link activeClassName={styles.active} to='/services'>
        Services
      </Link>
      <Link activeClassName={styles.active} to='/projects'>
        Projects
      </Link>
      <Link activeClassName={styles.active} to='/teams'>
        Teams
      </Link>
      <Link activeClassName={styles.active} to='/blog'>
        Blog
      </Link>
      <Link activeClassName={styles.active} to='/contact'>
        Contact
      </Link>
    </div>
  </nav>
);

export default Nav;
