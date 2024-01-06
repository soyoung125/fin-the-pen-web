import {
  Stack,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useModal } from "@hooks/modal/useModal.tsx";
import MonthlyExpenditureTargetModal from "@pages/Home/next-components/HomeHeader/MonthlyExpenditureTarget/MonthlyExpenditureTargetModal.tsx";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export interface MonthlyExpenditureTargetCardProps {
  yyyyMM: `${number}-${number}`;
  amount: number;
  userName: string;
}

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#735BF2",
    color: "white",
    fontSize: "12px",
    zIndex: 0,
  },
}));

export default function MonthlyExpenditureTargetCard({
  yyyyMM,
  amount,
  userName,
}: MonthlyExpenditureTargetCardProps) {
  const { openModal, closeModal } = useModal();
  const [tooltipOpen, setTooltipOpen] = useState(true);
  const changeMonthlyExpenditureTarget = () => {
    openModal({
      isBackdropClickable: true,
      modalElement: (
        <MonthlyExpenditureTargetModal
          yyyyMM={yyyyMM}
          closeModal={closeModal}
        />
      ),
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setTooltipOpen(false);
    }, 2000);
  }, []);

  return (
    <Stack>
      <Typography fontSize="15px">
        {userName}님의 이번달 목표 지출 금액
      </Typography>
      <Stack direction="row">
        <Typography fontSize="20px" fontWeight={700}>
          {amount.toLocaleString()}원
        </Typography>
        <CustomTooltip
          title={"이번달 목표 지출 금액 변경하기"}
          arrow
          placement="right"
          open={tooltipOpen}
        >
          <SettingsIcon
            sx={{ color: "#735BF2" }}
            onClick={changeMonthlyExpenditureTarget}
          />
        </CustomTooltip>
      </Stack>
    </Stack>
  );
}
