import { DatePicker, Space } from "antd";
import React from "react";
const { RangePicker } = DatePicker;

interface RangePickerType {
    picker?: "week" | "month" | "quarter" | "year";
    showTime?: boolean;
    direction?: "vertical" | "horizontal" | undefined;
    size?: any;
    defaultValue?: any;
    format?: any;
}
function CustomRangePicker({
    picker,
    showTime,
    direction,
    size,
    defaultValue,
    format,
}: RangePickerType) {
    return (
        <Space direction={direction} size={size}>
            <RangePicker
                picker={picker}
                showTime={showTime}
                defaultValue={defaultValue}
                format={format}
            />
        </Space>
    );
}

export default CustomRangePicker;
