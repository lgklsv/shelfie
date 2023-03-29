import React from 'react';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className="container container_sm">
        <div className={styles.hero__content}>
          <h2 className={styles.hero__heading}>Suggest book</h2>
          <p className={styles.hero__message}>
            Our library may not have all the books you need, so you can suggest
            some and we will try to find them for you !
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
