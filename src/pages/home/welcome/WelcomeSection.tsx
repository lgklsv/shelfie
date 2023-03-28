import React from 'react';

// Search is a feature
import Search from 'components/Search/Search';

import Cutout from './Cutout.asset';
import styles from './WelcomeSection.module.scss';

class WelcomeSection extends React.Component {
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

export default WelcomeSection;
