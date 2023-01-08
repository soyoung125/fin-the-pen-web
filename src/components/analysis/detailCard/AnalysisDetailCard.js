import {
  Card, CardContent, CardHeader, IconButton, Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function AnalysisDetailCard({ closeDetailCard, selectedItem }) {
  return (
    <Card sx={{ width: '80vw', height: '80vw', margin: '10vw' }}>
      <CardHeader
        title={selectedItem.label}
        action={(
          <IconButton aria-label="settings" onClick={() => closeDetailCard()}>
            <CloseIcon />
          </IconButton>
        )}
      />
      <CardContent>
        <Typography>
          {selectedItem.value}
          원
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AnalysisDetailCard;
