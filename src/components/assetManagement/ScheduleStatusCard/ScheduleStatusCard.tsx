import { Box, Stack } from '@mui/material';
import RoundedBorderBox from '../../common/RoundedBorderBox';
import StatusStack from './StatusStack';

interface ScheduleStatusCardProps {
  month: string;
  numberOfSchedule: number;
}
function ScheduleStatusCard({ month, numberOfSchedule }: ScheduleStatusCardProps) {
  return (
    <>
      <Box sx={{ typography: 'h6', fontWeight: 'bold', mb: 1 }}>
        My 스케줄 현황
      </Box>
      <RoundedBorderBox>
        <Stack direction="row" spacing={2} p={2}>
          <StatusStack
            title={`${month} 남은 일정`}
            content={`${numberOfSchedule}개`}
          />

          <StatusStack
            title="추천 소비 금액"
            content="xxxxx원"
          />
        </Stack>
      </RoundedBorderBox>

    </>
  );
}

export default ScheduleStatusCard;
/**
 * 이 파일은 공동으로 사용하는 곳이 많습니다. 위치를 옮기기 전에 고민이 필요함
 */
