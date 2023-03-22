import React from 'react';
import styles from './HeroSection.module.scss';

type HeroSectionProps = {
  size: string;
};

class HeroSection extends React.Component<HeroSectionProps> {
  render() {
    return (
      <section className={styles.hero}>
        <div className={`container container_${this.props.size}`}>
          <div className={styles.hero__content}>
            <h2 className={styles.hero__heading}>Suggest book</h2>
            <p className={styles.hero__message}>
              Our library may not have all the books you need, so you can
              suggest some and we will try to find one for you !
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
