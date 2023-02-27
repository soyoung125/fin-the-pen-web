import {
  Alert,
  Box,
  Card, CardHeader, IconButton, Stack,
} from '@mui/material';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import AssetManagement from './AssetManagement';
import SpendingDetailCard from './SpendingDetailCard';
import { CONSUMPTION_ALERTS } from '../../../utils/constants/alerts';
import Title from '../../assetManagement/pages/regularDepositWithdrawal/regular/Title';

function AnalysisDetailCard({ closeDetailCard, selectedItem }) {
  const [data, setData] = useState(selectedItem.history);
  const [sortByDate, setSortByDate] = useState(true);
  const random = Math.floor((Math.random() * 5));

  useEffect(() => {
    if (sortByDate) {
      setData([...data.sort((a, b) => new Date(a.date) - new Date(b.date))]);
    } else {
      setData([...data.sort((a, b) => b.expected_spending - a.expected_spending)]);
    }
  }, [sortByDate]);

  return (
    <Card sx={{ height: '100%', border: '0px' }} variant="outlined">
      <CardHeader
        action={(
          <IconButton onClick={() => closeDetailCard()}>
            <CloseIcon />
          </IconButton>
        )}
      />
      <Box px={2}>
        <Title
          type={null}
          title={(
            <Stack direction="row">
              <Box mr={1}>{`${selectedItem.label} 지출 내역`}</Box>
              <Box
                sx={{
                  typography: 'subtitle2', color: 'primary.main', display: 'flex', mt: 'auto',
                }}
              >
                {`총 ${selectedItem.history.length}건`}
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
          {data.map((s) => (
            <SpendingDetailCard schedule={s} key={Math.random()} bgColor={selectedItem.color} />
          ))}
        </Stack>
        <AssetManagement selectedItem={selectedItem} />
        <Alert color={CONSUMPTION_ALERTS[random].color} sx={{ width: '100%' }} icon={CONSUMPTION_ALERTS[random].icon}>
          {CONSUMPTION_ALERTS[random].message}
        </Alert>
      </Box>
    </Card>
  );
}

export default AnalysisDetailCard;
