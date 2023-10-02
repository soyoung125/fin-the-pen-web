import { Stack } from '@mui/material';
import PersonalButton from '../buttons/PersonalButton';
import BackButton from '../buttons/BackButton';
import SearchButton from '../buttons/SearchButton';
import NotificationButton from '../buttons/NotificationButton';

function SearchMode() {  
  return (
    <>
      {/* 헤더 좌측 메뉴 */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <BackButton />
      </Stack>

      {/* 헤더 중앙 메뉴 */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
      </Stack>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <NotificationButton />
        <PersonalButton />
        <SearchButton />
      </Stack>
    </>
  );
}

export default SearchMode;
