import React, { MouseEventHandler, FormEventHandler } from "react";
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
    size?: "small" | "middle" | "large";
    onChange?: any;
    disabled?: boolean;
}

const CustomButton = (props: ButtonPropsType) => {
    return (
        <Button
            style={props.style}
            type={props.type}
            onClick={props.onClick}
            className={props.className}
            htmlType={props.htmlType}
            size={props.size}
            onChange={props.onChange}
            disabled={props.disabled}
        >
            {props.title}
        </Button>
    );
};

export default CustomButton;
