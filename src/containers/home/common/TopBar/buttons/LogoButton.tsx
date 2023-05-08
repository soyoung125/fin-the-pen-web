import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RoundedButton from '../../../../../components/common/RoundedButton';
import PATH from '../../../../../domain/constants/path';
import { selectGuestMode } from '../../../../../app/redux/slices/commonSlice';
import logo from '../../../../../assets/logos/logo_removebg.png';

function LogoButton() {
  const navigate = useNavigate();
  const guestMode = useSelector(selectGuestMode);
  return (
    <RoundedButton value="user" onClick={() => navigate(PATH.home)}>
      <img src={logo} alt="" width="26px" height="26px" />
      {
        guestMode && (
          <Typography ml={1}>GUEST MODE</Typography>
        )
      }
    </RoundedButton>
  );
}
export default LogoButton;
