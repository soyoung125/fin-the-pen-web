/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Stack, Box, Switch, FormControl, OutlinedInput, InputAdornment
} from '@mui/material';
import RoundedPaper from '../../../../components/common/RoundedPaper';

interface RemittanceSettingProps {
  remittance: any,
  handleRemittance: (value: any) => void,
}

function RemittanceSetting({ remittance, handleRemittance }: RemittanceSettingProps) {
  const changeRemittance = (state: { target: { id: string; value: string; }; }) => {
    handleRemittance({
      ...remittance,
      settings: { ...remittance.settings, [state.target.id]: state.target.value },
    });
  };
  return (
    <RoundedPaper my={1}>
      <Stack direction="row" justifyContent="space-between">
        <Box>계좌 송금 설정</Box>
        <Switch
          size="small"
          sx={{ p: 0, borderRadius: 6 }}
          checked={remittance.isOn}
          onChange={() => handleRemittance({ ...remittance, isOn: !remittance.isOn })}
        />
      </Stack>

      {remittance.isOn
        && (
          <Stack spacing={1} mt={1}>
            {/* 은행명 */}
            <FormControl fullWidth>
              <OutlinedInput
                id="bankName"
                startAdornment={<InputAdornment position="start">은행명</InputAdornment>}
                value={remittance.settings.bankName}
                onChange={changeRemittance}
                size="small"
                inputProps={{
                  style: { textAlign: 'right' },
                }}
              />
            </FormControl>

            {/* 계좌번호 */}
            <FormControl fullWidth>
              <OutlinedInput
                id="accountNumber"
                startAdornment={<InputAdornment position="start">계좌번호</InputAdornment>}
                value={remittance.settings.accountNumber}
                onChange={changeRemittance}
                size="small"
                inputProps={{
                  style: { textAlign: 'right' },
                }}
              />
            </FormControl>

            {/* 송금일 */}
            <FormControl fullWidth>
              <OutlinedInput
                id="date"
                type="date"
                startAdornment={<InputAdornment position="start">송금일</InputAdornment>}
                value={remittance.settings.date}
                onChange={changeRemittance}
                size="small"
                inputProps={{
                  style: { textAlign: 'right' },
                }}
              />
            </FormControl>

            {/* 송금액 */}
            <FormControl fullWidth>
              <OutlinedInput
                id="amount"
                startAdornment={<InputAdornment position="start">송금액</InputAdornment>}
                value={remittance.settings.amount}
                onChange={changeRemittance}
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

export default RemittanceSetting;
