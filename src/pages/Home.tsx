import React from 'react';

type HomeProps = {
  title: string;
};

class Home extends React.Component<HomeProps> {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

export default Home;
