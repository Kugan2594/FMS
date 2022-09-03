import React, { FC } from "react";

type carType = "small" | "medium" | "large";
interface cardProps {
    width: string;
    height: string;
    type: carType;
}

const Card: cardProps = ({ type, height, width }) => {
    return <div></div>;
};

export default Card;
