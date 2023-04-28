import { Box, Stack } from '@mui/material';

interface StatusStackProps {
  title: string,
  content: string,
}

function StatusStack({ title, content }: StatusStackProps) {
  return (
    <Stack width="50%" sx={{ textAlign: 'center' }}>
      <Box>{title}</Box>
      <Box sx={{
        typography: 'h5', fontWeight: 'bold', color: 'primary.main', marginTop: 1,
      }}
      >
        {content}
      </Box>
    </Stack>
  );
}

export default StatusStack;
