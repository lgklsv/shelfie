import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  {
    link: '/',
    text: 'home',
  },
  {
    link: '/about',
    text: 'about us',
  },
];

class NavItems extends React.Component {
  render() {
    return (
      <>
        {navItems.map((item) => {
          return (
            <li key={item.link}>
              <NavLink to={item.link} className="btn btn-secondary">
                {item.text}
              </NavLink>
            </li>
          );
        })}
      </>
    );
  }
}

export default NavItems;
