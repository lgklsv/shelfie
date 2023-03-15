import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import Logo from '../../assets/icons/logo';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <div className="container">
          <div className={styles.header__content}>
            <Link to="/">
              <div className={styles.header__logo}>
                <Logo />
                <h1>Shelfie</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
