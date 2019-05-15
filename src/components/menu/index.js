import React, { useState } from 'react';

/** Ant design */
import { Menu as AntdMenu } from 'antd';

/** Styles */
import './index.css';

const { Item } = AntdMenu;

const Menu = () => {
  const [currentKey, setCurrentKey] = useState('home');

  const handleSelectItem = ({ key }) => setCurrentKey(key);

  return (
    <div className='menu-wrapper'>
      <AntdMenu mode='vertical-left' selectedKeys={[currentKey]} onClick={handleSelectItem}>
        <Item key='home'>Home</Item>
        <Item key='heroes'>Heroes</Item>
        <Item key='statistics'>Statistics</Item>
        <Item key='history'>Your local history</Item>
      </AntdMenu>
    </div>
  );
};

export default Menu;
