import React from "react";
import { useNavigate } from "react-router-dom";

interface SubModuleDataType {
  data: SubModuleType[];
}

interface SubModuleType {
  id: string;
  name: string;
}

const SubModule = ({ data }: SubModuleDataType) => {
  const navigate = useNavigate();

  const onClickActive = (x: SubModuleType) => {
    navigate(x.id);
    console.log(x);
  };

  return (
    <div className="sidebar-submenu">
      <div>
        {data.map((x) => {
          return (
            <button
              className="list"
              key={x.id}
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
