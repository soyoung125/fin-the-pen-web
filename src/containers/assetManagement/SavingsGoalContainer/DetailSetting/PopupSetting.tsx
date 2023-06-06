import {
  Stack, Box, Switch, InputAdornment, FormControl, Select, MenuItem
} from '@mui/material';
import RoundedPaper from '../../../../components/common/RoundedPaper';
import { PopupInterface } from '../../../../types/common';

interface PopupSettingProps {
  popup: PopupInterface,
  handlePopup: (value: PopupInterface) => void,
}

function PopupSetting({ popup, handlePopup }: PopupSettingProps) {
  const displayOptions = ["none(아이콘)", "저축금액(퍼센트)"];
  const connectOptions = ["저축 목표 설정 페이지", "적금 계좌 APP"];
  const changePopupSettings = (id: string, value: string) => {
    handlePopup({
      ...popup,
      settings: { ...popup.settings, [id]: value }
    });
  };

  return (
    <RoundedPaper my={1}>
      <Stack direction="row" justifyContent="space-between">
        <Box>팝업창 설정</Box>
        <Switch
          size="small"
          sx={{ p: 0, borderRadius: 6 }}
          checked={popup.isOn}
          onChange={() => handlePopup({ ...popup, isOn: !popup.isOn })}
        />
      </Stack>

      {popup.isOn && (
        <Stack
          spacing={1}
          mt={1}
        >
          {/* 표시 항목 */}
          <FormControl
            fullWidth
            size="small"
          >
            <Select
              inputProps={{
                IconComponent: () => null,
                style: { textAlign: 'right' },
              }}
              startAdornment={<InputAdornment position="start">표시 항목</InputAdornment>}
              sx={{ '.MuiSelect-select.MuiSelect-outlined': { textAlign: 'right', paddingRight: '14px' } }}
              value={popup.settings.display}
              onChange={(e) => changePopupSettings('display', e.target.value)}
            >
              {displayOptions.map((option) => <MenuItem value={option}>{option}</MenuItem>)}
            </Select>
          </FormControl>

          {/* 클릭 시 연결 */}
          <FormControl
            fullWidth
            size="small"
          >
            <Select
              inputProps={{
                IconComponent: () => null,
                style: { textAlign: 'right' },
              }}
              startAdornment={<InputAdornment position="start">클릭 시 연결</InputAdornment>}
              sx={{ '.MuiSelect-select.MuiSelect-outlined': { textAlign: 'right', paddingRight: '14px' } }}
              value={popup.settings.connect}
              onChange={(e) => changePopupSettings('connect', e.target.value)}
            >
              {connectOptions.map((option) => <MenuItem value={option}>{option}</MenuItem>)}
            </Select>
          </FormControl>
        </Stack>
      )}
    </RoundedPaper>
  );
}

export default PopupSetting;
