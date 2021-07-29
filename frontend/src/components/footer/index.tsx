import React from 'react';
import * as styles from './styles.module.scss';
import logo from '../../assets/images/logo.png';
import { Link } from 'gatsby';

const Footer = () => {
  const links = [
    'Case studies',
    'Services',
    'infrastructure',
    'support',
    'our approach',
    'capabilities',
  ];
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footerContent}>
          <div className='logoAndDescription'>
            <img src={logo} alt='logo' />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              ac nunc venenatis interdum purus senectus. Etiam non neque
              pellentesque donec nunc. Porttitor tincidun...
            </p>
          </div>
          <div className={styles.links}>
            {links.map((link) => (
              <Link to='/'>{link}</Link>
            ))}
            {links.map((link) => (
              <Link to='/'>{link}</Link>
            ))}
            {links.map((link) => (
              <Link to='/'>{link}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
