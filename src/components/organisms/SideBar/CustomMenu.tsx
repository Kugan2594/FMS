import { Menu } from "antd";
import React, { useState } from "react";
import SubModule from "../SubModule/item";
import mainMenuItems from "./items";

const data = ["DashBoard", "Stats", "Branch1", "Branch2", "Los Angeles"];



function CustomMenu() {

    const [submenuItems,setSubmenuItems] = useState([]);

    const homeItems: any = [{id:"1", name:"a"},{id:"2", name:"b"},{id:"3", name:"c"},{id:"4", name:"d"},];
    
    const home: any = [{id: "allVehicles", name: "All Vehicles"},...homeItems];
    

    const ClickHandler = (item: any) => {
        if(item.id === "home") {
            console.log("This is home");
            setSubmenuItems(home);
        } else {
            setSubmenuItems(item.children);
        }
        console.log(submenuItems);
    };

    return (
      <div className="sidebar-menu">
        <Menu
        className="sidebar-mainmenu"
            theme="light"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={mainMenuItems.map((item) => ({
                key: item.id,
                icon: React.createElement(item.icon),
                onClick: () => ClickHandler(item),
            }))}
        />
        <SubModule data={submenuItems} />
        </div>
    );
}

export default CustomMenu;
