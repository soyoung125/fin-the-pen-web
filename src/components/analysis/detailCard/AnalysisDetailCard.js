/* eslint-disable max-len */
import {
  Card, CardContent, CardHeader, IconButton, List, ListItem, ListItemText,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function AnalysisDetailCard({ closeDetailCard, selectedItem }) {
  return (
    <Card sx={{
      width: '100%', height: '100%',
    }}
    >
      <CardHeader
        title={selectedItem.label}
        action={(
          <IconButton aria-label="settings" onClick={() => closeDetailCard()}>
            <CloseIcon />
          </IconButton>
        )}
      />
      <CardContent>
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
