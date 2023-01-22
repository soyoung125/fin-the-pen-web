/* eslint-disable max-len */
import {
  Alert,
  Card, CardContent, CardHeader, IconButton, List, ListItem, ListItemText, Stack, Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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
        <List>
          {selectedItem.history.map((s) => (
            <ListItem>
              <ListItemText
                key={Math.random()}
                primary={s.event_name}
              />
            </ListItem>
          ))}
        </List>
        <AssetManagement />
        <Alert color={ALERTS[random].color} sx={{ width: '100%' }} icon={ALERTS[random].icon}>
          {ALERTS[random].message}
        </Alert>
      </CardContent>
    </Card>
  );
}

export default AnalysisDetailCard;
