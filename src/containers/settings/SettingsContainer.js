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
    </>
  );
}
