import React from "react";
import VehicleReminder from "./VehicleReminder";
import { Typography } from "antd";

const { Title, Text } = Typography;

interface VehicleRemindersType {
  vehicleNumber: string;
}

const data = [
  {
    id: 1,
    title: "Tyre",
    lastChanged: "24-08-2022",
    dueDate: "24-08-2024",
    percentage: 0,
  },
  {
    id: 2,
    title: "Battery",
    lastChanged: "24-08-2022",
    dueDate: "24-08-2024",
    percentage: 8,
  },
  {
    id: 3,
    title: "Oil",
    lastChanged: "24-08-2022",
    dueDate: "24-08-2024",
    percentage: 16,
  },
  {
    id: 4,
    title: "Filter",
    lastChanged: "24-08-2022",
    dueDate: "24-08-2024",
    percentage: 30,
  },
  {
    id: 5,
    title: "Tyre",
    lastChanged: "24-08-2022",
    dueDate: "24-08-2024",
    percentage: 40,
  },
  {
    id: 6,
    title: "Tyre",
    lastChanged: "24-08-2022",
    dueDate: "24-08-2024",
    percentage: 60,
  },
  {
    id: 7,
    title: "Tyre",
    lastChanged: "24-08-2022",
    dueDate: "24-08-2024",
    percentage: 80,
  },
];

function VehicleReminders({ vehicleNumber }: VehicleRemindersType) {
  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <Text style={{ color: "#1890ff", lineHeight: 1, fontSize: "18px" }}>
          Reminders ({data.length})
        </Text>
      </div>
      <div style={{ height: "250px", overflow: "auto" }}>
        {data.map((reminder) => {
          return (
            <VehicleReminder
              id={reminder.id}
              title={reminder.title}
              lastChanged={reminder.lastChanged}
              dueDate={reminder.dueDate}
              percentage={reminder.percentage}
              update={""}
            />
          );
        })}
      </div>
    </div>
  );
}

export default VehicleReminders;
