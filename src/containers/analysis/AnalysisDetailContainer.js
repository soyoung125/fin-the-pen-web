import { Box, Stack } from '@mui/material';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Title from '../../components/assetManagement/pages/regularDepositWithdrawal/regular/Title';
import SpendingDetailCard from '../../components/analysis/detailCard/SpendingDetailCard';
import { selectDate, selectSchedules } from '../../utils/redux/schedule/scheduleSlice';
import AnalysisHeader from '../../components/analysis/AnalysisHeader';

function AnalysisDetailContainer() {
  const { state } = useLocation();
  const { color, category } = state;
  const date = useSelector(selectDate);
  const schedules = useSelector(selectSchedules);
  const [selectedItem, setSelectedItem] = useState(schedules.filter((s) => date.isSame(s.date, 'month') && s.category === category));
  const [sortByDate, setSortByDate] = useState(true);

  useEffect(() => {
    setSelectedItem([...schedules.filter((s) => date.isSame(s.date, 'month') && s.category === category).sort((a, b) => new Date(a.date) - new Date(b.date))]);
    console.log(schedules.filter((s) => date.isSame(s.date, 'month') && s.category === category).sort((a, b) => new Date(a.date) - new Date(b.date)));
  }, [date]);

  useEffect(() => {
    if (sortByDate) {
      setSelectedItem([...selectedItem.sort((a, b) => new Date(a.date) - new Date(b.date))]);
    } else {
      setSelectedItem([...selectedItem.sort((a, b) => b.expected_spending - a.expected_spending)]);
    }
  }, [sortByDate]);

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  return (
    <>
      <AnalysisHeader />
      <Box px={2}>
        <Title
          type={null}
          title={(
            <Stack direction="row">
              <Box mr={1}>{`${category} 지출 내역`}</Box>
              <Box
                sx={{
                  typography: 'subtitle2', color: 'primary.main', display: 'flex', mt: 'auto',
                }}
              >
                {`총 ${selectedItem.length}건`}
              </Box>
            </Stack>
              )}
        >
          <Stack direction="row">
            <Box sx={{ display: 'flex', my: 'auto', color: 'primary.main' }} onClick={() => setSortByDate(!sortByDate)}>{sortByDate ? '최신순' : '금액순'}</Box>
            <ArrowDropDownRoundedIcon fontSize="large" sx={{ color: 'primary.main' }} />
          </Stack>
        </Title>
        <Stack sx={{ borderRadius: 3, marginBottom: 2 }}>
          {selectedItem.map((s) => (
            <SpendingDetailCard schedule={s} key={Math.random()} bgColor={color} />
          ))}
        </Stack>
        {/* <AssetManagement selectedItem={selectedItem} /> */}
      </Box>

    </>
  );
}

export default AnalysisDetailContainer;
