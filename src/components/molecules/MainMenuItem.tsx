import React from 'react';
import { Button } from 'antd';

interface MainMenuItemType {
    onClick: any;
    icon: any;
    label: string; 
}

function MainMenuItem({onClick, icon, label}: MainMenuItemType) {
  return (
    <div className='main-menu-item'>
        <button onClick={onClick}>
        <div className='main-menu-item-logo'>
            {React.createElement(icon)}
        </div>
        <div className='main-menu-item-label'>
            {label}
        </div>
        </button>

    </div>
  )
}

export default MainMenuItem;