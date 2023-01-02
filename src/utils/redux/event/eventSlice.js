import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
};

export const eventsSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
  },
});
export const { addEvent } = eventsSlice.actions;

export const selectEvents = (state) => state.event.events;

export default eventsSlice.reducer;
