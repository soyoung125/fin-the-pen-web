import ClearIcon from '@mui/icons-material/Clear';
import {
  Box, Button, DialogContent, DialogTitle, IconButton,
  List, ListItem, ListItemText, Stack, Typography,
} from '@mui/material';

function ScheduleModal({ selectedSchedule, setScheduleModalOpen }) {
  return (
    <Box
      sx={{
        p: {
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
          xxl: 6,
        },
      }}
    >
      <DialogTitle id="scroll-dialog-title">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4">
            일정
          </Typography>
          <IconButton
            size="large"
            onClick={() => {
              setScheduleModalOpen(false);
            }}
          >
            <ClearIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} dense>
          {
            selectedSchedule && (
            <>
              <ListItem>
                <ListItemText primary="제목" secondary={selectedSchedule.event_name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="알림여부" secondary={JSON.stringify(selectedSchedule.alarm)} />
              </ListItem>
              <ListItem>
                <ListItemText primary="날짜" secondary={selectedSchedule.date} />
              </ListItem>
              <ListItem>
                <ListItemText primary="시작-종료" secondary={`${selectedSchedule.start_time} - ${selectedSchedule.end_time}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary="반복주기" secondary={selectedSchedule.repeating_cycle} />
              </ListItem>
              <ListItem>
                <ListItemText primary="반복종료기한" secondary={selectedSchedule.repeat_deadline} />
              </ListItem>
              <ListItem>
                <ListItemText primary="일정카테고리" secondary={JSON.stringify(selectedSchedule.category)} />
              </ListItem>
              <ListItem>
                <ListItemText primary="금액설정(타입)" secondary={selectedSchedule.type} />
              </ListItem>
              <ListItem>
                <ListItemText primary="금액설정(예상비용)" secondary={selectedSchedule.expected_spending} />
              </ListItem>
              <ListItem>
                <ListItemText primary="일정중요도" secondary={selectedSchedule.importance} />
              </ListItem>
              <ListItem>
                <ListItemText primary="예산에서 제외" secondary={JSON.stringify(selectedSchedule.exclusion)} />
              </ListItem>
            </>
            )
        }
        </List>
      </DialogContent>
      <Stack direction="row" spacing={1}>
        <Button
          variant="contained"
          color="error"
          fullWidth
          onClick={() => setScheduleModalOpen(false)}
        >
          삭제
        </Button>
        <Button
          variant="contained"
          fullWidth
          onClick={() => setScheduleModalOpen(false)}
        >
          확인
        </Button>
      </Stack>
    </Box>
  );
}

export default ScheduleModal;
