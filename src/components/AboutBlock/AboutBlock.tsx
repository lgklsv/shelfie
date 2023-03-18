import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import About from './About.mdx';

import styles from './AboutBlock.module.scss';

class AboutBlock extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={styles.about}>
          <MDXProvider>
            <About />
          </MDXProvider>
        </div>
      </div>
    );
  }
}

export default AboutBlock;
