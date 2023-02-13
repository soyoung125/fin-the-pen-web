import {
  Box, Button, Divider, FormControl, IconButton, InputAdornment,
  OutlinedInput, Stack, Switch, TextField, Typography,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import 'swiper/css';
import ModalStaticBackdrop from '../../../../layouts/ModalStaticBackdrop';
import { REGULAR_DEPOSIT_WITHDRAWAL_TYPE } from '../../../../../utils/constants/schedule';

function ModifyModal({ settingModalOpen, setSettingModalOpen, data }) {
  const type = REGULAR_DEPOSIT_WITHDRAWAL_TYPE[data.type];
  return (
    <ModalStaticBackdrop
      keepMounted
      width="xs"
      open={settingModalOpen}
      component={(
        <Stack p={2} spacing={1}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <IconButton onClick={() => setSettingModalOpen(false)}>
              <RestartAltIcon />
            </IconButton>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {`정기 ${type} 내역`}
            </Typography>
            <IconButton onClick={() => setSettingModalOpen(false)}>
              <ClearIcon />
            </IconButton>
          </Stack>
          <Box my={1}>
            <Divider />
          </Box>

          <Stack spacing={1}>

            {/* 출금명 */}
            <FormControl fullWidth>
              <OutlinedInput
                id="name"
                startAdornment={<InputAdornment position="start">{`${type}명`}</InputAdornment>}
                value={data.event_name}
                  // onChange={changePersonalGoal}
                size="small"
                inputProps={{
                  style: { textAlign: 'right' },
                }}
              />
            </FormControl>

            {/* 별명 */}
            <FormControl fullWidth>
              <OutlinedInput
                id="nickName"
                startAdornment={<InputAdornment position="start">별명</InputAdornment>}
                value={data.event_name}
                  // onChange={changePersonalGoal}
                size="small"
                inputProps={{
                  style: { textAlign: 'right' },
                }}
              />
            </FormControl>

            {/* 입출금일 */}
            <TextField
              id="deadline"
              type="date"
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start">{`${type}일`}</InputAdornment>,
              }}
                // eslint-disable-next-line react/jsx-no-duplicate-props
              inputProps={{
                style: { textAlign: 'right' },
              }}
              value={data.date}
                // onChange={changePersonalGoal}
              size="small"
            />

            {/* 입출금기간 */}
            <TextField
              id="endDate"
              type="date"
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start">{`${type}기간`}</InputAdornment>,
              }}
                // eslint-disable-next-line react/jsx-no-duplicate-props
              inputProps={{
                style: { textAlign: 'right' },
              }}
              value={data.repeat_endDate}
                // onChange={changePersonalGoal}
              size="small"
            />

            {/* 입출금액 고정 */}
            <FormControl fullWidth>
              <OutlinedInput
                startAdornment={<InputAdornment position="start">{`${type}액 고정`}</InputAdornment>}
                endAdornment={(
                  <Switch
                      // checked={personalGoal.autoSaving}
                      // onChange={() => changePersonalGoal({
                      //   target: {
                      //     id: 'autoSaving',
                      //     value: !personalGoal.autoSaving,
                      //   },
                      // })}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
)}
                size="small"
                readOnly
              />
            </FormControl>

            {/* 입출금액 */}
            <FormControl fullWidth>
              <OutlinedInput
                id="amount"
                startAdornment={<InputAdornment position="start">{`${type}액`}</InputAdornment>}
                value={data.expected_spending}
                  // onChange={changePersonalGoal}
                size="small"
                inputProps={{
                  style: { textAlign: 'right' },
                }}
              />
            </FormControl>
          </Stack>
          <Button fullWidth variant="contained">
            정기 출금액 설정
          </Button>
        </Stack>
        )}
    />
  );
}

export default ModifyModal;
