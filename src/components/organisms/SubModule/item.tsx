import { Menu } from "antd";
import { useState } from "react";
import type { MenuProps } from "antd";
import { items } from "./items";
import SubModuleHeaderLogo from "./SubModuleHeader";
// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const SbModule: React.FC = () => {
    const [openKeys, setOpenKeys] = useState(["sub1"]);

    const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <>
            <div className="sub">
                <SubModuleHeaderLogo />
                <Menu
                    theme="light"
                    className="submenu-item"
                    mode="inline"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    style={{ width: 150, color: "blue", height: 400 }}
                    items={items}
                />
            </div>
        </>
    );
};

export default SbModule;
