import { IconButton, Stack } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface SwitchingHeaderProps {
  children: React.ReactNode,
  handleClickLeftArrow: () => void,
  handleClickRightArrow: () => void,
  justifyContent: string,
}

function SwitchingHeader({
  children, handleClickLeftArrow, handleClickRightArrow, justifyContent,
}: SwitchingHeaderProps) {
  return (
    <Stack direction="row" alignItems="center" justifyContent={justifyContent} sx={{ height: '100%' }}>
      <IconButton
        aria-label="delete"
        sx={{
          padding: 0, marginRight: '-3px', border: '1px solid', borderRadius: 2,
        }}
        onClick={handleClickLeftArrow}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
      <Stack alignItems="center">
        {children}
      </Stack>
      <IconButton
        aria-label="delete"
        sx={{
          padding: 0, marginLeft: '-3px', border: '1px solid', borderRadius: 2,
        }}
        onClick={handleClickRightArrow}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </Stack>
  );
}

export default SwitchingHeader;
