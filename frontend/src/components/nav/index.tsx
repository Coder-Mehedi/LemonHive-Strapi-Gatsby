import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import logo from '../../assets/images/logo.png';
import * as styles from './styles.module.scss';

const Nav = () => (
  <StaticQuery
    query={graphql`
      query {
        strapiGlobal {
          siteName
        }
        allStrapiCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}
    render={(data) => (
      <nav className={styles.nav}>
        <div>
          <img src={logo} />
        </div>
        <div className={styles.navItem}>
          <Link to='/' activeClassName={styles.active}>
            Home
          </Link>
          <Link to='/about'>About</Link>
          <Link to='/services'>Services</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/teams'>Teams</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </nav>
    )}
  />
);

export default Nav;
