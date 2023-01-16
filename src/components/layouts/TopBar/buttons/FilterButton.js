/* eslint-disable no-unused-vars */
import {
  Box,
  Button, Chip, Drawer, ListItem, Stack, Typography,
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
                          <Chip label={cat} variant="outlined" onDelete={handleDelete} sx={{ mr: 1, mb: 1 }} />
                        ))}
                      </>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))
            }
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
export default FilterButton;
