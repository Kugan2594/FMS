import React from "react";

interface ItemType {
  icon: any;
  label: string;
  key: string;
}

function item(props: ItemType) {
  return (
    <div key={props.key} style={{ height: "30px", width: "30px" }}>
      <div style={{ textAlign: "center", height: "25px", width: "25px" }}>
        {props.icon}
      </div>
      <div style={{ textAlign: "center" }}>{props.label}</div>
    </div>
  );
}

export default item;
