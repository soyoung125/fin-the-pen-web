import { Button, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { NOT_AVAILABLE } from '../../../../utils/constants/common';
import { selectUser } from '../../../../utils/redux/user/userSlice';
import DeprecatedButton from './DeprecatedButton';

function ScheduleDrawerFooter({ mode, setBottomDrawerOpen }) {
  const user = useSelector(selectUser);

  const handleSubmitByRedux = () => {
    alert(NOT_AVAILABLE);
  };

  return (
    <Stack
      direction="row"
      spacing={1}
    >
      <DeprecatedButton
        mode={mode}
        setBottomDrawerOpen={setBottomDrawerOpen}
      />

      <Button
        variant="contained"
        color="warning"
        fullWidth
        disabled={user === null}
        onClick={() => handleSubmitByRedux()}
      >
        redux test
      </Button>
    </Stack>
  );
}

export default ScheduleDrawerFooter;
