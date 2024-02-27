import ReportTitle from "@pages/reports/Report/components/ReportTitle";
import { Stack } from "@mui/material";
import PredictBox from "@pages/reports/Report/components/PredictBox";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import useReport from "@hooks/useReport.ts";
import useHeader from "@hooks/useHeader.ts";
import { HEADER_MODE } from "@app/types/common.ts";
import { useModal } from "@hooks/modal/useModal.tsx";
import GoalSettingModal from "@pages/reports/Report/components/modals/GoalSettingModal";
import { useNavigate } from "react-router-dom";
import UseableInfoModal from "@pages/reports/Report/components/modals/UseableInfoModal";
import ReportBox from "@pages/reports/Report/components/layout/ReportBox";
import ReportLayout from "@pages/reports/Report/components/layout/ReportLayout";
import FixedTransaction from "@pages/reports/Report/components/FixedTransaction";
import MonthlyReport from "@pages/reports/Report/components/MonthlyReport";
import moment from "moment";
import { PATH } from "@constants/path.ts";

function Report() {
  const {
    year,
    month,
    report,
    isPending,
    isError,
    pickMonth,
    setExpenditureGoal,
  } = useReport();
  useHeader(true, HEADER_MODE.analysis);
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const handleClickAccountSetting = () => {
    openModal({
      modalElement: (
        <GoalSettingModal
          closeModal={closeModal}
          handleSubmit={(v) => setExpenditureGoal(v)}
          navigateTo={() => navigate("/somewhere")}
        />
      ),
      isBackdropClickable: true,
    });
  };

  const handleClickAccountInfo = () => {
    openModal({
      modalElement: <UseableInfoModal closeModal={closeModal} />,
      isBackdropClickable: true,
    });
  };

  if (isPending) {
    return <>loading</>;
  }
  if (!report || isError) {
    return <>소비 데이터가 없습니다.</>;
  }

  return (
    <Stack bgcolor="#F7F7F8" px="20px" py="24px" gap="24px">
      <ReportTitle
        year={year}
        month={month}
        amount={Number(report.totalSpentToday)}
        pickMonth={pickMonth}
      />
      <Stack direction="row" gap="10px">
        <PredictBox
          title="이번 달 목표 지출"
          titleIcon={<AccountBalanceWalletIcon />}
          amount={Number(report.expenseGoalAmount)}
          navigateIcon={<SettingsIcon />}
          handleClick={handleClickAccountSetting}
        />
        <PredictBox
          title="사용 가능 금액"
          titleIcon={<InfoOutlinedIcon />}
          amount={Number(report.availableAmount)}
          navigateIcon={<InfoOutlinedIcon />}
          handleClick={handleClickAccountInfo}
        />
      </Stack>
      <ReportBox
        content={
          <ReportLayout
            title="월간 소비 리포트"
            navigateTo={PATH.reportMonthDetail}
            content={<>서버 구현 중</>}
          />
        }
      />
      <ReportBox
        content={
          <Stack spacing={5}>
            <ReportLayout
              title="소비 예측 리포트"
              content={
                // <PredictReport
                //   selected={selected}
                //   setSelected={setSelected}
                //   month={month}
                //   goal={goal}
                //   predict={predict}
                //   used={used}
                //   useable={useable}
                // />
                <>서버 구현 중</>
              }
            />
            <ReportLayout
              title={`${month}월 고정 입출금`}
              content={
                <Stack spacing={2}>
                  <FixedTransaction
                    title={"고정 수입"}
                    amount={Number(report.Nmonth_fixed.fixed_deposit)}
                    month={moment(report.Nmonth_fixed.previous_month).format(
                      "M"
                    )}
                    difference={Number(report.Nmonth_fixed.previous_diff_plus)}
                    type="+"
                  />
                  <FixedTransaction
                    title={"고정 지출"}
                    amount={Number(report.Nmonth_fixed.fixed_withdraw)}
                    month={moment(report.Nmonth_fixed.previous_month).format(
                      "M"
                    )}
                    difference={Number(report.Nmonth_fixed.previous_diff_minus)}
                    type="-"
                  />
                </Stack>
              }
            />
            <ReportLayout
              title="월별 소비 리포트"
              content={
                <MonthlyReport
                  month={month}
                  previousSpending={Number(report.month_report.previous)}
                  spending={Number(report.month_report.current)}
                  twoMonthsAgoSpending={Number(
                    report.month_report.second_previous
                  )}
                />
              }
            />
          </Stack>
        }
      />
    </Stack>
  );
}

export default Report;
