import React from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';

import styles from './Modal.module.scss';

type ModalProps = {
  children: React.ReactNode;
  active: boolean;
  toggle: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, active, toggle }) => {
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div
      data-testid="modal"
      onClick={toggle}
      className={cn(styles.modal, { [styles.active]: active })}
    >
      <div
        onClick={handleContentClick}
        className={cn(styles.modal__content, { [styles.active]: active })}
      >
        {children}
        <div onClick={toggle} className={styles.modal__close}>
          ╳
        </div>
      </div>
    </div>,
    document.getElementById('portal') as HTMLElement
  );
};

export default Modal;
