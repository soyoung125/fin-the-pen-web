import { Box, Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import RoundedPaper from '../../../../../components/common/RoundedPaper';
import { selectSavingPriority, setSavingPriority } from '../../../../../app/redux/slices/assetSlice';

function PrioritySetting() {
  const dispatch = useDispatch();
  const savingPriority = useSelector(selectSavingPriority);

  return (
    <RoundedPaper my={1}>
      <Box>저축 우선순위</Box>
      <Grid container spacing={1} mt={1}>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant={savingPriority === 'saving' ? 'contained' : 'outlined'}
            onClick={() => dispatch(setSavingPriority('saving'))}
          >
            한해 저축 목표
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant={savingPriority === 'personal' ? 'contained' : 'outlined'}
            onClick={() => dispatch(setSavingPriority('personal'))}
          >
            Personal Goal
          </Button>
        </Grid>
      </Grid>
    </RoundedPaper>
  );
}

export default PrioritySetting;
