import React from 'react';

import NotFoundBlock from '../components/NotFoundBlock/NotFoundBlock';

type NotFoundProps = {
  title: string;
};

class NotFound extends React.Component<NotFoundProps> {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return <NotFoundBlock />;
  }
}

export default NotFound;
