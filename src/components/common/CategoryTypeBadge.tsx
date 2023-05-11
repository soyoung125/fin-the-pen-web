import { Box } from '@mui/material';

function CategoryTypeBadge({ color, mr }: { color: string; mr: number; }) {
  return (
    <Box
      sx={{
        width: '15px', height: '15px', border: '4px solid', borderRadius: 3, borderColor: color, marginY: 'auto', marginRight: mr,
      }}
    />
  );
}

export default CategoryTypeBadge;
