import { Alert, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AnalysisGraph from '../../components/analysis/AnalysisGraph';
import AnalysisHeader from '../../components/analysis/AnalysisHeader';
import AnalysisList from '../../components/analysis/AnalysisList';
import CATEGORIES from '../../utils/constants/categories';
import { selectSchedules } from '../../utils/redux/schedule/scheduleSlice';

function AnalysisContainer() {
  const [data, setData] = useState([]); // color 추가 계획
  const schedules = useSelector(selectSchedules);
  // eslint-disable-next-line no-unused-vars
  let total = 0;

  useEffect(() => {
    const newData = [];
    // eslint-disable-next-line array-callback-return
    CATEGORIES.map((c) => {
      const schByCategory = schedules.filter((s) => (s.categories || []).includes(c.title));
      const cnt = schByCategory.length;
      if (cnt > 0) {
        newData.push({ ...c, value: cnt });
        total += cnt;
      }
    });
    setData(newData);
  }, []);

  return (
    <Box>
      <AnalysisHeader />
      {data.length > 0 ? (
        <>
          <AnalysisGraph data={data} total={total} />
          <AnalysisList />
        </>
      ) : <Alert severity="warning">This is an info alert — check it out!</Alert>}
    </Box>
  );
}
export default AnalysisContainer;
/**
 * 분석 페이지
 */
