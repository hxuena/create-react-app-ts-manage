import React from 'react';
import { Menu, Icon } from 'antd';
import { Route, Link } from 'react-router-dom'

const { SubMenu } = Menu;

const MenuCom = () => {
  console.log('Menu render..')
  return <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
    <Menu.Item key="1">
      <Link to="/manage">
        <Icon type="pie-chart" />
        <span>系统管理</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/statistic">
        <Icon type="user" />
        <span>数据报表统计</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/vipConf">
        <Icon type="user" />
        <span>重点应用管理</span>
      </Link>
    </Menu.Item>
  </Menu>
}

export default MenuCom;