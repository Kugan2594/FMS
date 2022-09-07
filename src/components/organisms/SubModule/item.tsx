import React from "react";
import { Link } from "react-router-dom";
import SubModuleHeaderLogo from "./SubModuleHeader";

const SubModule = (props: any) => {
    const onClickActive = (x: string) => {
        console.log(x);
    };

    return (
        <div className="sidebar-submenu">
            <div>
                {props.data.map((x: any, index: any) => {
                    return (
                        <Link to={`branch/${x.id}`}>
                            <button
                                className="list"
                                key={index}
                                onClick={() => onClickActive(x)}
                            >
                                {x.name}
                            </button>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default SubModule;
