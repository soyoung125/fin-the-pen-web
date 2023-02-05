import { Paper } from '@mui/material';

function RoundedPaper({ children }) {
  return (
    <Paper
      elevation={8}
      sx={{
        marginTop: 2, marginBottom: 5, padding: 2, textAlign: 'center', borderRadius: 3,
      }}
    >
      {children}
    </Paper>
  );
}

export default RoundedPaper;
