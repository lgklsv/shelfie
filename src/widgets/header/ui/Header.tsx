import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from './Navbar';
import { HamburgerNav } from './HamburgerNav';
import LogoIcon from './Logo.icon';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <Link to="/">
            <div className={styles.header__logo}>
              <LogoIcon />
              <h1 className={styles.header__title}>Shelfie</h1>
            </div>
          </Link>
          <Navbar />
          <HamburgerNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
