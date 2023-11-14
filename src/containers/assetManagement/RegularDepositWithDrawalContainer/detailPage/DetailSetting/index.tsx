/* eslint-disable @typescript-eslint/naming-convention */
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { REGULAR_DEPOSIT_WITHDRAWAL_TYPE } from "../../../../../constants/schedule";
import Title from "../../../../../components/common/Title";
import SwipeableDetailCard from "./SwipeableDetailCard";
import { Schedule } from "../../../../../types/schedule";
import { makeGroupForRegularData } from "@utils/tools.ts";
import useSchedule from "../../../../../hooks/useSchedule";

interface StateData {
  type: "+" | "-";
  data: Schedule[];
}

function DetailSetting() {
  const { schedules } = useSchedule();
  const { state } = useLocation();
  const { type, data }: StateData = state;
  const price_type = type === "+" ? "Plus" : "Minus";
  const [detailData, setDetailData] = useState<{ [key: string]: Schedule[] }>(
    {},
  );

  // 추후 반복 일정에 대한 기획이 고정되면 살리기
  useEffect(() => {
    // setDetailData(
    //   makeGroupForRegularData(
    //     schedules.filter((s) => s.repeating_cycle !== "없음" && s.type === type)
    //   )
    // );
  }, [schedules]);

  return (
    <>
      <Title
        type={state.type}
        title={`정기 ${REGULAR_DEPOSIT_WITHDRAWAL_TYPE[price_type]} 내역`}
      >
        <Box sx={{ color: "primary.main" }}>{`총 ${
          Object.keys(detailData).length
        }건`}</Box>
      </Title>

      {Object.keys(detailData).map((d) => (
        <SwipeableDetailCard data={detailData[d]} key={detailData[d][0].id} />
      ))}
    </>
  );
}

export default DetailSetting;
