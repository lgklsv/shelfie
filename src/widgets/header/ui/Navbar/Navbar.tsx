import React from 'react';

import { NavItems } from '../NavItems';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <NavItems />
      </ul>
    </nav>
  );
};

export default Navbar;
