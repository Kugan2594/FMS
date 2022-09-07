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
}

const CustomButton = (props: ButtonPropsType) => {
    return (
        <Button style={props.style} type={props.type} onClick={props.onClick}>
            {props.title}
        </Button>
    );
};

export default CustomButton;
