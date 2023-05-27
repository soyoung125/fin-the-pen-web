import {
  Stack, Box, Switch, OutlinedInput, InputAdornment, Autocomplete
} from '@mui/material';
import RoundedPaper from '../../../../components/common/RoundedPaper';

interface PopupSettingProps {
  popup: any,
  handlePopup: (value: any) => void,
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
        sx={{
          '.MuiAutocomplete-root > .MuiOutlinedInput-root': { paddingX: '14px' },
        }}
      >
        {/* 표시 항목 */}
        <Autocomplete
          id="display"
          freeSolo
          value={popup.settings.display}
          options={displayOptions}
          size="small"
          onChange={(e, newValue) => changePopupSettings('display', newValue)}
          renderInput={(params) =>
            <OutlinedInput
              ref={params.InputProps.ref}
              fullWidth
              startAdornment={<InputAdornment position="start">표시 항목</InputAdornment>}
              inputProps={{
                ...params.inputProps,
                style: { textAlign: 'right' },
              }}
              size="small"
            />
          }
        />

        {/* 클릭 시 연결 */}
        <Autocomplete
          id="connect"
          freeSolo
          value={popup.settings.connect}
          options={connectOptions}
          size="small"
          onChange={(e, newValue) => changePopupSettings('connect', newValue)}
          renderInput={(params) =>
            <OutlinedInput
              ref={params.InputProps.ref}
              fullWidth
              startAdornment={<InputAdornment position="start">클릭 시 연결</InputAdornment>}
              inputProps={{
                ...params.inputProps,
                style: { textAlign: 'right' },
              }}
              size="small"
            />
          }
        />
      </Stack>
      )}

    </RoundedPaper>
  );
}

export default PopupSetting;
