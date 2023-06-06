/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box, Typography, Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrioritySetting from './PrioritySetting';
import RemittanceSetting from './RemittanceSetting';
import PopupSetting from './PopupSetting';
import NotificationSetting from './NotificationSetting';
import { selectSavingDetailSetting, setSavingDetailSetting } from '../../../../app/redux/slices/assetSlice';
import { NotificationInterface, PopupInterface, RemittanceInterface } from '../../../../types/common';

function DetailSetting() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const savingDetailSetting = useSelector(selectSavingDetailSetting);
  const [priority, setPriority] = useState(savingDetailSetting.priority);
  const [remittance, setRemittance] = useState(savingDetailSetting.remittance);
  const [notification, setNotification] = useState(savingDetailSetting.notification);
  const [popup, setPopup] = useState(savingDetailSetting.popup);

  const handlePriority = (value: string) => {
    setPriority(value);
  };

  const handleRemittance = (value: RemittanceInterface) => {
    setRemittance(value);
  };

  const handleNotification = (value: NotificationInterface) => {
    setNotification(value);
  };

  const handlePopup = (value: PopupInterface) => {
    setPopup(value);
  };

  const handleSetting = () => {
    dispatch(setSavingDetailSetting({
      priority,
      remittance,
      notification,
      popup,
    }));
    navigate(-1);
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

      <PopupSetting
        popup={popup}
        handlePopup={handlePopup}
      />

      <Button fullWidth variant="contained" onClick={() => handleSetting()}>저축 세부 설정하기</Button>
    </Box>
  );
}

export default DetailSetting;
