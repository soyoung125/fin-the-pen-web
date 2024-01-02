import {
  Stack, Box, FormControl, OutlinedInput, InputAdornment, Select, MenuItem
} from '@mui/material';
import RoundedPaper from '../../../../../components/common/RoundedPaper';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { RemittanceInterface } from '../../../../../types/common';
import { useEffect, useState } from 'react';
import ModalStaticBackdrop from '../../../../../components/layouts/ModalStaticBackdrop';
import useModal from '../../../../../hooks/useModal';
import InputModal from './InputModal';
import SwitchButton from '../../../../../components/common/SwitchButton';

interface RemittanceSettingProps {
  remittance: RemittanceInterface,
  handleRemittance: (value: RemittanceInterface) => void,
}

function RemittanceSetting({ remittance, handleRemittance }: RemittanceSettingProps) {
  const options = ['none', '매달 1일', '매달 15일', '매달 마지막날', '직접 설정'];
  const [date, setDate] = useState(0);
  const {
    modalOpen: transferDateModalOpen,
    openModal: openTransferDateModal,
    closeModal: closeTransferDateModal
  } = useModal();

  
  useEffect(() => {
    if (remittance.settings.date === '직접 설정') {
      openTransferDateModal();
    }
  }, [remittance])

  const changeRemittance = (state: { target: { id: string; value: string | number; }; }) => {
    handleRemittance({
      ...remittance,
      settings: { ...remittance.settings, [state.target.id]: state.target.value },
    });
  };

  const handleChange = (d: number) => {
    setDate(d);
    changeRemittance({ target: { id: 'date', value: `매달 ${d}일` } })
  }

  return (
    <RoundedPaper my={1}>
      <Stack direction="row" justifyContent="space-between">
        <Box>계좌 송금 설정</Box>
        <SwitchButton
          checked={remittance.isOn}
          handleChange={() => handleRemittance({ ...remittance, isOn: !remittance.isOn })}
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
            <FormControl
              fullWidth
              size="small"
            >
              <Select
                inputProps={{
                  IconComponent: () => null,
                  style: { textAlign: 'right' },
                }}
                startAdornment={<InputAdornment position="start">송금일</InputAdornment>}
                endAdornment={<InputAdornment position="end"><CalendarTodayOutlinedIcon /></InputAdornment>}
                sx={{ '.MuiSelect-select.MuiSelect-outlined': { textAlign: 'right', paddingX: 0 } }}
                value={remittance.settings.date}
                onChange={(e) => changeRemittance({ target: { id: 'date', value: e.target.value }})}
              >
                {options.map((option) => <MenuItem key={Math.random()} value={option}>{option}</MenuItem>)}
                {!options.includes(remittance.settings.date) && <MenuItem key={Math.random()} disabled value={remittance.settings.date}>{remittance.settings.date}</MenuItem>}
              </Select>
            </FormControl>

            {/* 송금액 */}
            <FormControl fullWidth>
              <OutlinedInput
                id="amount"
                startAdornment={<InputAdornment position="start">송금액</InputAdornment>}
                endAdornment={<InputAdornment position="end">원</InputAdornment>}
                value={remittance.settings.amount.toLocaleString('ko-KR')}
                onChange={(e) => changeRemittance({ target: { id: 'amount', value: +e.target.value.replaceAll(',', '') }})}
                onFocus={(e) => e.target.select()}
                size="small"
                inputProps={{
                  style: { textAlign: 'right' },
                }}
              />
            </FormControl>
          </Stack>
        )}
        <ModalStaticBackdrop
          keepMounted
          width="xs"
          open={transferDateModalOpen}
          component={(
            <InputModal date={date} handleChange={handleChange} closeTransferDateModal={closeTransferDateModal} />
          )}
        />
    </RoundedPaper>
  );
}

export default RemittanceSetting;
