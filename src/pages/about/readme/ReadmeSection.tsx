import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Readme from '../assets/Readme.mdx';
import styles from './ReadmeSection.module.scss';

class ReadmeSection extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={styles.about}>
          <MDXProvider>
            <Readme />
          </MDXProvider>
        </div>
      </div>
    );
  }
}

export default ReadmeSection;
