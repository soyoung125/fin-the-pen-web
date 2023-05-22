import { Box, Button, Grid } from '@mui/material';
import RoundedPaper from '../../../../components/common/RoundedPaper';

interface PrioritySettingProps {
  priority: string,
  handlePriority: (value: any) => void,
}

function PrioritySetting({ priority, handlePriority }: PrioritySettingProps) {
  return (
    <RoundedPaper my={1}>
      <Box>저축 우선순위</Box>
      <Grid container spacing={1} mt={1}>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant={priority === 'saving' ? 'contained' : 'outlined'}
            onClick={() => handlePriority('saving')}
          >
            한해 저축 목표
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant={priority === 'personal' ? 'contained' : 'outlined'}
            onClick={() => handlePriority('personal')}
          >
            Personal Goal
          </Button>
        </Grid>
      </Grid>
    </RoundedPaper>
  );
}

export default PrioritySetting;
