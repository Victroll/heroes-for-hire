import React from 'react';

/** Router */
import { BrowserRouter, Route } from 'react-router-dom';

/** Ant design */
import { Button } from 'antd';

/** Styles */
import './index.css';

/** Paths */
import PATHS from '../../paths';

/** Components */
import Menu from '../menu';

const Content = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="content-wrapper">
      <div className="left-content">
        <Menu isHidden={false} />
        <div className="links">
          <Button icon="twitter" size="large" />
          <Button icon="github" size="large" />
          <Button icon="linkedin" size="large" />
        </div>
      </div>
      <div className="main-content">
        <Route path={PATHS.home} exact component={() => <p>HOME</p>} />
        <Route path={PATHS.heroes} exact component={() => <p>HEROES</p>} />
        <Route path={PATHS.stats} exact component={() => <p>STATS</p>} />
        <Route
          path={PATHS.localHistory}
          exact
          component={() => <p>HISTORY</p>}
        />
      </div>
    </div>
  </BrowserRouter>
);

export default Content;
