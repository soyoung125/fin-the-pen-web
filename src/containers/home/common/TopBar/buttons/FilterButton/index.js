import {
  Alert,
  Box,
  Button, Chip, Drawer, Paper, Stack, TextField, Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import moment from 'moment';

import FilterAccordion from './inputs/FilterAccordion';
import {
  initFilter, selectFiltered, selectFilteredDate, setFilteredDate, updateFilter,
} from '../../../../../../utils/redux/schedule/scheduleSlice';
import { WRONG_TIME_ORDER } from '../../../../../../utils/constants/schedule';
import { isTimeOrderCorrect } from '../../../../../../utils/tools';
import RoundedButton from '../../../../../../components/common/RoundedButton';
import { EXPENDITURE, FIXED, INCOME } from '../../../../../../utils/constants/categories';

function FilterButton() {
  const dispatch = useDispatch();
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);
  const filtered = useSelector(selectFiltered);
  const filteredDate = useSelector(selectFilteredDate);
  const [error, setError] = useState(null);

  const handleClick = (state) => {
    dispatch(updateFilter(state.target.innerText));
  };

  const handleDelete = (cat) => {
    dispatch(updateFilter(cat));
  };

  const changeSchedule = (state) => {
    const date = state.target.value;
    if (state.target.id === 'end' && moment(date).isBefore(filteredDate.start)) {
      alert(WRONG_TIME_ORDER);
    } else {
      dispatch(setFilteredDate({
        type: state.target.id,
        date: state.target.value,
      }));
    }
  };

  useEffect(() => {
    if (isTimeOrderCorrect(filteredDate.start, filteredDate.end)) {
      setError(false);
    } else {
      setError(true);
    }
  }, [filteredDate]);

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
          pt={5}
          pb={2}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Button onClick={() => setBottomDrawerOpen(false)}><ClearIcon /></Button>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>?????? ??????</Typography>
            <Button
              variant="outlined"
              color="error"
              onClick={() => dispatch(initFilter())}
            >
              ?????????
            </Button>
          </Stack>
          {
            filtered.length > 0 && (
              <Paper>
                <Box p={2}>
                  <Box mb={2}>
                    <Alert severity="error">
                      ?????? ???????????? ????????? ???????????? ????????????.
                    </Alert>
                  </Box>
                  <Stack direction="row" sx={{ overflowX: 'scroll' }}>
                    {filtered.map((cat) => (
                      <Chip
                        label={cat}
                        key={cat}
                        sx={{ mb: 1, mr: 1 }}
                        onClick={handleClick}
                        onDelete={() => handleDelete(cat)}
                      />
                    ))}
                  </Stack>
                </Box>
              </Paper>
            )
          }
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
              id="start"
              label="?????????"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={filteredDate.start}
              onChange={changeSchedule}
              size="small"
            />
            <Typography>~</Typography>
            <TextField
              id="end"
              label="?????????"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={filteredDate.end}
              onChange={changeSchedule}
              size="small"
            />
          </Stack>
          {
            error && (
              <Stack justifyContent="center">
                <Alert color="error">
                  {WRONG_TIME_ORDER}
                </Alert>
              </Stack>
            )
          }
        </Stack>
      </Drawer>
    </>
  );
}
export default FilterButton;
