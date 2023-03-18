import React from 'react';
import AboutBlock from '../components/AboutBlock/AboutBlock';

type AboutProps = {
  title: string;
};

class About extends React.Component<AboutProps> {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return <AboutBlock />;
  }
}

export default About;
