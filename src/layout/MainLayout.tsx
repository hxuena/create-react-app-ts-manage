import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route, Link } from 'react-router-dom'

const { Header, Sider, Content, Footer } = Layout;

class MainLayout extends React.Component {
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
          <Link to="/">
            <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}>
             <Icon type="sketch" />
            </div>
          </Link>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/manage">
                <Icon type="pie-chart" />
                <span>manage</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/statistic">
                <Icon type="user" />
                <span>statistic</span>
              </Link>
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
                  key={route.key}
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
export default MainLayout;