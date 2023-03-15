import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

class Navbar extends React.Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <Link to="/" className="btn btn-secondary">
          Home
        </Link>
        <Link to="/about" className="btn btn-secondary">
          About us
        </Link>
      </nav>
    );
  }
}

export default Navbar;
