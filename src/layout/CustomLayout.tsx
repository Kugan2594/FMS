import { Layout, Menu } from "antd";
import SubModule from "../components/organisms/SubModule/item";
import SideBar from "../components/organisms/SideBar/SideBar";
import "./CustomLayout.style.less";
import CardSmall from "../components/organisms/Cards/CardSmall";
import CardLarge from "../components/organisms/Cards/CardLarge";
import MasterHeader from "../components/organisms/MasterHeader/MasterHeader";

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
                        <MasterHeader />
                        <CardLarge
                            name={"Insurance"}
                            provider={"Provider"}
                            progressData={40}
                            vehicleNo={"NP CAR 5245"}
                            vehicleModel={"TOYOTA aqua"}
                            branchName={"Jaffna Branch"}
                            dueDate={"23 Mar 2022"}
                            cardOnClick={() => console.log("Card")}
                            updateButton={() => console.log("Update")}
                            deleteButton={() => console.log("Delete")}
                        />

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
