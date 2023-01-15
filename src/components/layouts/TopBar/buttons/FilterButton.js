import { Drawer, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RoundedButton from '../../../common/RoundedButton';

function FilterButton() {
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);
  return (
    <>
      <RoundedButton value="user" onClick={() => setBottomDrawerOpen(true)}>
        <FilterAltIcon />
      </RoundedButton>
      <Drawer
        open={bottomDrawerOpen}
        anchor="bottom"
        onClose={() => setBottomDrawerOpen(false)}
      >
        <Stack>
          <Typography>
            필터
          </Typography>
        </Stack>
      </Drawer>
    </>
  );
}
export default FilterButton;
