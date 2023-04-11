import React from 'react';

import { Searchbar } from 'features/searchbar';
import Cutout from './Cutout.asset';
import styles from './WelcomeSection.module.scss';

const WelcomeSection: React.FC = () => {
  return (
    <section className={styles.welcome}>
      <div className="container">
        <div className={styles.welcome__content}>
          <h2 className={styles.welcome__heading}>
            What book are you looking for ?
          </h2>
          <Searchbar.Search />
        </div>
      </div>
      <div className={styles.welcome__cutout}>
        <Cutout />
      </div>
    </section>
  );
};

export default WelcomeSection;
