import { Button, Space, Tag } from "antd";
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
const { CheckableTag } = Tag;
const tagsData = ["Overall", "Parts", "Service", "Documents", "Fuel", "others"];
function SelectOptions({
    onClickOverall,
    onClickPart,
    onClickService,
    onClickDocs,
    onClickFuel,
    onClickOthers,
}: SelectOptionType) {
    const [selectedTags, setSelectedTags] = useState<string[]>(["Overall"]);
    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag);
        console.log("You are interested in: ", nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    };
    return (
        <Space className="selectOptions" direction="horizontal" align="center">
            {/* <span style={{ marginRight: 8 }}>Categories:</span> */}
            {tagsData.map((tag) => (
                <CheckableTag
                    key={tag}
                    checked={selectedTags.indexOf(tag) > -1}
                    onChange={(checked) => handleChange(tag, checked)}
                >
                    {tag}
                </CheckableTag>
            ))}
            {/* <Button
                className="btn"
                onClick={onClickOverall}
                style={{ width: "100%" }}
                size="small"
            >
                Over All
            </Button>
            <Button
                className="btn"
                onClick={onClickPart}
                style={{ width: "100%" }}
                size="small"
            >
                Part
            </Button>
            <Button
                className="btn"
                onClick={onClickService}
                style={{ width: "100%" }}
                size="small"
            >
                Service
            </Button>
            <Button
                className="btn"
                onClick={onClickDocs}
                style={{ width: "100%" }}
                size="small"
            >
                Docs
            </Button>
            <Button
                className="btn"
                onClick={onClickFuel}
                style={{ width: "100%" }}
                size="small"
            >
                Fuel
            </Button>
            <Button
                className="btn"
                onClick={onClickOthers}
                style={{ width: "100%" }}
                size="small"
            >
                Others
            </Button> */}
        </Space>
    );
}

export default SelectOptions;
