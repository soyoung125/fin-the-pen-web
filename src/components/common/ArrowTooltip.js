import { Tooltip } from '@mui/material';

function ArrowTooltip({ open, title, children }) {
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
