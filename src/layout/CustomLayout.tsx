import { Layout, Menu } from "antd";
import SideBar from "../components/organisms/SideBar/SideBar";
import "./CustomLayout.style.less";

const { Content, Footer } = Layout;

export default function CustomLayout() {
    return (
        <Layout>
            <SideBar />
            <Layout>
                {/* <CustomHeader /> */}
                <Content>
                    <div
                        className="site-layout-background"
                        style={{ padding: 20, minHeight: 600 }}
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
