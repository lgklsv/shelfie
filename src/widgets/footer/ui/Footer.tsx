import React from 'react';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div>
          shelfie engineered by{' '}
          <a
            className={styles.footer__link}
            href="https://github.com/lgklsv"
            target="_blank"
            rel="noreferrer"
          >
            lgklsv
          </a>
        </div>
        <div className={styles.footer__copyright}>
          <a
            className={styles.footer__link_rs}
            href="https://rs.school/react/"
            target="_blank"
            rel="noreferrer"
          />
          © 2023 shelfie. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
