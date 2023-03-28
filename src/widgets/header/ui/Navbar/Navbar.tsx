import React from 'react';

import { NavItems } from '../NavItems';
import styles from './Navbar.module.scss';

class Navbar extends React.Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <ul className={styles.navbar__list}>
          <NavItems />
        </ul>
      </nav>
    );
  }
}

export default Navbar;
