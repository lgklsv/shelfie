import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import Navbar from './components/Navbar/Navbar';
import Logo from '../../assets/icons/Logo';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <div className="container">
          <div className={styles.header__content}>
            <Link to="/">
              <div className={styles.header__logo}>
                <Logo />
                <h1 className={styles.header__title}>Shelfie</h1>
              </div>
            </Link>
            <Navbar />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
