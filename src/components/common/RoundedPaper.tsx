import { Box } from '@mui/material';
import React from 'react';

interface RoundedPaperProps {
  children: React.ReactNode;
  my: number;
}
function RoundedPaper({ children, my }: RoundedPaperProps) {
  return (
    <Box
      sx={{
        marginY: my, padding: 2, borderRadius: '8px', boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.15)',
      }}
    >
      {children}
    </Box>
  );
}

export default RoundedPaper;
