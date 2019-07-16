import React from 'react';
import { Layout, Menu } from 'antd';

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
    console.log('mainlayout   ',this.props.children)
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
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
              {/* {JSON.stringify(this.props)} */}
              {this.props.children}
            </div>
          </Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;