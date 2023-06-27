import { Box, Button, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react";

interface InputModalProps {
  date: number,
  handleChange: (d: number) => void,
  closeTransferDateModal: () => void,
}
function InputModal({ date, handleChange, closeTransferDateModal }: InputModalProps) {
  const Date = Array.from({length: 31}, (_, i) => i + 1);
  const [transferDate, setTransferDate] = useState(date);
  return (
    <Stack p={2} spacing={1}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <IconButton>
          <ClearIcon />
        </IconButton>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>저축 목표 설정</Typography>
        <IconButton onClick={() => closeTransferDateModal()}>
          <ClearIcon />
        </IconButton>
      </Stack>
      <Box my={1}>
        <Divider />
      </Box>
      <Grid container columns={14}>
        {Date.map((d) => 
          <Grid item xs={2}>
            <IconButton
              onClick={() => setTransferDate(d)}
              color={transferDate === d ? 'primary' : 'inherit'}
            >{d}</IconButton>
          </Grid>)}
      </Grid>
      <Button
        fullWidth
        variant="contained"
        onClick={() => {
          handleChange(transferDate)
          closeTransferDateModal();
        }}
      >
        송금일 설정하기
      </Button>
    </Stack>
  );
}

export default InputModal;
