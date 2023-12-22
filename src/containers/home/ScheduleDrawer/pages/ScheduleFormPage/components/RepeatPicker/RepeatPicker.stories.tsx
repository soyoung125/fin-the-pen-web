import type { Meta } from "@storybook/react";
import RepeatContainer from ".";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { INIT_PERIOD, INIT_REPEAT } from "constants/schedule";
import moment from "moment";
import { Provider } from "react-redux";
import RepeatPicker from ".";
import { RepeatPickerProps } from "./RepeatPicker";

export const MockedState = {
  schedule: {
    start_date: moment().format("YYYY-MM-DD"),
    repeat: INIT_REPEAT(moment()),
    period: INIT_PERIOD(moment()),
  },
  status: "idle",
  error: null,
};

const MockStore = ({ children }: { children: JSX.Element }) => (
  <Provider
    store={configureStore({
      reducer: {
        schedule: createSlice({
          name: "schedule",
          initialState: MockedState,
          reducers: {
            setDrawerSchedule: (state, action) => {
              state.schedule = action.payload;
            },
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

const meta = {
  title: "ui/ScheduleDrawer/repeat-picker",
  component: RepeatContainer,
  tags: ["autodocs"],
  args: {
    setIsRepeatPickerOpen: () => alert("hi"),
  },
  excludeStories: /.*MockedState$/,
} satisfies Meta<typeof RepeatContainer>;

export default meta;

export const Default = (args: RepeatPickerProps) => {
  return (
    <MockStore>
      <RepeatPicker {...args} />
    </MockStore>
  );
};
