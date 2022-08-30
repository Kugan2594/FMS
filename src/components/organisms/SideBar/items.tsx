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
  children: SubmenuItem[];
};

interface SubmenuItem {
  id: string;
  name: string;
}

const Home = () => {
  return(
    <div style={{display: "flex", paddingBottom: "20px"}}>
    <HomeOutlined style={{fontSize: "25px"}} />
    <div style={{position:"absolute"}}>Home</div>
    </div>
  )
};

const Master = () => {
  return(
    <div style={{display: "flex", paddingBottom: "20px"}}>
    <CarOutlined style={{fontSize: "25px"}} />
    <div style={{position:"absolute"}}>Master</div>
    </div>
  )
};

const Notification = () => {
  return(
    <div style={{display: "flex", paddingBottom: "20px"}}>
    <BellOutlined style={{fontSize: "25px"}} />
    <div style={{position:"absolute"}}>Notification</div>
    </div>
  )
};

const Settings = () => {
  return(
    <div style={{display: "flex", paddingBottom: "20px"}}>
    <SettingOutlined style={{fontSize: "25px"}} />
    <div style={{position:"absolute"}}>Settings</div>
    </div>
  )
}

const mainMenuItems: MenuItem[] = [
  { id: "home", icon: Home, name: "Home", link: "", children: [] },
  { id: "master", icon: Master, name: "Master", link: "", children: [
    {id: "branches", name: "Branches"},
    {id: "parts", name: "Parts"},
    {id: "documents", name: "Documents"},
    {id: "services", name: "Services"},
    {id: "vehicles", name: "Vehicles"},
  ] },
  { id: "notification", icon: Notification, name: "Notification", link: "", children: [] },
  { id: "settings", icon: Settings, name: "Settings", link: "", children: [
    {id: "settings", name: "Settings"},
    {id: "changePassword", name: "Change Password"},
    {id: "paymentMethods", name: "Payment Methods"},
    {id: "terms&conditions", name: "Terms & Conditions"},
  ] },
];

export default mainMenuItems;
