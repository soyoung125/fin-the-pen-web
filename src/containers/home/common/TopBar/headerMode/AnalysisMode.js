import { Stack } from '@mui/material';
import FilterButton from '../buttons/FilterButton';
import LogoButton from '../buttons/LogoButton';
import PersonalButton from '../buttons/PersonalButton';

function AnalysisMode() {
  return (
    <>
      {/* 헤더 좌측 메뉴 */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <FilterButton />
      </Stack>

      {/* 헤더 중앙 메뉴 */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <LogoButton />
      </Stack>

      {/* 헤더 우측 메뉴 */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <PersonalButton />
      </Stack>
    </>
  );
}
export default AnalysisMode;
