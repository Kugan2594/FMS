import { Layout, Menu } from "antd";
import React from "react";
import CustomHeader from "../components/organisms/Header/CustomHeader";
import SideBar from "../components/organisms/SideBar/SideBar";
import "./CustomLayout.style.less";
const { Content, Footer } = Layout;

export default function CustomLayout() {
  return (
    <Layout>
      <SideBar />

      <Layout>
        {/* <CustomHeader /> */}
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            content
            {/* <h1  className="contentHeader">
                            test
                        </h1> */}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
