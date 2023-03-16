import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

const navItems = [
  {
    link: '/',
    text: 'home',
  },
  {
    link: '/about',
    text: 'about us',
  },
];

type NavBarState = {
  active: number;
};

class Navbar extends React.Component {
  readonly state: Readonly<NavBarState> = {
    active: 0,
  };

  componentDidMount() {
    const curPage = navItems.findIndex(
      (el) => el.link === window.location.pathname
    );
    this.setState(() => ({
      active: curPage,
    }));
  }

  onChangePage(i: number) {
    this.setState(() => ({
      active: i,
    }));
  }

  render() {
    return (
      <nav className={styles.navbar}>
        <ul className={styles.navbar__list}>
          {navItems.map((item, i) => {
            return (
              <li key={item.link}>
                <Link
                  to={item.link}
                  onClick={() => this.onChangePage(i)}
                  className={`btn btn-secondary ${
                    this.state.active === i ? styles.active : ''
                  }`}
                >
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
