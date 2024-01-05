import { Stack, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useModal } from "@hooks/modal/useModal.tsx";
import MonthlyExpenditureTargetModal from "@pages/Home/next-components/HomeHeader/MonthlyExpenditureTarget/MonthlyExpenditureTargetModal.tsx";

export interface MonthlyExpenditureTargetCardProps {
  amount: number;
  userName: string;
}

export default function MonthlyExpenditureTargetCard({
  amount,
  userName,
}: MonthlyExpenditureTargetCardProps) {
  const { openModal, closeModal } = useModal();
  const changeMonthlyExpenditureTarget = () => {
    openModal({
      isBackdropClickable: true,
      modalElement: (
        <MonthlyExpenditureTargetModal
          yyyyMM={"2021-12"}
          closeModal={closeModal}
        />
      ),
    });
  };

  return (
    <Stack>
      <Typography fontSize="15px">
        {userName}님의 이번달 목표 지출 금액
      </Typography>
      <Stack direction="row">
        <Typography fontSize="20px" fontWeight={700}>
          {amount}원
        </Typography>
        <SettingsIcon
          sx={{ color: "#735BF2" }}
          onClick={changeMonthlyExpenditureTarget}
        />
      </Stack>
    </Stack>
  );
}
