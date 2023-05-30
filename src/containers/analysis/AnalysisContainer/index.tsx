/* eslint-disable max-len */
import { Alert, Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AnalysisGraph from './AnalysisGraph';
import AnalysisList from './analysisList/AnalysisList';
import PATH from '../../../domain/constants/path';
import useHeader from '../../../hooks/useHeader';
import {
  selectAnalyzedData, selectDate, updateAnalyzedData
} from '../../../app/redux/slices/scheduleSlice';
import { AnalysisData } from '../../../types/common';

function AnalysisContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const date = useSelector(selectDate);
  const { data, total } = useSelector(selectAnalyzedData);

  useHeader(true, 'analysis');

  useEffect(() => {
    dispatch(updateAnalyzedData());
  }, [date]);

  const clickListItem = (category: AnalysisData) => {
    navigate(PATH.analysisDetail, { state: { color: category.color, category: category.label, type: category.nestedType } });
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

  return (
    total > 0 ? (
      <>
        <Box sx={{ width: '100vw', height: "calc(100vw - 50px)", paddingX: 1 }}>
          <AnalysisGraph data={data} total={total} />
        </Box>
        <AnalysisList data={data} clickListItem={clickListItem} hexToRGB={hexToRGB} />
      </>
    ) : <Alert sx={{ margin: 2 }} severity="info">이체/지출 데이터가 존재하지 않습니다.</Alert>
  );
}
export default AnalysisContainer;
/**
 * 분석 페이지
 */
