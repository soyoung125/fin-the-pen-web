import { Alert, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AnalysisGraph from '../../components/analysis/AnalysisGraph';
import AnalysisHeader from '../../components/analysis/AnalysisHeader';
import AnalysisList from '../../components/analysis/analysisList/AnalysisList';
import AnalysisDetailCard from '../../components/analysis/detailCard/AnalysisDetailCard';
import CATEGORIES from '../../utils/constants/categories';
import { selectSchedules } from '../../utils/redux/schedule/scheduleSlice';

function AnalysisContainer() {
  const [data, setData] = useState([]); // color 추가할 계획
  const [total, setTotal] = useState([]); // color 추가할 계획
  const [showDetailCard, setShowDetailCard] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const schedules = useSelector(selectSchedules);

  useEffect(() => {
    const newData = [];
    // eslint-disable-next-line no-unused-vars
    let newTotal = 0;
    // eslint-disable-next-line array-callback-return
    CATEGORIES.map((c) => {
      const schByCategory = schedules.filter((s) => (s.category.type !== '수입') && (s.category.title === c.title));
      const cnt = schByCategory.length;
      if (cnt > 0) {
        // eslint-disable-next-line function-paren-newline
        const spending = schByCategory.reduce(
          // eslint-disable-next-line prefer-arrow-callback
          function (sum, schedule) {
            return sum + parseInt(schedule.expected_spending, 10);
          }, 0);
        if (spending > 0) {
          newData.push({
            id: c.title,
            label: c.title,
            value: spending,
          });
          newTotal += spending;
        }
      }
    });
    setTotal(newTotal);
    setData(newData.sort((a, b) => b.value - a.value));
  }, []);

  const clickListItem = (category) => {
    setShowDetailCard(true);
    setSelectedItem(category);
  };

  const closeDetailCard = () => {
    setShowDetailCard(false);
  };

  return (
    <Box>
      <AnalysisHeader />
      {total > 0 ? (
        <>
          <Box sx={{ width: '100vw', height: '100vw', padding: 5 }}>
            {showDetailCard
              ? <AnalysisDetailCard closeDetailCard={closeDetailCard} selectedItem={selectedItem} />
              : <AnalysisGraph data={data} total={total} />}
          </Box>
          <AnalysisList data={data} clickListItem={clickListItem} />
        </>
      ) : <Alert sx={{ margin: 2 }} severity="info">이체/지출 데이터가 존재하지 않습니다.</Alert>}
    </Box>
  );
}
export default AnalysisContainer;
/**
 * 분석 페이지
 */
