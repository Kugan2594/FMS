import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    value: [
    {
      id: "1",
      image: "https://picsum.photos/200",
      description: "NP CAR 5264's Tax has expired NP CAR 5264's Tax has expired",
      time: "20 Mar 2022",
      isRead: false,
    },
    {
      id: "2",
      image: "https://picsum.photos/200",
      description: "NP CAR 5264's Tax has expired NP CAR 5264's Tax has expired",
      time: "20 Mar 2022",
      isRead: false,
    },
    {
      id: "3",
      image: null,
      description: "NP CAR 5264's Tax has expired NP CAR 5264's Tax has expired",
      time: "20 Mar 2022",
      isRead: true,
    },
    {
      id: "4",
      image: null,
      description: "NP CAR 5264's Tax has expired NP CAR 5264's Tax has expired",
      time: "20 Mar 2022",
      isRead: true,
    },
    {
      id: "5",
      image: null,
      description: "NP CAR 5264's Tax has expired NP CAR 5264's Tax has expired",
      time: "20 Mar 2022",
      isRead: false,
    },
    {
      id: "6",
      image: "https://picsum.photos/200",
      description: "NP CAR 5264's Tax has expired NP CAR 5264's Tax has expired",
      time: "20 Mar 2022",
      isRead: false,
    },
    {
      id: "7",
      image: "https://picsum.photos/200",
      description: "NP CAR 5264's Tax has expired NP CAR 5264's Tax has expired",
      time: "20 Mar 2022",
      isRead: true,
    },
    {
      id: "8",
      image: null,
      description: "NP CAR 5264's Tax has expired NP CAR 5264's Tax has expired",
      time: "20 Mar 2022",
      isRead: false,
    },
    {
        id: "9",
        image: null,
        description: "NP CAR 5264's Tax has expired NP CAR 5264's Tax has expired",
        time: "20 Mar 2022",
        isRead: false,
      },
      {
        id: "10",
        image: "https://picsum.photos/200",
        description: "NP CAR 5264's Tax has expired NP CAR 5264's Tax has expired",
        time: "20 Mar 2022",
        isRead: true,
      },
      {
        id: "11",
        image: "https://picsum.photos/200",
        description: "NP CAR 5264's Tax has expired NP CAR 5264's Tax has expired",
        time: "20 Mar 2022",
        isRead: true,
      },
      {
        id: "12",
        image: "https://picsum.photos/200",
        description: "NP CAR 5264's Tax has expired NP CAR 5264's Tax has expired",
        time: "20 Mar 2022",
        isRead: true,
      },
      {
        id: "13",
        image: "https://picsum.photos/200",
        description: "NP CAR 5264's Tax has expired NP CAR 5264's Tax has expired",
        time: "20 Mar 2022",
        isRead: true,
      },
      {
        id: "14",
        image: "https://picsum.photos/200",
        description: "NP CAR 5264's Tax has expired NP CAR 5264's Tax has expired",
        time: "20 Mar 2022",
        isRead: true,
      },
      {
        id: "15",
        image: "https://picsum.photos/200",
        description: "NP CAR 5264's Tax has expired NP CAR 5264's Tax has expired",
        time: "20 Mar 2022",
        isRead: true,
      },
      {
        id: "16",
        image: "https://picsum.photos/200",
        description: "NP CAR 5264's Tax has expired NP CAR 5264's Tax has expired",
        time: "20 Mar 2022",
        isRead: true,
      },
  ]};

const notificationSlice = createSlice({
    name: "notification",
    initialState: initialState,
    reducers: {}
});

export const {} = notificationSlice.actions;

export default notificationSlice.reducer;