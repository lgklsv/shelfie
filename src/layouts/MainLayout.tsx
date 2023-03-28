import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from 'widgets/footer';
import Header from '../components/Header/Header';
import styles from './MainLayout.module.scss';

class MainLayout extends React.Component {
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

export default MainLayout;
