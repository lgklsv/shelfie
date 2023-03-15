import React from 'react';
import { Link } from 'react-router-dom';

type NotFoundProps = {
  title: string;
};

class NotFound extends React.Component<NotFoundProps> {
  componentDidMount() {
    document.title = this.props.title;
  }

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
