import React, { Component } from "react";
import { Layout } from "antd";
import Nav from '../../components/nav/index'

const { Header, Content, Footer, Sider } = Layout;

class Login extends Component {
  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0
          }}>
          <Nav></Nav>
          jiemioan
        </Sider>
        <Layout className='site-layout' style={{ marginLeft: 200 }}>
          <Header />
          <Content>
            <div className='site-layout-background'>
              content
            </div>
          </Content>
          <Footer>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Login;
