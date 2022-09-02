import { Layout, Menu } from "antd";
import SubModule from "../components/organisms/SubModule/item";
import SideBar from "../components/organisms/SideBar/SideBar";
import "./CustomLayout.style.less";
import CardLarge from "../components/organisms/Cards/CardLarge";
import MasterHeader from "../components/organisms/MasterHeader/MasterHeader";
import MasterTemplateWithLargeCard from "../templates/MasterTemplateWithLargeCard";

const { Content, Footer } = Layout;

const data = [
  { id: "1", name: "a" },
  { id: "2", name: "b" },
  { id: "3", name: "c" },
  { id: "4", name: "d" },
  { id: "5", name: "e" },
  { id: "6", name: "f" },
  { id: "7", name: "g" },
  { id: "8", name: "a" },
  { id: "9", name: "b" },
  { id: "10", name: "c" },
  { id: "11", name: "d" },
  { id: "12", name: "e" },
  { id: "13", name: "f" },
  { id: "14", name: "g" },
  { id: "15", name: "a" },
  { id: "16", name: "b" },
  { id: "17", name: "c" },
  { id: "18", name: "d" },
  { id: "19", name: "e" },
  { id: "20", name: "f" },
  { id: "21", name: "g" },
  { id: "22", name: "a" },
  { id: "23", name: "b" },
  { id: "24", name: "c" },
  { id: "25", name: "d" },
  { id: "26", name: "e" },
  { id: "27", name: "f" },
  { id: "28", name: "g" },
  { id: "29", name: "a" },
  { id: "30", name: "b" },
  { id: "31", name: "c" },
  { id: "32", name: "d" },
  { id: "33", name: "e" },
  { id: "34", name: "f" },
  { id: "35", name: "g" },
  { id: "36", name: "a" },
  { id: "37", name: "b" },
  { id: "38", name: "c" },
  { id: "39", name: "d" },
  { id: "40", name: "e" },
  { id: "41", name: "f" },
  { id: "42", name: "g" },
  { id: "43", name: "a" },
  { id: "44", name: "b" },
  { id: "45", name: "c" },
  { id: "46", name: "d" },
  { id: "47", name: "e" },
  { id: "48", name: "f" },
  { id: "49", name: "g" },
  { id: "50", name: "a" },
  { id: "51", name: "b" },
  { id: "52", name: "c" },
  { id: "53", name: "d" },
  { id: "54", name: "e" },
  { id: "55", name: "f" },
  { id: "56", name: "g" },
  { id: "57", name: "a" },
  { id: "58", name: "b" },
  { id: "59", name: "c" },
  { id: "60", name: "d" },
  { id: "61", name: "e" },
  { id: "62", name: "f" },
  { id: "63", name: "g" },
  { id: "64", name: "f" },
  { id: "65", name: "g" },
  { id: "66", name: "e" },
  { id: "67", name: "f" },
  { id: "68", name: "g" },
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
            {/* <MasterHeader />
                        <CardLarge
                        name = {"Insurance"}
                        provider ={"Provider"}
                        progressData = {40}
                        vehicleNo = {"NP CAR 5245"}
                        vehicleModel = {"TOYOTA aqua"}
                        branchName = {"Jaffna Branch"}
                        dueDate = {"23 Mar 2022"}
                        cardOnClick = {() => console.log("Card")}
                        updateButton = {() => console.log("Update")}
                        deleteButton = {() => console.log("Delete")}
                        />
                        <Test type="blue" />
                        <Test type="black" />
                        <Test type = "yellow" /> */}

            {/* <CardLarge 
            branchName="Jaffna Branch"
            dueDate="24 Mar 2022"
            id="1"
            key={"1"}
            name= "Insurance"
            progressData={40}
            vehicleModel="TOYOTA aqua"
            vehicleNo="NP CAR 5645"
            /> */}

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
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
}
