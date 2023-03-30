/* eslint-disable react/jsx-props-no-spreading */
import { PickersDay } from '@mui/x-date-pickers';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../../../../../../utils/redux/setting/settingSlice';

function MarkedPickersDay({ color, DayComponentProps }) {
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <PickersDay
      sx={{
        border: 1,
        borderRadius: 2,
        borderColor: color,
        backgroundColor: isDarkMode && color,
      }}
      {...DayComponentProps}
    />
  );
}

export default MarkedPickersDay;
