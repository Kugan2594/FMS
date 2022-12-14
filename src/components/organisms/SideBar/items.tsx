import React from "react";
import {
    HomeOutlined,
    CarOutlined,
    BellOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";

interface MenuItem {
    id: string;
    icon: any;
    name: string;
    link: string;
    children: SubmenuItem[];
}

interface SubmenuItem {
    id: string;
    name: string;
}
let mainMenuItems: MenuItem[] = [];
{
    getUserDetails().roleName === "ADMIN"
        ? (mainMenuItems = [
              {
                  id: "home",
                  icon: HomeOutlined,
                  name: "Home",
                  link: "/home",
                  children: [],
              },
              {
                  id: "master",
                  icon: CarOutlined,
                  name: "Master",
                  link: "/master/branches",
                  children: [
                      { id: "companies", name: "Companies" },
                      { id: "colombo", name: "Colombo" },
                      { id: "jaffna", name: "jaffna" },
                  ],
              },
              {
                  id: "notification",
                  icon: BellOutlined,
                  name: "Notification",
                  link: "/notification/notification",
                  children: [],
              },
              {
                  id: "settings",
                  icon: SettingOutlined,
                  name: "Settings",
                  link: "/settings",
                  children: [
                      { id: "settings", name: "Settings" },
                      { id: "changePassword", name: "Change Password" },
                      { id: "paymentMethods", name: "Payment Methods" },
                      { id: "terms&conditions", name: "Terms & Conditions" },
                  ],
              },
          ])
        : (mainMenuItems = [
              {
                  id: "home",
                  icon: HomeOutlined,
                  name: "Home",
                  link: "/home",
                  children: [],
              },
              {
                  id: "master",
                  icon: CarOutlined,
                  name: "Master",
                  link: "/master/branches",
                  children: [
                      { id: "branches", name: "Branches" },
                      { id: "vehicles", name: "Vehicles" },
                      { id: "generator", name: "Genarators" },
                      { id: "parts", name: "Parts" },
                      { id: "revenueLicense", name: "Revenue License" },
                      { id: "emissionTest", name: "Emission Test" },
                      { id: "insurance", name: "Insurance" },
                      { id: "accidentDocument", name: "Accident Document" },
                      { id: "services", name: "Services" },
                      { id: "branchAdmins", name: "Branch Admins" },
                      { id: "drivers", name: "Drivers" },
                      { id: "lease", name: "Lease" },
                  ],
              },
              {
                  id: "notification",
                  icon: BellOutlined,
                  name: "Notification",
                  link: "/notification/notification",
                  children: [],
              },
              {
                  id: "settings",
                  icon: SettingOutlined,
                  name: "Settings",
                  link: "/settings",
                  children: [
                      { id: "settings", name: "Settings" },
                      { id: "changePassword", name: "Change Password" },
                      { id: "paymentMethods", name: "Payment Methods" },
                      { id: "terms&conditions", name: "Terms & Conditions" },
                  ],
              },
          ]);
}

export default mainMenuItems;
