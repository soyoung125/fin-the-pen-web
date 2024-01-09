import ReportTitle from "@pages/reports/Report/components/ReportTitle";
import { Box, Button, Stack } from "@mui/material";
import PredictBox from "@pages/reports/Report/components/PredictBox";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ReportBox from "@pages/reports/Report/components/ReportBox";
import { PATH } from "@constants/path.ts";
import useReport from "@hooks/useReport.ts";
import useHeader from "@hooks/useHeader.ts";
import { HEADER_MODE } from "@app/types/common.ts";
import { generateRandomBubbles2 } from "@pages/reports/Report/components/BubbleChart/utils.ts";
import BubbleChart from "@pages/reports/Report/components/BubbleChart";
import { useModal } from "@hooks/modal/useModal.tsx";
import GoalSettingModal from "@pages/reports/Report/components/modals/GoalSettingModal";
import { useNavigate } from "react-router-dom";

function Report() {
  const { year, month, reportList, isPending, isError } = useReport();
  useHeader(true, HEADER_MODE.analysis);
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const handleClickAccountSetting = () => {
    openModal({
      modalElement: (
        <GoalSettingModal
          closeModal={closeModal}
          handleSubmit={(v) => alert(v)}
          navigateTo={() => navigate("/somewhere")}
        />
      ),
      isBackdropClickable: true,
    });
  };

  const handleClickAccountInfo = () => {
    openModal({
      modalElement: (
        <Box p={5}>
          <div>account info</div>
          <Button variant="contained" color="error" onClick={closeModal}>
            모달 닫기
          </Button>
        </Box>
      ),
      isBackdropClickable: true,
    });
  };

  if (isPending) {
    return <>loading</>;
  }
  if (!reportList || isError) {
    return <>소비 데이터가 없습니다.</>;
  }

  return (
    <Stack bgcolor="#F7F7F8" px="20px" py="24px" gap="24px">
      <ReportTitle year={year} month={month} amount={333000000} />
      <Stack direction="row" gap="10px">
        <PredictBox
          title="이번 달 목표 지출"
          titleIcon={<AccountBalanceWalletIcon />}
          amount={1200000}
          navigateIcon={<SettingsIcon />}
          handleClick={handleClickAccountSetting}
        />
        <PredictBox
          title="사용 가능 금액"
          titleIcon={<InfoOutlinedIcon />}
          amount={579000}
          navigateIcon={<InfoOutlinedIcon />}
          handleClick={handleClickAccountInfo}
        />
      </Stack>
      <ReportBox
        title="월간 소비 리포트"
        navigateTo={PATH.reportMonthDetail}
        content={
          <BubbleChart
            bubbles={generateRandomBubbles2(reportList.slice(0, 5))}
          />
        }
      />
      <ReportBox
        title="소비 예측 리포트"
        navigateTo="/somewhere"
        content={<div>막대 그래프 미구현</div>}
      />
    </Stack>
  );
}

export default Report;
