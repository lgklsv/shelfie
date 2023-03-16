import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

class Navbar extends React.Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <ul className={styles.navbar__list}>
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
      </nav>
    );
  }
}

export default Navbar;
