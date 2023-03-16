import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  }
}

export default MainLayout;
