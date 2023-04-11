import React from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';

const Card: React.FC<{
  children: React.ReactNode;
  type: 'transparent' | 'white';
}> = ({ children, type }) => {
  return <div className={cn(styles.card, styles[type])}>{children}</div>;
};

export default Card;
