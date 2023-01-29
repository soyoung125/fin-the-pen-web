/* eslint-disable import/prefer-default-export */
export const updateSchedule = (schedule, setSchedule, state) => {
  setSchedule({ ...schedule, [state.target.id]: state.target.value });
};
