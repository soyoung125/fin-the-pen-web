import { Box, Stack } from '@mui/material';

function IncomeExpenditureBox({
  income, expenditure, incomeColor, expenditureColor,
}) {
  return (
    <Stack mb={1}>
      <Box
        sx={{
          fontSize: 'x-small', paddingRight: 1, color: expenditureColor, height: '15px',
        }}
        display="flex"
        justifyContent="flex-end"
      >
        {expenditure}
      </Box>
      <Box
        sx={{
          fontSize: 'x-small', paddingRight: 1, color: incomeColor, height: '15px',
        }}
        display="flex"
        justifyContent="flex-end"
      >
        {income}
      </Box>
    </Stack>
  );
}

export default IncomeExpenditureBox;
