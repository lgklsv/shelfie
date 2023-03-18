import React from 'react';

import BooksList from '../components/BooksList/BooksList';
import Welcome from '../components/Welcome/Welcome';

type HomeProps = {
  title: string;
};

class Home extends React.Component<HomeProps> {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return (
      <>
        <Welcome />
        <BooksList />
      </>
    );
  }
}

export default Home;
