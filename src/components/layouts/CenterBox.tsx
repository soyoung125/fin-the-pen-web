import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

function CenterBox({ children }: PropsWithChildren) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="calc(100dvh - 126px)"
      zIndex="1000"
    >
      {children}
    </Box>
  );
}
export default CenterBox;
