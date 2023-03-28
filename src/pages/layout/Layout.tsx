import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import styles from './Layout.module.scss';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
}

export default Layout;
