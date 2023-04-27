import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

function CenterBox({ children }: PropsWithChildren) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      {children}
    </Box>
  );
}
export default CenterBox;
