import { DatePicker, DatePickerProps, Space } from "antd";
import React from "react";

interface DatePickerType {
    onChange?: any;
    picker?: "week" | "month" | "quarter" | "year";
    direction?: "vertical" | "horizontal" | undefined;
}
const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
};
function CustomDatePicker({ onChange, picker, direction }: DatePickerType) {
    return (
        <Space direction={direction}>
            <DatePicker onChange={onChange} picker={picker} />
        </Space>
    );
}

export default CustomDatePicker;
