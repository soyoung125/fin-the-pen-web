import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';

interface WeeklyStatementProps {
  expenditure: string;
  income: string;
}

function WeeklyStatement({ expenditure, income }: WeeklyStatementProps) {
  return (
    <Box sx={{
      background: grey[200], overflow: 'visible', borderRadius: 3, display: 'flex', justifyContent: 'flex-end', paddingX: 2, height: '20px',
    }}
    >
      <Box sx={{ fontSize: 'small', paddingRight: 1, color: 'primary.main' }}>
        {`${parseInt(expenditure, 10) < 0 ? expenditure : '-0'}`}
      </Box>
      <Box sx={{ fontSize: 'small', color: grey[500] }}>
        {`+${income}`}
      </Box>
    </Box>
  );
}

export default WeeklyStatement;
