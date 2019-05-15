import React from 'react';

/** Ant design */
import { Avatar } from 'antd';

/** Styles */
import './index.css';

const HeaderAvatar = () => (
  <div className='header-avatar-wrapper'>
    <Avatar size={64} icon='user' className='avatar' />
    <p>
      <span><b>User:</b> asdf</span>
      <span><b>Company:</b> wfwerf</span>
    </p>
  </div>
);

export default HeaderAvatar;
