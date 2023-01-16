import {
  Button, Drawer, Stack, Typography,
} from '@mui/material';
import { useState } from 'react';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import RoundedButton from '../../../common/RoundedButton';

function FilterButton() {
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);
  return (
    <>
      <RoundedButton value="user" onClick={() => setBottomDrawerOpen(true)}>
        {/* <FilterAltIcon /> */}
        <FilterAltOutlinedIcon />
      </RoundedButton>
      <Drawer
        open={bottomDrawerOpen}
        anchor="bottom"
        onClose={() => setBottomDrawerOpen(false)}
      >
        <Stack
          justifyContent="space-between"
          spacing={2}
          m={1}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Button onClick={() => alert('취소')}>취소</Button>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>필터 설정</Typography>
            <Button onClick={() => alert('확인')}>확인</Button>
          </Stack>
          <Typography>
            필터
          </Typography>
        </Stack>
      </Drawer>
    </>
  );
}
export default FilterButton;
