import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.notFound}>
        <h2 className={styles.notFound__errorCode}>404</h2>
        <p className={styles.notFound__message}>
          Looks like this page does not exist 😢
        </p>
        <Link className="btn btn-primary" to="/">
          go home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundBlock;
