import React, { MouseEventHandler } from "react";
import { Button } from "antd";

interface ButtonPropsType {
  title?: string;
  onClick?: MouseEventHandler<HTMLElement> | undefined;
  style?: object;
  type?:
    | "link"
    | "text"
    | "ghost"
    | "primary"
    | "default"
    | "dashed"
    | undefined;
  className?: string;
  htmlType?: "submit" | "button" | "reset";
}

const CustomButton = (props: ButtonPropsType) => {
  return (
    <Button
      style={props.style}
      type={props.type}
      onClick={props.onClick}
      className={props.className}
      htmlType={props.htmlType}
    >
      {props.title}
    </Button>
  );
};

export default CustomButton;
