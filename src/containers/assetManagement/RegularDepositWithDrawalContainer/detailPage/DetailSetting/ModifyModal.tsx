import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import "swiper/css";
import { useState } from "react";
// import { useDispatch } from 'react-redux';
import ModalStaticBackdrop from "../../../../../components/layouts/ModalStaticBackdrop";
import { REGULAR_DEPOSIT_WITHDRAWAL_TYPE } from "../../../../../constants/schedule";
import { Schedule } from "../../../../../types/schedule";

// import { modifySchedule } from '../../../../../../domain/redux/schedule/scheduleSlice';

interface ModifyModalProps {
  settingModalOpen: boolean;
  setSettingModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modifyData: (form: Schedule) => void;
  data: Schedule;
}

function ModifyModal({
  settingModalOpen,
  setSettingModalOpen,
  modifyData,
  data,
}: ModifyModalProps) {
  // const dispatch = useDispatch();
  const type = data.price_type === "Plus" ? "Plus" : "Minus";
  const typeContent = REGULAR_DEPOSIT_WITHDRAWAL_TYPE[type];
  const [form, setForm] = useState(data);
  console.log(form);

  const changeDetailInfo = (state: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [state.target.id]: state.target.value });
  };

  const updateSchedule = () => {
    // dispatch(modifySchedule(form));
    modifyData(form);
    setSettingModalOpen(false);
  };

  return (
    <ModalStaticBackdrop
      keepMounted
      width="xs"
      open={settingModalOpen}
      component={
        <Stack p={2} spacing={1}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <IconButton onClick={() => setSettingModalOpen(false)}>
              <RestartAltIcon />
            </IconButton>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {`정기 ${typeContent} 내역`}
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
                id="event_name"
                startAdornment={
                  <InputAdornment position="start">{`${typeContent}명`}</InputAdornment>
                }
                value={form.event_name}
                onChange={changeDetailInfo}
                size="small"
                inputProps={{
                  style: { textAlign: "right" },
                }}
              />
            </FormControl>

            {/* 입출금일 */}
            <TextField
              id="date"
              type="date"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{`${typeContent}일`}</InputAdornment>
                ),
              }}
              inputProps={{
                style: { textAlign: "right" },
              }}
              value={form.start_date}
              onChange={changeDetailInfo}
              size="small"
            />

            {/* 입출금기간 */}
            <TextField
              id="repeat_endDate"
              type="date"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{`${typeContent}기간`}</InputAdornment>
                ),
              }}
              inputProps={{
                style: { textAlign: "right" },
              }}
              value={form.end_date}
              onChange={changeDetailInfo}
              size="small"
            />

            {/* 입출금액 고정 */}
            <FormControl fullWidth>
              <OutlinedInput
                startAdornment={
                  <InputAdornment position="start">{`${typeContent}액 고정`}</InputAdornment>
                }
                endAdornment={
                  <Switch
                    // checked={personalGoal.autoSaving}
                    // onChange={() => changePersonalGoal({
                    //   target: {
                    //     id: 'autoSaving',
                    //     value: !personalGoal.autoSaving,
                    //   },
                    // })}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                size="small"
                readOnly
              />
            </FormControl>

            {/* 입출금액 */}
            <FormControl fullWidth>
              <OutlinedInput
                id="expected_spending"
                startAdornment={
                  <InputAdornment position="start">{`${typeContent}액`}</InputAdornment>
                }
                value={form.amount}
                onChange={changeDetailInfo}
                size="small"
                inputProps={{
                  style: { textAlign: "right" },
                }}
              />
            </FormControl>
          </Stack>
          <Button
            fullWidth
            variant="contained"
            onClick={() => updateSchedule()}
          >
            정기 출금액 설정
          </Button>
        </Stack>
      }
    />
  );
}

export default ModifyModal;
