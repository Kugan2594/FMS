import {
    AppstoreOutlined,
    HomeOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import React, { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

export interface Items {
    label: React.ReactNode;
    key: React.Key;
    icon?: React.ReactNode;
    // children?: MenuItem[];
}
export const items: Items[] = [
    { key: "DashBoard", icon: "", label: "DashBoard" },
    { key: "Statistics", icon: "", label: "Statistics" },
];
