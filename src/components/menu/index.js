import React, { useState } from 'react';

/** Router */
import { Link } from 'react-router-dom';

/** Ant design */
import { Menu as AntdMenu } from 'antd';

/** Styles */
import './index.css';

/** Paths */
import PATHS from '../../paths';

const { Item } = AntdMenu;

const Menu = () => {
  const [currentKey, setCurrentKey] = useState('home');

  const handleSelectItem = ({ key }) => setCurrentKey(key);

  return (
    <div className="menu-wrapper">
      <AntdMenu
        mode="vertical-left"
        selectedKeys={[currentKey]}
        onClick={handleSelectItem}
      >
        <Item key="home">
          <Link to={PATHS.home}>Home</Link>
        </Item>
        <Item key="heroes">
          <Link to={PATHS.heroes}>Heroes</Link>
        </Item>
        <Item key="statistics">
          <Link to={PATHS.stats}>Statistics</Link>
        </Item>
        <Item key="history">
          <Link to={PATHS.localHistory}>Your local history</Link>
        </Item>
      </AntdMenu>
    </div>
  );
};

export default Menu;
