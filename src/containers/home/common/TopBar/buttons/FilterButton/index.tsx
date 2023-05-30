import {
  Alert, Box, Button, Chip, Drawer, Paper, Stack, TextField, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import moment from 'moment';
import FilterAccordion from './inputs/FilterAccordion';
import {
  initFilter, selectFiltered, selectFilteredDate, setFilteredDate, updateAnalyzedData, updateFilter,
} from '../../../../../../app/redux/slices/scheduleSlice';
import { WRONG_TIME_ORDER } from '../../../../../../domain/constants/schedule';
import { isTimeOrderCorrect } from '../../../../../../domain/tools';
import RoundedButton from '../../../../../../components/common/RoundedButton';
import { EXPENDITURE, FIXED, INCOME } from '../../../../../../domain/constants/categories';
import AlertModal from '../../../../../../components/common/AlertModal';

function FilterButton() {
  const dispatch = useDispatch();
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);
  const filtered = useSelector(selectFiltered);
  const filteredDate = useSelector(selectFilteredDate);
  const [error, setError] = useState(false);
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const FIXEDEXPENDITURE = {
    ...FIXED,
    nested: FIXED.nested.filter((c) => c.type === '출금'),
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    dispatch(updateFilter(target.innerText));
  };

  const handleDelete = (cat: string) => {
    dispatch(updateFilter(cat));
  };

  const handleClickOk = () => {
    dispatch(updateAnalyzedData());
    setBottomDrawerOpen(false);
  };

  const changeSchedule = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    if (event.target.id === 'end' && moment(date).isBefore(filteredDate.start)) {
      alert(WRONG_TIME_ORDER);
    } else {
      dispatch(setFilteredDate({
        type: event.target.id,
        date: event.target.value,
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
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>필터 설정</Typography>
            <Button
              variant="text"
              color="primary"
              onClick={() => handleClickOk()}
            >
              확인
            </Button>
          </Stack>
          {
            filtered.length > 0 && (
              <Paper>
                <Box p={2}>
                  <Box mb={2}>
                    <Alert severity="error">
                      아래 태그들은 앱에서 표시되지 않습니다.
                    </Alert>
                  </Box>
                  <Stack direction="row" sx={{ overflowX: 'scroll' }}>
                    {filtered.map((cat: string) => (
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
              [FIXEDEXPENDITURE, EXPENDITURE].map((obj) => (
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
              label="시작일"
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
              label="종료일"
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
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenAlertModal(true)}
          >
            필터 초기화
          </Button>
        </Stack>
      </Drawer>

      <AlertModal
        open={openAlertModal}
        handleClose={() => setOpenAlertModal(false)}
        handleClickYes={() => {
          setOpenAlertModal(false);
          dispatch(initFilter());
        }}
        mode="reset"
      />
    </>
  );
}
export default FilterButton;
