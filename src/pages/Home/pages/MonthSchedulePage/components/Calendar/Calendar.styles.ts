import styled from "@emotion/styled";

export const CalendarBox = styled.div`
  width: 100%;

  & .MuiDateCalendar-root {
    width: 100%;
    height: 100%;
    max-height: 380px;
  }

  & .MuiTypography-caption {
    width: 100%;
    margin: 0;
  }

  & .MuiDayCalendar-header :first-child {
    color: #e82a2a;
  }

  & .MuiDayCalendar-header :last-child {
    color: #0075ff;
  }

  & .MuiPickersDay-root {
    margin: 0 auto;
    border-radius: 12px;
  }

  & .MuiPickersSlideTransition-root {
    min-height: 280px;
  }

  & .MuiDayCalendar-monthContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & .MuiButtonBase-root.MuiPickersDay-root {
    border: 0;
  }

  & .MuiButtonBase-root.MuiPickersDay-root.Mui-selected {
    border: 2px solid;
    background-color: #fff;
    color: #735bf2;
    font-weight: bold;
  }

  & .MuiPickersDay-today {
    background-color: #735bf2 !important;
    color: #fff !important;
    border: 0 !important;
  }

  & .MuiPickersDay-today:hover {
    color: black;
  }
`;
