import { Stack } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { useNavigate } from "react-router-dom";
import LogoButton from "../buttons/LogoButton";
import RoundedButton from "../../../../../components/common/RoundedButton";
import PATH from "../../../../../constants/path";
import PersonalButton from "../buttons/PersonalButton";
import FilterButton from "../buttons/FilterButton";
import SearchButton from "../buttons/SearchButton";

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
        <RoundedButton
          value="notification"
          onClick={() => navigate(PATH.notification)}
        >
          <NotificationsOutlinedIcon />
        </RoundedButton>
        <PersonalButton />
        <SearchButton />
      </Stack>
    </>
  );
}
export default HomeMode;
