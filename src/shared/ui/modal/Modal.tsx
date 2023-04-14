import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

import Backdrop from '../backdrop/Backdrop';
import styles from './Modal.module.scss';

type ModalProps = {
  children: React.ReactNode;
  toggle: () => void;
};

const popup = {
  hidden: {
    scale: 0.4,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
};

const Modal: React.FC<ModalProps> = ({ children, toggle }) => {
  return ReactDOM.createPortal(
    <Backdrop onClick={toggle}>
      <motion.div
        data-testid="modal"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        className={styles.modal}
        variants={popup}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
        <div onClick={toggle} className={styles.modal__close}>
          ╳
        </div>
      </motion.div>
    </Backdrop>,
    document.getElementById('portal') as HTMLElement
  );
};

export default Modal;
