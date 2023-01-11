import {
  Accordion, AccordionDetails, AccordionSummary, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppLocker from './display/AppLocker';
import Budget from './display/Budget';
import ThemeMode from './display/ThemeMode';
import Schedule from './schedule/Schedule';

export default function SettingsContainer() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>화면 설정</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AppLocker />
          <ThemeMode />
          <Budget />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>일정</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Schedule />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>보안 / 인증서</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>메뉴가 올 자리</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>알림</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>메뉴가 올 자리</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>연결 관리</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>메뉴가 올 자리</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>약관 및 정책</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>메뉴가 올 자리</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>앱 버전</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>메뉴가 올 자리</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>서비스 초기화 및 탈퇴</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>메뉴가 올 자리</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
