import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route, Link } from 'react-router-dom'

const { Header, Sider, Content, Footer } = Layout;

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
    const { routes }:any = this.props
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="manage">
            <Icon type="user" />
            <Link to="/manage">管理中信</Link>
          </Menu.Item>
          <Menu.Item key="statistic">
            <Icon type="video-camera" />
            <Link to="/statistic">数据统计中心</Link>
          </Menu.Item>
        </Menu>
        </Sider>
        <Layout style={{height: '100vh'}}>
          <Header style={{ background: '#fff', padding: '0 24px' }}>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {routes.map((route:any, i:number)=> (
               <Route
                path={route.path}
                exact={route.exact}
                component={route.component}
               />
            ))}
            </div>
          </Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;