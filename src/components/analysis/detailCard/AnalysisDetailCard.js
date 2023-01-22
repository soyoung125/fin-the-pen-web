/* eslint-disable max-len */
import {
  Alert,
  Button,
  Card, CardContent, CardHeader, IconButton, Paper, Stack, Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssetManagement from './AssetManagement';
import ALERTS from '../../../utils/constants/alerts';

function AnalysisDetailCard({ closeDetailCard, selectedItem }) {
  const random = Math.floor((Math.random() * 5));

  return (
    <Card sx={{
      height: '100%',
    }}
    >
      <CardHeader
        action={(
          <IconButton onClick={() => closeDetailCard()}>
            <CloseIcon />
          </IconButton>
        )}
      />
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
          <Typography variant="h4">{`${selectedItem.label} 지출 내역`}</Typography>
          <Typography>{`총 ${selectedItem.history.length}건`}</Typography>
        </Stack>
        <Stack sx={{ borderRadius: 3, marginBottom: 2 }}>
          {selectedItem.history.map((s) => (
            <Paper sx={{ marginY: 1, padding: 1 }}>
              <Stack direction="row" justifyContent="space-between">
                <Typography>{moment(s.date).format('MM월 DD일')}</Typography>
                <Typography>{s.event_name}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>
                  <AccessTimeIcon fontSize="small" />
                  {s.start_time}
                </Typography>
                <Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      borderRadius: 5, minWidth: 0, width: '20px', height: '20px',
                    }}
                  >
                    {s.type}
                  </Button>
                  {s.expected_spending}
                </Typography>
              </Stack>
            </Paper>
          ))}
        </Stack>
        <AssetManagement />
        <Alert color={ALERTS[random].color} sx={{ width: '100%' }} icon={ALERTS[random].icon}>
          {ALERTS[random].message}
        </Alert>
      </CardContent>
    </Card>
  );
}

export default AnalysisDetailCard;
