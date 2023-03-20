import { Box, Stack } from '@mui/material';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Title from '../../components/assetManagement/pages/regularDepositWithdrawal/regular/Title';
import SpendingDetailCard from '../../components/analysis/detailCard/SpendingDetailCard';
import { selectDate, selectSchedules } from '../../utils/redux/schedule/scheduleSlice';
import AssetManagement from '../../components/analysis/detailCard/AssetManagement';
import { selectAssetsByCategory } from '../../utils/redux/asset/assetSlice';

function AnalysisDetailContainer() {
  const { state } = useLocation();
  const { color, category, type } = state;
  const date = useSelector(selectDate);
  const schedules = useSelector(selectSchedules);
  const { asset } = useSelector(selectAssetsByCategory)
    .find((c) => c.type === type).categories.find((c) => c.title === category);
  const [selectedItem, setSelectedItem] = useState(schedules.filter((s) => date.isSame(s.date, 'month') && s.category === category));
  const [spending, setSpending] = useState(0);
  const [sortByDate, setSortByDate] = useState(true);

  useEffect(() => {
    setSelectedItem([...schedules.filter((s) => date.isSame(s.date, 'month') && s.category === category).sort((a, b) => new Date(a.date) - new Date(b.date))]);
  }, [date]);

  useEffect(() => {
    setSpending(selectedItem
      .reduce((result, schedule) => result + parseInt(schedule.expected_spending, 10), 0));
  }, [selectedItem]);

  useEffect(() => {
    if (sortByDate) {
      setSelectedItem([...selectedItem.sort((a, b) => new Date(a.date) - new Date(b.date))]);
    } else {
      setSelectedItem([...selectedItem.sort((a, b) => b.expected_spending - a.expected_spending)]);
    }
  }, [sortByDate]);

  return (
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
          <Box sx={{ display: 'flex', my: 'auto', color: 'primary.main' }} onClick={() => setSortByDate(!sortByDate)}>{sortByDate ? '날짜순' : '금액순'}</Box>
          <ArrowDropDownRoundedIcon fontSize="large" sx={{ color: 'primary.main' }} />
        </Stack>
      </Title>
      <Stack sx={{ borderRadius: 3, marginBottom: 2 }}>
        {selectedItem.map((s) => (
          <SpendingDetailCard schedule={s} key={Math.random()} bgColor={color} />
        ))}
      </Stack>
      <AssetManagement
        selectedItem={selectedItem}
        spending={spending}
        bgColor={color}
        type={type}
        asset={asset}
        balance={parseInt(asset, 10) - spending}
      />
    </Box>
  );
}

export default AnalysisDetailContainer;
