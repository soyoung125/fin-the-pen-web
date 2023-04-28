import { Box } from '@mui/material';

interface ProundedBorderBoxProps {
  children: JSX.Element,
}

function RoundedBorderBox({ children }: ProundedBorderBoxProps) {
  return (
    <Box sx={{
      border: '2px solid', borderRadius: 2, borderColor: 'primary.main',
    }}
    >
      {children}
    </Box>
  );
}

export default RoundedBorderBox;
