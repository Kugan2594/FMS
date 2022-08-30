import { Layout, Menu } from "antd";
import SubModule from "../components/organisms/SubModule/item";
import SideBar from "../components/organisms/SideBar/SideBar";
import "./CustomLayout.style.less";

const { Content, Footer } = Layout;

export default function CustomLayout() {
    return (
        <Layout>
            <div className="sidebar">
            <SideBar />
            </div>
            

            <Layout>
                {/* <CustomHeader /> */}
                <Content>
                    <div
                        className="site-layout-background"
                        style={{padding: "20px 20px 20px 0", minHeight: 400}}
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
