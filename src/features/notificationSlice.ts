import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NotificationDetailType {
  id: number;
  image: any;
  description: string;
  time: string;
  isRead: boolean;
}

interface NotificationValueType {
  value: NotificationDetailType[];
}

const initialState: NotificationValueType = {
  value: []
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    setNotification: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
