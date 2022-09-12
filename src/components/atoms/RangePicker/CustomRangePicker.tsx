import { DatePicker, Space } from "antd";
import React from "react";
const { RangePicker } = DatePicker;

interface RangePickerType {
    picker?: "week" | "month" | "quarter" | "year";
    showTime?: boolean;
    direction?: "vertical" | "horizontal" | undefined;
    size?: any;
}
function CustomRangePicker({
    picker,
    showTime,
    direction,
    size,
}: RangePickerType) {
    return (
        <Space direction={direction} size={size}>
            <RangePicker picker={picker} showTime={showTime} />
        </Space>
    );
}

export default CustomRangePicker;
