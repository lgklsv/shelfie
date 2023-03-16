import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HamburgerNav.module.scss';

type HamburgerNavState = {
  isOpen: boolean;
};

class HamburgerNav extends React.Component {
  readonly state: HamburgerNavState = {
    isOpen: false,
  };

  toggleHamburgerNav = () => {
    this.setState((prevState: HamburgerNavState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <nav className={styles.navbar_hamburger}>
        <ul
          onClick={this.toggleHamburgerNav}
          className={`${styles.navbar__list_hamburger} ${
            this.state.isOpen ? `${styles.active}` : `${styles.inactive}`
          }`}
        >
          <li>
            <Link to="/" className="btn btn-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="btn btn-secondary">
              About us
            </Link>
          </li>
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
