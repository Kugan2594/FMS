import { Layout } from "antd";
import SideBar from "../components/organisms/SideBar/SideBar";
import "./CustomLayout.style.less";
import { Outlet } from "react-router-dom";
import ManageDrivers from "../contents/Master/Drivers/ManageDrivers";

const { Content } = Layout;

export default function CustomLayout() {
  return (
    <Layout>
      <div>
        <SideBar />
      </div>
      <Layout>
        <Content>
          <div
            className="site-layout-background"
            style={{ padding: "20px", minHeight: "100vh", maxHeight: "100vh" }}
          >
            <ManageDrivers />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
