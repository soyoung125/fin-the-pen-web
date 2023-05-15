/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppLocker from './display/AppLocker';
import Budget from './display/Budget';
import ThemeMode from './display/ThemeMode';
import Schedule from './schedule/Schedule';
import Version from './version/Version';
import Accordion from '../../components/common/accordions/Accordion';
import AccordionSummary from '../../components/common/accordions/AccordionSummary';
import AccordionDetails from '../../components/common/accordions/AccordionDetails';
import Change from './version/Change';
import { setIsAuthenticatedFalse } from '../../app/redux/slices/commonSlice';

export default function SettingsContainer() {
  const dispatch = useDispatch();
  const userAgent = navigator.userAgent.toLowerCase();

  useEffect(() => {
    dispatch(setIsAuthenticatedFalse());
  }, []);

  const clickBank = () => {
    if (userAgent.indexOf('android') > -1) {
      // 안드로이드
      // kbbank://
      window.location.href = 'intent://main/#Intent;package=com.kbstar.kbbank;scheme=kbbank;end';
    } else if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1 || userAgent.indexOf('ipod') > -1) {
      // IOS
      const url = 'kbbank://home';
      setTimeout(() => {
        window.open('https://itunes.apple.com/kr/app/kb스타뱅킹/id373742138?mt=8');
      }, 1000);
      window.location.href = url;
    } else {
      // 아이폰, 안드로이드 외 모바일 또는 pc
      window.location.href = 'https://www.kbstar.com/';
    }
  };

  const clickInstagram = () => {
    if (userAgent.indexOf('android') > -1) {
      // 안드로이드
      // kbbank://
      window.location.href = 'intent://instagram.com/#Intent;package=com.instagram.android;scheme=https;end';
    } else if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1 || userAgent.indexOf('ipod') > -1) {
      // IOS
      const url = 'kbbank://home';
      setTimeout(() => {
        window.open('https://itunes.apple.com/kr/app/instagram/id389801252');
      }, 1000);
      window.location.href = url;
    } else {
      // 아이폰, 안드로이드 외 모바일 또는 pc
      window.location.href = 'https://www.kbstar.com/';
    }
  };

  return (
    <>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
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
          // expandIcon={<ExpandMoreIcon />}
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
          // expandIcon={<ExpandMoreIcon />}
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
          // expandIcon={<ExpandMoreIcon />}
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
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>연결 관리</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>메뉴가 올 자리</Typography>
          <Button onClick={() => clickBank()}>국민은행</Button>
          <Button onClick={() => clickInstagram()}>instagram</Button>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
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
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>앱 버전</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Version />
          <Change />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
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
