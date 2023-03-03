import { Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useNavigate } from 'react-router-dom';
import LogoButton from '../buttons/LogoButton';
import RoundedButton from '../../../../../components/common/RoundedButton';
import PATH from '../../../../../utils/constants/path';
import PersonalButton from '../buttons/PersonalButton';

function HomeMode() {
  const navigate = useNavigate();
  return (
    <>
      {/* 헤더 좌측 메뉴 */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <LogoButton />
      </Stack>

      {/* 헤더 중앙 메뉴 */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      />

      {/* 헤더 우측 메뉴 */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <RoundedButton value="user" onClick={() => alert('준비 중인 메뉴')}>
          <SearchIcon />
        </RoundedButton>
        <RoundedButton value="notification" onClick={() => navigate(PATH.notification)}>
          <NotificationsOutlinedIcon />
        </RoundedButton>
        <PersonalButton />
      </Stack>
    </>
  );
}
export default HomeMode;
