/* eslint-disable max-len */
import { Alert, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AnalysisGraph from "./AnalysisGraph";
import AnalysisList from "./analysisList/AnalysisList";
import { PATH } from "../../../constants/path.ts";
import useHeader from "../../../hooks/useHeader";
import {
  selectAnalyzedData,
  selectDate,
  updateAnalyzedData,
} from "../../../app/redux/slices/scheduleSlice";
import { AnalysisData, HEADER_MODE } from "../../../types/common";
import { useAppDispatch } from "../../../app/redux/hooks";

function AnalysisContainer() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const date = useSelector(selectDate);
  const { data, total } = useSelector(selectAnalyzedData);
  const [widthRatio, setWidthRatio] = useState(1);

  useHeader(true, HEADER_MODE.analysis);

  useEffect(() => {
    // resize 이벤트 핸들러
    const handleResize = () => {
      const newWidthRatio = Math.ceil(window.innerWidth / 450) * 50;
      if (newWidthRatio === widthRatio) return;
      setWidthRatio(Math.ceil(window.innerWidth / 450) * 50);
    };

    // 컴포넌트가 마운트될 때 resize 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 resize 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(updateAnalyzedData());
  }, [date]);

  const clickListItem = (category: AnalysisData) => {
    navigate(PATH.analysisDetail, {
      state: {
        color: category.color,
        category: category.label,
        type: category.nestedType,
      },
    });
  };

  const hexToRGB = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return `rgb(${r}, ${g}, ${b})`;
  };

  return total > 0 ? (
    <>
      <Box
        sx={{
          width: "100vw",
          height: `calc(100vw - ${widthRatio}px)`,
          paddingX: 1,
        }}
      >
        <AnalysisGraph data={data} total={total} widthRatio={widthRatio} />
      </Box>
      <AnalysisList
        data={data}
        clickListItem={clickListItem}
        hexToRGB={hexToRGB}
      />
    </>
  ) : (
    <Alert sx={{ margin: 2 }} severity="info">
      이체/지출 데이터가 존재하지 않습니다.
    </Alert>
  );
}

export default AnalysisContainer;
/**
 * 분석 페이지
 */
