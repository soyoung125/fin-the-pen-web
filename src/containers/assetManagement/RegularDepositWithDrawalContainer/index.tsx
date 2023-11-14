/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/naming-convention */
import { Box, Button, IconButton, Stack } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { REGULAR_DEPOSIT_WITHDRAWAL_TYPE } from "../../../constants/schedule.tsx";
import DetailCard from "./DetailCard";
import Title from "../../../components/common/Title";
import PATH from "../../../constants/path";
import AlertModal from "../../../components/common/AlertModal";
import ArrowTooltip from "../../../components/common/ArrowTooltip";
import { Schedule } from "@type/schedule.tsx";
import { makeGroupForRegularData } from "@utils/tools.ts";
import useSchedule from "../../../hooks/useSchedule";
import useModal from "../../../hooks/useModal";
import { useAppSelector } from "@redux/hooks.ts";
import { selectBottomBarOpen } from "@redux/slices/commonSlice.tsx";

interface DataInterface {
  [prop: string]: Schedule[];
}

// interface MakeGroupInterface {
//   (data: Schedule[]): DataInterface,
// }

function RegularDepositWithdrawal() {
  const navigate = useNavigate();
  const isBottomDrawerOpen = useAppSelector(selectBottomBarOpen);
  const {
    modalOpen: alertModalOpen,
    openModal: openAlertModal,
    closeModal: closeAlertModal,
  } = useModal();
  const { schedules } = useSchedule();
  const [deposits, setDeposits] = useState<DataInterface>({});
  const [withdrawals, setWithdrawals] = useState<DataInterface>({});
  const [type, setType] = useState("+");

  // 추후 반복 일정에 대한 기획이 고정되면 살리기
  useEffect(() => {
    // setDeposits(
    //   makeGroupForRegularData(
    //     schedules.filter((s) => s.repeating_cycle !== "없음" && s.type === "+")
    //   )
    // );
    // setWithdrawals(
    //   makeGroupForRegularData(
    //     schedules.filter((s) => s.repeating_cycle !== "없음" && s.type === "-")
    //   )
    // );
  }, [schedules]);

  // const makeGroup: MakeGroupInterface = (data) => data
  //   .reduce((acc: DataInterface, curr: Schedule) => {
  //     const { event_name } = curr;
  //     if (acc[event_name]) acc[event_name].push(curr);
  //     else acc[event_name] = [curr];
  //     return acc;
  //   }, {});

  const handleOpenAlertModal = (newType: string): void => {
    setType(newType);
    openAlertModal();
  };

  const handleMoveToDetailPage = () => {
    closeAlertModal();
    if (type === "+") {
      navigate(PATH.DetailSetting, { state: { type: "+", data: deposits } });
    } else if (type === "-") {
      navigate(PATH.DetailSetting, { state: { type: "-", data: withdrawals } });
    }
  };

  return (
    <>
      <Title
        type="+"
        title={`정기 ${REGULAR_DEPOSIT_WITHDRAWAL_TYPE["Plus"]} 내역`}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{ color: "primary.main" }}
        >
          <Box>{`총 ${Object.keys(deposits).length}건`}</Box>
          <IconButton color="primary" onClick={() => handleOpenAlertModal("+")}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Title>

      {Object.keys(deposits).map((d) => (
        <DetailCard data={deposits[d]} key={deposits[d][0].id} />
      ))}

      <Title
        type="-"
        title={`정기 ${REGULAR_DEPOSIT_WITHDRAWAL_TYPE["Minus"]} 내역`}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{ color: "primary.main" }}
        >
          <Box>{`총 ${Object.keys(withdrawals).length}건`}</Box>
          <IconButton color="primary" onClick={() => handleOpenAlertModal("-")}>
            <BorderColorIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Title>

      {Object.keys(withdrawals).map((w) => (
        <DetailCard data={withdrawals[w]} key={withdrawals[w][0].id} />
      ))}

      <AlertModal
        open={alertModalOpen}
        handleClose={closeAlertModal}
        handleClickYes={() => handleMoveToDetailPage()}
        mode="modify"
      />

      <Box
        sx={{
          width: "100vw",
          pr: 4,
          position: "fixed",
          bottom: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowTooltip
          open={!isBottomDrawerOpen}
          title="정기 입출금 일정 추가하기"
        >
          <Button />
        </ArrowTooltip>
      </Box>
    </>
  );
}

export default RegularDepositWithdrawal;
