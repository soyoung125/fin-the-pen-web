/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box, Typography, Button,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import PrioritySetting from './PrioritySetting';
import RemittanceSetting from './RemittanceSetting';
import PopupSetting from './PopupSetting';
import NotificationSetting from './NotificationSetting';
import { selectSavingDetailSetting } from '../../../../app/redux/slices/assetSlice';

function DetailSetting() {
  const savingDetailSetting = useSelector(selectSavingDetailSetting);
  const [priority, setPriority] = useState(savingDetailSetting.priority);
  const [remittance, setRemittance] = useState(savingDetailSetting.remittance);
  const [notification, setNotification] = useState(savingDetailSetting.notification);
  const [popup, setPopup] = useState(savingDetailSetting.popup);

  const handlePriority = (value: string) => {
    setPriority(value);
  };

  const handleRemittance = (value: any) => {
    setRemittance(value);
  };

  const handleNotification = (value: any) => {
    setNotification(value);
  };

  return (
    <Box sx={{ pt: 3, px: 2, mb: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>저축 세부 설정</Typography>

      <PrioritySetting
        priority={priority}
        handlePriority={handlePriority}
      />

      <RemittanceSetting
        remittance={remittance}
        handleRemittance={handleRemittance}
      />

      <NotificationSetting
        notification={notification}
        handleNotification={handleNotification}
      />

      <PopupSetting />

      <Button fullWidth variant="contained">저축 세부 설정하기</Button>
    </Box>
  );
}

export default DetailSetting;
