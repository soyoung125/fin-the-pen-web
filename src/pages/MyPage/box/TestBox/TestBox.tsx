import { Stack, Typography } from '@mui/material';

interface TestBoxProps {
  title: string;
  children: React.ReactNode;
}
function TestBox({ title, children }: TestBoxProps) {
  return (
    <Stack spacing={2} m={2} border={1} p={2}>
      <Typography>{title}</Typography>
      <Typography sx={{ wordBreak: 'break-all' }}>
        {children}
      </Typography>
    </Stack>
  );
}
export default TestBox;
