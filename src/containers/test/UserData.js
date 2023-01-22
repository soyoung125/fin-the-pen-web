import { Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../utils/redux/user/userSlice';

function UserData() {
  const user = useSelector(selectUser);

  return (
    <Stack spacing={2} m={2} border={1} p={2}>
      <Typography>Redux : selectUser</Typography>
      <Typography sx={{ wordBreak: 'break-all' }}>
        {JSON.stringify(user)}
      </Typography>
    </Stack>
  );
}
export default UserData;
