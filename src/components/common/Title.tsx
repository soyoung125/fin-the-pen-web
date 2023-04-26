import {
  Box, Button, Stack,
} from '@mui/material';

interface TitleProps {
  type: string | null,
  title: JSX.Element,
  children: JSX.Element,
}

function Title({ type, title, children }: TitleProps) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" mt={3} mb={1}>
      <Stack direction="row" sx={{ display: 'flex', my: 'auto' }}>
        {type && (
        <Button
          variant="contained"
          size="small"
          sx={{
            borderRadius: 5, minWidth: 0, width: '20px', height: '20px', marginY: 'auto', mr: 1,
          }}
        >
          {type}
        </Button>
        )}
        <Box sx={{ typography: 'h6', fontWeight: 'bold' }}>{title}</Box>
      </Stack>
      {children}
    </Stack>
  );
}

export default Title;
