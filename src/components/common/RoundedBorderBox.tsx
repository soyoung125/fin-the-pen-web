import { Box } from '@mui/material';

interface ProundedBorderBoxProps {
  children: JSX.Element,
  greyBorder?: Boolean,
}

function RoundedBorderBox({ children, greyBorder }: ProundedBorderBoxProps) {
  return (
    <Box sx={{
      border: '2px solid', borderRadius: 2, borderColor: greyBorder ? '#EDF1F7' : 'primary.main',
    }}
    >
      {children}
    </Box>
  );
}

export default RoundedBorderBox;
