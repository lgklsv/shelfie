import React from 'react';

import styles from './PopupNotification.module.scss';

type PopupNotificationProps = {
  type: 'success' | 'error';
  message: string;
  unmountMe: () => void;
};

class PopupNotification extends React.Component<PopupNotificationProps> {
  constructor(props: PopupNotificationProps) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.unmountMe();
    }, 3000);
  }

  render() {
    return (
      <div className={`${styles.popup} ${styles[this.props.type]}`}>
        {this.props.message}
      </div>
    );
  }
}

export default PopupNotification;
