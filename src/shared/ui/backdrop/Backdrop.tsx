import React from 'react';
import { motion } from 'framer-motion';

import styles from './Backdrop.module.scss';

type BackdropProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <motion.div
      data-testid="backdrop"
      className={styles.backdrop}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
