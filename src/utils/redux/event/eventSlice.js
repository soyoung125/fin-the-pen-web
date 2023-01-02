import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  date: '',
  events: [],
};

export const eventsSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    selectedDate: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.date = action.payload;
    },
  },
});
export const { addEvent, selectedDate } = eventsSlice.actions;

export const selectEvents = (state) => state.event.events;
export const selectDate = (state) => state.event.date;

export default eventsSlice.reducer;
