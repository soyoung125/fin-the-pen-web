import {
  Box,
  Button,
  Dialog as MuiDialog,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export interface ScheduleChangeModalProps {
  changeMode: "수정" | "삭제";
  onClickReject: () => void;
  onClickOnlyNow: () => void;
  onClickAll: () => void;
  onClickNowFromAfter: () => void;
}

function ScheduleChangeModal({
  changeMode,
  onClickReject,
  onClickOnlyNow,
  onClickAll,
  onClickNowFromAfter,
}: ScheduleChangeModalProps) {
  return (
    <MuiDialog
      sx={{ "& .MuiDialog-paper": { borderRadius: "1rem", width: "100%" } }}
      open={true}
      scroll="body"
    >
      <Stack p="20px">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Box width={"24px"} />
          <Typography variant="h1" sx={{ fontWeight: "bold" }}>
            {`일정 ${changeMode}`}
          </Typography>
          <CloseOutlinedIcon onClick={onClickReject} />
        </Stack>
        <Divider sx={{ backgroundColor: "black", height: "1px" }} />
        <Stack spacing={1.5} pt={3}>
          <Typography variant="h4" textAlign="center">
            <span style={{ fontWeight: 700 }}>선택한 일정</span>
            {`을 ${changeMode}합니다.`}
          </Typography>
          <Button
            onClick={onClickOnlyNow}
            variant="outlined"
            color="error"
          >{`선택 일정만 ${changeMode}`}</Button>
          <Button
            onClick={onClickAll}
            variant="outlined"
            color="error"
          >{`전체 일정 ${changeMode}`}</Button>
          <Button
            onClick={onClickNowFromAfter}
            variant="outlined"
            color="error"
          >{`현재 일정 및 이후 일정 ${changeMode}`}</Button>
        </Stack>
      </Stack>
    </MuiDialog>
  );
}

export default ScheduleChangeModal;
