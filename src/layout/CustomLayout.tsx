import { Layout, Menu } from "antd";
import SubModule from "../components/organisms/SubModule/item";
import SideBar from "../components/organisms/SideBar/SideBar";
import "./CustomLayout.style.less";
import CardSmall from "../components/organisms/Cards/CardSmall";

const { Content, Footer } = Layout;
const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
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
                        style={{ padding: "20px 20px 20px 0", minHeight: 400 }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                flexWrap: "wrap",
                            }}
                        >
                            {cardArray.map(({ post, index }: any) => {
                                return <CardSmall />;
                            })}
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}
