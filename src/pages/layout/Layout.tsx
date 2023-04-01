import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import styles from './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
