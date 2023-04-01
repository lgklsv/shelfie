import React from 'react';

import { PopupContext } from 'features/notification/popup';
import { Notification } from 'features/notification';
import { SuggestBook } from 'features/suggest-book';
import styles from './BookFormSection.module.scss';

const BookFormSection: React.FC = () => {
  const popupCtx = React.useContext(PopupContext);

  return (
    <section className="container">
      <div className={styles.form_container}>
        <SuggestBook.Form />
      </div>
      {popupCtx.popup.isVisible && (
        <Notification.Popup
          type={popupCtx.popup.type}
          message={popupCtx.popup.message}
        />
      )}
    </section>
  );
};

export default BookFormSection;
