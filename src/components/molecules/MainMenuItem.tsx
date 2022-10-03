import React from "react";
import { Badge, Button } from "antd";

interface MainMenuItemType {
  onClick: any;
  icon: any;
  label: string;
  badgeCount?: number;
}

function MainMenuItem({ onClick, icon, label, badgeCount }: MainMenuItemType) {
  return (
    <div className="main-menu-item">
      <button onClick={onClick}>
        {label == "Notification" ? (
          <Badge count={badgeCount}>
            <div className="main-menu-item-logo">
              {React.createElement(icon)}
            </div>
          </Badge>
        ) : (
          <div className="main-menu-item-logo">{React.createElement(icon)}</div>
        )}
        <div className="main-menu-item-label">{label}</div>
      </button>
    </div>
  );
}

export default MainMenuItem;
