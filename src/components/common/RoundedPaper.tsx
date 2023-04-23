import { Paper } from '@mui/material';
import React from 'react';

interface RoundedPaperProps {
  children: React.ReactNode;
  my: number;
}
function RoundedPaper({ children, my }: RoundedPaperProps) {
  return (
    <Paper
      elevation={1}
      sx={{
        marginY: my, padding: 2, borderRadius: 3,
      }}
    >
      {children}
    </Paper>
  );
}

export default RoundedPaper;
