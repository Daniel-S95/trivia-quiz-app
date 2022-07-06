import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles['header-container']}>
      <Link to="/">
        <img src="images/logo.png" alt="Quiz App" className={styles['logo-img']} />
      </Link>
    </div>
  );
};

export default Header;
