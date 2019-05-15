import React, { Fragment } from 'react';

/** Ant design */
import '../node_modules/antd/dist/antd.css';

/** Components */
import Header from './components/header';
import Content from './components/content';

const App = () => (
  <Fragment>
    <Header />
    <Content />
  </Fragment>
);

export default App;
