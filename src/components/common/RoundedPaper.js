import { Paper } from '@mui/material';

function RoundedPaper({ children, my }) {
  return (
    <Paper
      elevation={8}
      sx={{
        marginY: my, padding: 2, borderRadius: 3,
      }}
    >
      {children}
    </Paper>
  );
}

export default RoundedPaper;
