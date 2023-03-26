import React from 'react';

import NavItems from '../NavItems/NavItems';
import styles from './HamburgerNav.module.scss';

type HamburgerNavState = {
  isOpen: boolean;
};

class HamburgerNav extends React.Component<
  Record<string, never>,
  HamburgerNavState
> {
  constructor(props: never) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleHamburgerNav = () => {
    this.setState((prevState: HamburgerNavState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <nav data-testid="hamburger-nav" className={styles.navbar_hamburger}>
        <ul
          onClick={this.toggleHamburgerNav}
          className={`${styles.navbar__list_hamburger} ${
            this.state.isOpen ? `${styles.active}` : `${styles.inactive}`
          }`}
        >
          <NavItems />
        </ul>
        <div
          className={
            this.state.isOpen
              ? `${styles.hamburger} ${styles.active}`
              : styles.hamburger
          }
          onClick={this.toggleHamburgerNav}
        >
          <div className={styles.hamburger__line} id={styles.bar1} />
          <div className={styles.hamburger__line} id={styles.bar2} />
          <div className={styles.hamburger__line} id={styles.bar3} />
        </div>
      </nav>
    );
  }
}

export default HamburgerNav;
