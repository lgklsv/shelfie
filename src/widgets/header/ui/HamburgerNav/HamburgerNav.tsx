import React from 'react';

import { NavItems } from '../NavItems';
import styles from './HamburgerNav.module.scss';

const HamburgerNav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleHamburgerNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav data-testid="hamburger-nav" className={styles.navbar_hamburger}>
      <ul
        onClick={toggleHamburgerNav}
        className={`${styles.navbar__list_hamburger} ${
          isOpen ? `${styles.active}` : `${styles.inactive}`
        }`}
      >
        <NavItems />
      </ul>
      <div
        className={
          isOpen ? `${styles.hamburger} ${styles.active}` : styles.hamburger
        }
        onClick={toggleHamburgerNav}
      >
        <div className={styles.hamburger__line} id={styles.bar1} />
        <div className={styles.hamburger__line} id={styles.bar2} />
        <div className={styles.hamburger__line} id={styles.bar3} />
      </div>
    </nav>
  );
};

export default HamburgerNav;
