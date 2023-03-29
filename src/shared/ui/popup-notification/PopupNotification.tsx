import React from 'react';

import styles from './PopupNotification.module.scss';

type PopupNotificationProps = {
  type: 'success' | 'error';
  message: string;
  unmountMe: () => void;
};

const PopupNotification: React.FC<PopupNotificationProps> = ({
  type,
  message,
  unmountMe,
}) => {
  React.useEffect(() => {
    setTimeout(() => {
      unmountMe();
    }, 3000);
  }, [unmountMe]);

  return <div className={`${styles.popup} ${styles[type]}`}>{message}</div>;
};

export default PopupNotification;
