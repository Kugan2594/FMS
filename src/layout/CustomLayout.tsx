import { Layout } from "antd";
import SideBar from "../components/organisms/SideBar/SideBar";
import "./CustomLayout.style.less";
import { useRoutes } from "react-router-dom";
import routes from "../router/PrivateRoutes";

const { Content } = Layout;

export default function CustomLayout() {
    const privatecontent = useRoutes(routes);

    return (
        <Layout>
            <div>
                <SideBar />
            </div>
            <Layout>
                <Content>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: "20px",
                            minHeight: "100vh",
                            maxHeight: "100vh",
                        }}
                    >
                        {privatecontent}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
