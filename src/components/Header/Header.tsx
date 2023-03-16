import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import LogoIcon from '../../assets/icons/LogoIcon';
import styles from './Header.module.scss';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <div className="container">
          <div className={styles.header__content}>
            <Link to="/">
              <div className={styles.header__logo}>
                <LogoIcon />
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
