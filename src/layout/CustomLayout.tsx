import { Layout, Menu } from "antd";
import SubModule from "../components/organisms/SubModule/item";
import SideBar from "../components/organisms/SideBar/SideBar";
import "./CustomLayout.style.less";
import CardLarge from "../components/organisms/Cards/CardLarge";
import MasterHeader from "../components/organisms/MasterHeader/MasterHeader";
import MasterTemplateWithLargeCard from "../templates/MasterTemplateWithLargeCard";

const { Content, Footer } = Layout;

const data = [
  { id: "1", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022"},
  { id: "2", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "3", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "4", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "5", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "6", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "7", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "8", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "9", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "10", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "11", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "12", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "13", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "14", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "15", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "16", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "17", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "18", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "19", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "20", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "21", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "22", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "23", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "24", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "25", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "26", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "27", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "28", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "29", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "30", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "31", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "32", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "33", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "34", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "35", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "36", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "37", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "38", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "39", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "40", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "41", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "42", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "43", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "44", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "45", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "46", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "47", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "48", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "49", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "50", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "51", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "52", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "53", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "54", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "55", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "56", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "57", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "58", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "59", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "60", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "61", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "62", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "63", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "64", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "65", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "66", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "67", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
  { id: "68", name : "Insurance", progressData : 40, vehicleNo : "NP CAR 5245", vehicleModel : "TOYOTA aqua", branchName: "Jaffna Branch", dueDate: "23 Mar 2022" },
];

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
            <MasterTemplateWithLargeCard
              data={data}
              dataCount={data.length}
              headerOnSearch={() => console.log("SEARCHED")}
              headerOnClickAdd={() => console.log("ADDED")}
              cardOnClick={(id: string) => console.log("CLICKED " + id)}
              deleteButton={(id: string) => console.log("DELETED " + id)}
              updateButton={(id: string) => console.log("UPDATED " + id)}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
