import React from 'react';

/** Ant design */
import { PageHeader } from 'antd';

/** Styles */
import './index.css';

/** Components */
import HeaderAvatar from '../header-avatar';

const Header = () => (
  <PageHeader className='header' >
    <HeaderAvatar />
  </PageHeader>
);

export default Header;
