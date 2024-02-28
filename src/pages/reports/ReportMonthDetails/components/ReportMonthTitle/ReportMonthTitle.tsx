import { Box, Stack, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import PredictBox from "@pages/reports/ReportMonthDetails/components/PredictBox";
import MoneyIcon from "@mui/icons-material/Money";
import GoalSettingModal from "@pages/reports/Report/components/modals/GoalSettingModal";
import { useModal } from "@hooks/modal/useModal.tsx";
import { useNavigate } from "react-router-dom";

export interface ReportMonthTitleProps {
  year: number;
  month: number;
  onClickMonth: () => void;
  onSubmit: (amount: number) => void;
  goal: number;
  spent: number;
}

function ReportMonthTitle({
  month,
  year,
  onClickMonth,
  onSubmit,
  goal,
  spent,
}: ReportMonthTitleProps) {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();

  const handleClickAccountSetting = () => {
    openModal({
      modalElement: (
        <GoalSettingModal
          closeModal={closeModal}
          handleSubmit={(v) => onSubmit(v)}
          navigateTo={() => navigate("/somewhere")}
        />
      ),
      isBackdropClickable: true,
    });
  };

  return (
    <Stack bgcolor="#F7F7F8" borderRadius="12px" p={2} gap="10px">
      <Stack direction="row" alignItems="center" py={0.5} spacing={1}>
        <Typography variant="h2">
          {year}년 {month}월
        </Typography>
        <CalendarTodayIcon sx={{ fontSize: 16 }} onClick={onClickMonth} />
      </Stack>
      <Stack direction="row">
        <PredictBox
          title="지출 목표액"
          titleIcon={<AccountBalanceWalletIcon sx={{ fontSize: "28px" }} />}
          amount={goal}
          // navigateIcon={<SettingsIcon fontSize="small" />}
          // handleClick={handleClickAccountSetting}
        />

        <PredictBox
          title="지출 금액"
          titleIcon={<MoneyIcon sx={{ fontSize: "28px" }} />}
          amount={spent}
        />
      </Stack>
    </Stack>
  );
}

export default ReportMonthTitle;
