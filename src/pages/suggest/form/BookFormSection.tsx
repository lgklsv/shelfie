import React from 'react';

import { notificationSlice } from 'features/notification/popup';
import { Notification } from 'features/notification';
import { SuggestBook } from 'features/suggest-book';
import { useSelector } from 'react-redux';
import styles from './BookFormSection.module.scss';

const BookFormSection: React.FC = () => {
  const { isVisible, type, message } = useSelector(
    notificationSlice.selectNotification
  ).notification;

  return (
    <section className="container">
      <div className={styles.form_container}>
        <SuggestBook.Form />
      </div>
      {isVisible && <Notification.Popup type={type} message={message} />}
    </section>
  );
};

export default BookFormSection;
