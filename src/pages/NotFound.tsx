/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <>
        <h1>404 Not Found</h1>
        <Link to="/">GO HOME</Link>
      </>
    );
  }
}

export default NotFound;
