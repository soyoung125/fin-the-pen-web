import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoButton from "../buttons/LogoButton";
import PersonalButton from "../buttons/PersonalButton";
import FilterButton from "../buttons/FilterButton";
import SearchButton from "../buttons/SearchButton";
import NotificationButton from "../buttons/NotificationButton";

function HomeMode() {
  const navigate = useNavigate();
  return (
    <>
      {/* 헤더 좌측 메뉴 */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <LogoButton />
        <FilterButton />
      </Stack>

      {/* 헤더 중앙 메뉴 */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      />

      {/* 헤더 우측 메뉴 */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <NotificationButton />
        <PersonalButton />
        <SearchButton />
      </Stack>
    </>
  );
}
export default HomeMode;
