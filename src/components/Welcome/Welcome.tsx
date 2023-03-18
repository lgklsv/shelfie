import React from 'react';

import Cutout from '../../assets/icons/Cutout';
import Search from '../Search/Search';
import styles from './Welcome.module.scss';

class Welcome extends React.Component {
  render() {
    return (
      <section className={styles.welcome}>
        <div className="container">
          <div className={styles.welcome__content}>
            <h2 className={styles.welcome__heading}>
              This week you can`t search, but here are some books on React.js ⚛️
            </h2>
            <Search />
          </div>
        </div>
        <div className={styles.welcome__cutout}>
          <Cutout />
        </div>
      </section>
    );
  }
}

export default Welcome;
