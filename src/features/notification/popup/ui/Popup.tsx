import React from 'react';
import { useDispatch } from 'react-redux';

import { emitNotification } from '../model';
import styles from './Popup.module.scss';

type PopupProps = {
  type: 'success' | 'error';
  message: string;
};

const Popup: React.FC<PopupProps> = ({ type, message }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(
        emitNotification({
          isVisible: false,
          type: 'error',
          message: '',
        })
      );
    }, 3000);
    return () => {
      if (type === 'error') {
        dispatch(
          emitNotification({
            isVisible: false,
            type: 'error',
            message: '',
          })
        );
        clearTimeout(timer);
      }
    };
  }, [dispatch, type]);

  return (
    <div data-testid="popup" className={`${styles.popup} ${styles[type]}`}>
      {message}
    </div>
  );
};

export default Popup;
