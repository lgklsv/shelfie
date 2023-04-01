import React from 'react';

import { PopupContext } from '../model/popup-context';
import styles from './Popup.module.scss';

type PopupProps = {
  type: 'success' | 'error';
  message: string;
};

const Popup: React.FC<PopupProps> = ({ type, message }) => {
  const popupCtx = React.useContext(PopupContext);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      popupCtx.emitPopup({
        isVisible: false,
        type: 'error',
        message: '',
      });
    }, 3000);
    return () => {
      if (type === 'error') {
        popupCtx.emitPopup({
          isVisible: false,
          type: 'error',
          message: '',
        });
        clearTimeout(timer);
      }
    };
  }, [popupCtx, type]);

  return (
    <div data-testid="popup" className={`${styles.popup} ${styles[type]}`}>
      {message}
    </div>
  );
};

export default Popup;
