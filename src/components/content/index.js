import React from 'react';

/** Ant design */
import { Button } from 'antd';

/** Styles */
import './index.css';

/** Components */
import Menu from '../menu';

const Content = () => (
  <div className='content-wrapper'>
    <div className='left-content'>
      <Menu isHidden={false} />  
      <div className='links'>
        <Button icon='twitter' size='large' />
        <Button icon='github' size='large' />
        <Button icon='linkedin' size='large' />
      </div>
    </div>
    <div className='main-content'>

    </div>
  </div>
);

export default Content;
