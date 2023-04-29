import { Tooltip } from '@mui/material';

interface ArrowTooltipProps {
  open: boolean,
  title: string,
  children: JSX.Element,
}

function ArrowTooltip({ open, title, children }: ArrowTooltipProps) {
  return (
    <Tooltip
      open={open}
      arrow
      placement="top"
      title={title}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: 'primary.main',
          },
        },
        arrow: {
          sx: {
            '&::before': {
              backgroundColor: 'primary.main',
            },
          },
        },
      }}
    >
      {children}
    </Tooltip>
  );
}

export default ArrowTooltip;
