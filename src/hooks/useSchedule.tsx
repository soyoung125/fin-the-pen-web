/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { selectSchedules } from '../app/redux/slices/scheduleSlice';

/**
 * 앞으로 스케쥴에 관련된 로직은 여기에 몰아넣고 꺼내쓰는 방식으로 구현
 */

const useSchedule = () => {
  const dispatch = useDispatch();
  const schedules = useSelector(selectSchedules);

  return {
    schedules
  };
};

export default useSchedule;
