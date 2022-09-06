import React from "react";
import SubModuleHeaderLogo from "./SubModuleHeader";



const SubModule = (props:any) => {

    const onClickActive = (x: string) => {
        console.log(x);
    };

    return (
            <div className="sidebar-submenu">
                <div>
                    {props.data.map((x: any, index: any) => {
                        return (
                            <button
                                className="list"
                                key={index}
                                onClick={() => onClickActive(x)}
                            >
                                {x.name}
                            </button>
                        );
                    })}
                </div>
            </div>
    );
};

export default SubModule;
