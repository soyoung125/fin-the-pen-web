/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import Calender from '../../components/calender/Calender';
import { selectEvents } from '../../utils/redux/event/eventSlice';

function HomeConatiner() {
  // temp
  const events = useSelector(selectEvents);
  console.log(events);
  return (
    <>
      <Calender />
      {
        JSON.stringify(events)
      }
    </>
  );
}
export default HomeConatiner;
