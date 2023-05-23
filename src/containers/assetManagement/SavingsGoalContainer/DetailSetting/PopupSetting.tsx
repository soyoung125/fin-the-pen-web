import {
  Stack, Box, Switch, FormControl, OutlinedInput, InputAdornment
} from '@mui/material';
import RoundedPaper from '../../../../components/common/RoundedPaper';

interface PopupSettingProps {
  popup: any,
  handlePopup: (value: any) => void,
}

function PopupSetting({ popup, handlePopup }: PopupSettingProps) {
  const changePopupSettings = (state: { target: { id: any; value: any; }; }) => {
    handlePopup({
      ...popup,
      settings: { ...popup.settings, [state.target.id]: state.target.value }
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
      <Stack spacing={1} mt={1}>
        {/* 표시 항목 */}
        <FormControl fullWidth>
          <OutlinedInput
            id="display"
            startAdornment={<InputAdornment position="start">표시 항목</InputAdornment>}
            value={popup.settings.display}
            onChange={changePopupSettings}
            size="small"
            inputProps={{
              style: { textAlign: 'right' },
            }}
          />
        </FormControl>

        {/* 클릭 시 연결 */}
        <FormControl fullWidth>
          <OutlinedInput
            id="connect"
            startAdornment={<InputAdornment position="start">클릭 시 연결</InputAdornment>}
            value={popup.settings.connect}
            onChange={changePopupSettings}
            size="small"
            inputProps={{
              style: { textAlign: 'right' },
            }}
          />
        </FormControl>
      </Stack>
      )}

    </RoundedPaper>
  );
}

export default PopupSetting;
