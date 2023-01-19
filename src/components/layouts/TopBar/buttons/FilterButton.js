/* eslint-disable no-unused-vars */
import {
  Box,
  Button, Chip, Drawer, ListItem, Stack, TextField, Typography,
} from '@mui/material';
import { useState } from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import RoundedButton from '../../../common/RoundedButton';
import Accordion from '../../../common/accordions/Accordion';
import AccordionSummary from '../../../common/accordions/AccordionSummary';
import AccordionDetails from '../../../common/accordions/AccordionDetails';
import { EXPENDITURE, FIXED, INCOME } from '../../../../utils/constants/categories';

function FilterButton() {
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);
  const handleDelete = () => {
    console.info('You clicked the Chip.');
  };
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
          <Stack>
            {
              [FIXED, INCOME, EXPENDITURE].map((obj) => (
                <Accordion>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{obj.type}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {obj.nested.map((el) => (
                      <>
                        <Typography>{el.type}</Typography>
                        {el.categories.map((cat) => (
                          <Chip key={Math.random()} label={cat} variant="outlined" onDelete={handleDelete} sx={{ mr: 1, mb: 1 }} />
                        ))}
                      </>
                    ))}
                  </AccordionDetails>
                </Accordion>
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
              // value={schedule.date}
              // onChange={updateSchedule}
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
              // value={schedule.date}
              // onChange={updateSchedule}
              size="small"
            />
          </Stack>
          <Stack>
            <Button
              variant="contained"
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
