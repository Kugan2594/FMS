import { Button, Space } from "antd";
import "./Statistics.style.less";
import { useState } from "react";

interface SelectOptionType {
    onClickOverall?: React.MouseEventHandler<HTMLElement> | undefined;
    onClickPart?: React.MouseEventHandler<HTMLElement> | undefined;
    onClickService?: React.MouseEventHandler<HTMLElement> | undefined;
    onClickDocs?: React.MouseEventHandler<HTMLElement> | undefined;
    onClickFuel?: React.MouseEventHandler<HTMLElement> | undefined;
    onClickOthers?: React.MouseEventHandler<HTMLElement> | undefined;
}
function SelectOptions({
    onClickOverall,
    onClickPart,
    onClickService,
    onClickDocs,
    onClickFuel,
    onClickOthers,
}: SelectOptionType) {
    return (
        <Space
            className="selectOptions"
            direction="vertical"
            align="center"
            size={5}
        >
            <div className="space1"></div>
            <Button
                className="btn"
                onClick={onClickOverall}
                style={{ width: "80%" }}
            >
                Over All
            </Button>
            <Button
                className="btn"
                onClick={onClickPart}
                style={{ width: "80%" }}
            >
                Part
            </Button>
            <Button
                className="btn"
                onClick={onClickService}
                style={{ width: "80%" }}
            >
                Service
            </Button>
            <Button
                className="btn"
                onClick={onClickDocs}
                style={{ width: "80%" }}
            >
                Docs
            </Button>
            <Button
                className="btn"
                onClick={onClickFuel}
                style={{ width: "80%" }}
            >
                Fuel
            </Button>
            <Button
                className="btn"
                onClick={onClickOthers}
                style={{ width: "80%" }}
            >
                Others
            </Button>
            <div className="space2"></div>
        </Space>
    );
}

export default SelectOptions;
