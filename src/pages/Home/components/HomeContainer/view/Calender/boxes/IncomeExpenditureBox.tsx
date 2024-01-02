import { Box, Stack } from '@mui/material';

interface IncomeExpenditureBoxProps {
  income: string;
  expenditure: string;
  incomeColor: '#f8bbd0' | '#9e9e9e';
  expenditureColor: '#81d4fa' | '#9e9e9e';
  pickersDay: JSX.Element;
  children?: JSX.Element;
}

function IncomeExpenditureBox({
  income, expenditure, incomeColor, expenditureColor, pickersDay, children,
}: IncomeExpenditureBoxProps) {
  return (
    <Box sx={{ width: 'calc(100vw / 7)' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {pickersDay}
      </Box>
      <Stack mb={1}>
        <Box
          sx={{
            fontSize: 'x-small', paddingRight: 1, color: expenditureColor, height: '8px',
          }}
          display="flex"
          justifyContent="flex-end"
        >
          {expenditure !== '0' && `-${expenditure}`}
        </Box>
        <Box
          sx={{
            fontSize: 'x-small', paddingRight: 1, color: incomeColor, height: '6px',
          }}
          display="flex"
          justifyContent="flex-end"
        >
          {income !== '0' && `+${income}`}
        </Box>
      </Stack>
      {children}
    </Box>
  );
}

export default IncomeExpenditureBox;
