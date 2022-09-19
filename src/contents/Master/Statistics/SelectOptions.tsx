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
        <Space className="selectOptions" direction="vertical" align="baseline">
            <Button className="btn" onClick={onClickOverall}>
                Over All
            </Button>
            <Button className="btn" onClick={onClickPart}>
                Part
            </Button>
            <Button className="btn" onClick={onClickService}>
                Service
            </Button>
            <Button className="btn" onClick={onClickDocs}>
                Docs
            </Button>
            <Button className="btn" onClick={onClickFuel}>
                Fuel
            </Button>
            <Button className="btn" onClick={onClickOthers}>
                Others
            </Button>
        </Space>
    );
}

export default SelectOptions;
