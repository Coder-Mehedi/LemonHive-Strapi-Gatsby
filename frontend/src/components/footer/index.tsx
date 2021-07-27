import React from 'react';
import * as styles from './styles.module.scss';
import logo from '../../assets/images/logo.png';
import { Link } from 'gatsby';

const Footer = () => {
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
            <Link to='/'>Case studies</Link>
            <Link to='/'>Services</Link>
            <Link to='/'>infrastructure</Link>
            <Link to='/'>support</Link>
            <Link to='/'>out approach</Link>
            <Link to='/'>capabilities</Link>
            <Link to='/'>Case studies</Link>
            <Link to='/'>Services</Link>
            <Link to='/'>infrastructure</Link>
            <Link to='/'>support</Link>
            <Link to='/'>out approach</Link>
            <Link to='/'>capabilities</Link>
            <Link to='/'>Case studies</Link>
            <Link to='/'>Services</Link>
            <Link to='/'>infrastructure</Link>
            <Link to='/'>support</Link>
            <Link to='/'>out approach</Link>
            <Link to='/'>capabilities</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
