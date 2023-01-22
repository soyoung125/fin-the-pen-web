/* eslint-disable max-len */
import {
  Card, CardContent, CardHeader, IconButton, List, ListItem, ListItemText, Stack, Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function AnalysisDetailCard({ closeDetailCard, selectedItem }) {
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
      </CardContent>
    </Card>
  );
}

export default AnalysisDetailCard;
