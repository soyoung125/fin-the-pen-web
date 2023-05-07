/* eslint-disable max-len */
/* eslint-disable array-callback-return */
import { Alert, Box } from '@mui/material';
import {
  blue, blueGrey, brown, green, indigo, pink, red,
} from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AnalysisGraph from './AnalysisGraph';
import AnalysisList from './analysisList/AnalysisList';
import { CATEGORIES } from '../../../domain/constants/categories';
import PATH from '../../../domain/constants/path';
import useHeader from '../../../hooks/useHeader';
import {
  selectAnalyzedData, selectDate, updateAnalyzedData
} from '../../../domain/redux/schedule/scheduleSlice';
import { AnalysisData } from '../../../types/common';
import useSchedule from '../../../hooks/useSchedule';

function AnalysisContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const date = useSelector(selectDate);
  const data = useSelector(selectAnalyzedData);
  const [total, setTotal] = useState(0);
  const { schedules } = useSchedule();
  const colorList = [
    indigo[100], indigo[200], indigo[300], indigo[400], indigo[500], indigo[600], indigo[700], indigo[800],
    green[100], green[200], green[300],
    blue[100], blue[200], blue[300], blue[400], blue[500], blue[600], blue[700],
    blueGrey[100], blueGrey[200],
    pink[100], red[100], pink[200], red[200], pink[300],
    brown[100], brown[200],
  ];

  useHeader(true, 'analysis');

  useEffect(() => {
    const newData: AnalysisData[] = [];
    let newTotal = 0;
    const expenditureCategories = CATEGORIES.filter((c) => c.type === '지출' || c.nestedType === '출금');

    expenditureCategories.map((c, index) => {
      const schByCategory = schedules.filter((s) => date.isSame(s.date, 'month') && s.category === c.title);
      const cnt = schByCategory.length;
      if (cnt > 0) {
        const spending = schByCategory
          .reduce((result, schedule) => result + parseInt(schedule.expected_spending, 10), 0);
        if (spending > 0) {
          console.log(c);
          newData.push({
            id: c.title,
            label: c.title,
            nestedType: c.nestedType,
            value: spending,
            color: colorList[index],
          });
          newTotal += spending;
        }
      }
    }, []);

    setTotal(newTotal);
    dispatch(updateAnalyzedData(newData.sort((a, b) => b.value - a.value)));
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
        <Box sx={{ width: '100vw', height: '100vw', padding: 5 }}>
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
