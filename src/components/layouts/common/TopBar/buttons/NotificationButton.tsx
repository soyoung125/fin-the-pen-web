import { useNavigate } from "react-router-dom";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import RoundedButton from "../../../../common/RoundedButton.tsx";
import { PATH } from "@constants/path.ts";
import React from "react";
import alarm from "@assets/icons/alarm.svg";

function NotificationButton() {
  const navigate = useNavigate();

  return (
    <RoundedButton
      value="notification"
      onClick={() => navigate(PATH.notification)}
    >
      <img src={alarm} alt="alarm" />
    </RoundedButton>
  );
}

export default NotificationButton;
