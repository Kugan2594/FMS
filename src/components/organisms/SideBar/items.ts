import React from "react";
import {
  HomeOutlined,
  CarOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";

interface MenuItem {
  id: string;
  icon: any;
  name: string;
  link: string;
}

const mainMenuItems: MenuItem[] = [
  { id: "home", icon: HomeOutlined, name: "Home", link: "" },
  { id: "master", icon: CarOutlined, name: "Master", link: "" },
  { id: "notification", icon: BellOutlined, name: "Notification", link: "" },
  { id: "settings", icon: SettingOutlined, name: "Settings", link: "" },
];

export default mainMenuItems;
