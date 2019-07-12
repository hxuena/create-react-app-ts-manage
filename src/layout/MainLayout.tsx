import React from 'react';
import { Link  } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content, Footer } = Layout;

const SubMenu = Menu.SubMenu
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Dashboard</span>
            </Menu.Item>
              <SubMenu
                key="sub1"
                title={<span><Icon type="dashboard" /><span>系统管理</span></span>}
              >
                <Menu.Item key="2">
                  <Link to="/statistic" >
                    分析页
                  </Link></Menu.Item>
                <Menu.Item key="3">监控页</Menu.Item>
                <Menu.Item key="4">工作台</Menu.Item>
              </SubMenu>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{height: '100vh'}}>
          <Header style={{ background: '#fff', padding: '0 24px' }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            Content
          </Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;