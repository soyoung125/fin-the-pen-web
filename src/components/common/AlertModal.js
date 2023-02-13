import {
  Box,
  Button,
  Dialog, Divider, Grid, Stack, Typography,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function AlertModal(props) {
  const {
    open, handleClose, handleClickYes,
  } = props;
  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { borderRadius: '1rem', width: '100%' } }}
      open={open}
      scroll="body"
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button disabled />
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          알림
        </Typography>
        <Button onClick={handleClose}>
          <ClearIcon />
        </Button>
      </Stack>
      <Box my={1}>
        <Divider />
      </Box>

      <Box mx={3} my={2}>
        <Typography>정보를 수정하시겠습니까?(추후 종류에 따라 다른 문구 뜨도록 수정 예쩡)</Typography>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" sx={{ backgroundColor: '#D8D8D8' }} onClick={handleClose}>아니오</Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" onClick={handleClickYes}>네</Button>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
}

export default AlertModal;
