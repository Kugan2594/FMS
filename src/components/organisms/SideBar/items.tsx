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
}

interface SubmenuItem {
    id: string;
    name: string;
}

const mainMenuItems: MenuItem[] = [
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
        link: "/master",
        children: [
            { id: "branches", name: "Branches" },
            { id: "vehicles", name: "Vehicles" },
            { id: "generators", name: "Genarators" },
            { id: "parts", name: "Parts" },
            { id: "documents", name: "Documents" },
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
        link: "/notification",
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
];

export default mainMenuItems;
