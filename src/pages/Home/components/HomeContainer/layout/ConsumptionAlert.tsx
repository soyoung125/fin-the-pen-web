import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { CONSUMPTION_ALERTS } from "@constants/alerts.tsx";

/**
 * 이 부분을 레이아웃에서 통합 관리하고 싶습니다. (Drawer에서도 중복 사용중인 코드로 생각됨)
 * @returns
 */

function ConsumptionAlert() {
  // 추후 삭제 예정
  const random = Math.floor(Math.random() * 4); // CONSUMPTION_ALERTS에 우수가 추가되면 5로 수정
  const [snackbarOpen, setSnackbarOpen] = useState(true);

  const handleClose = () => {
    setSnackbarOpen(false);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={5000}
      open={snackbarOpen}
      onClose={handleClose}
      sx={{ mt: 3 }}
    >
      <Alert
        color={CONSUMPTION_ALERTS[random].color}
        sx={{ width: "100%" }}
        icon={CONSUMPTION_ALERTS[random].icon}
      >
        {CONSUMPTION_ALERTS[random].message}
      </Alert>
    </Snackbar>
  );
}

export default ConsumptionAlert;
