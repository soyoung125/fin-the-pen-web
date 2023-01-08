import {
  Card, CardContent, CardHeader, IconButton, Typography,
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
        <Typography>
          {selectedItem.value}
          원 사용
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AnalysisDetailCard;
