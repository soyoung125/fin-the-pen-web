import { PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from '../../../../../../../app/redux/slices/settingSlice';

interface MarkedPickersDayProps {
  color: string[];
  DayComponentProps: PickersDayProps<moment.Moment>;
}
function MarkedPickersDay({ color, DayComponentProps }: MarkedPickersDayProps) {
  const isDarkMode = useSelector(selectIsDarkMode);
  
  return (
    <PickersDay
      sx={{
        border: 1,
        borderRadius: 2,
        borderColor: color.length > 1 ? "#FFA450" : color,
        backgroundColor: isDarkMode ? '#12293b' : '#FFFFFF',
      }}
      {...DayComponentProps}
    />
  );
}

export default MarkedPickersDay;
