/* eslint-disable no-unused-vars */
import {
  Box,
  Button, Chip, Drawer, ListItem, Stack, TextField, Typography,
} from '@mui/material';
import { useState } from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { useDispatch, useSelector } from 'react-redux';
import RoundedButton from '../../../../common/RoundedButton';
import { EXPENDITURE, FIXED, INCOME } from '../../../../../utils/constants/categories';
import FilterAccordion from './inputs/FilterAccordion';
import { initFilter, selectFiltered } from '../../../../../utils/redux/schedule/scheduleSlice';

function FilterButton() {
  const dispatch = useDispatch();
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);
  const filtered = useSelector(selectFiltered);
  return (
    <>
      <RoundedButton value="user" onClick={() => setBottomDrawerOpen(true)}>
        {/* <FilterAltIcon /> */}
        <FilterAltOutlinedIcon />
      </RoundedButton>
      <Drawer
        open={bottomDrawerOpen}
        anchor="top"
        onClose={() => setBottomDrawerOpen(false)}
      >
        <Stack
          justifyContent="space-between"
          spacing={2}
          m={1}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Button onClick={() => setBottomDrawerOpen(false)}>닫기</Button>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>필터 설정(제작중)</Typography>
            <Button onClick={() => alert('확인')}>확인</Button>
          </Stack>
          <Typography>
            {JSON.stringify(`filtered : ${filtered}`)}
          </Typography>
          <Stack>
            {
                [FIXED, INCOME, EXPENDITURE].map((obj) => (
                  <FilterAccordion tag={obj} key={obj.type} />
                ))
            }
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ width: '100%' }}
          >
            <TextField
              id="start_date"
              label="시작일"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
            />
            <Typography>~</Typography>
            <TextField
              id="date"
              label="종료일"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
            />
          </Stack>
          <Stack>
            <Button
              variant="contained"
              onClick={() => dispatch(initFilter())}
            >
              필터 초기화
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
export default FilterButton;
