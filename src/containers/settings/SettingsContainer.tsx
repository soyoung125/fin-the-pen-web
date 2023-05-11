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
      window.location.href = 'intent://twitter/#Intent;scheme=twitter;package=com.twitter.android;end';
    } else if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1 || userAgent.indexOf('ipod') > -1) {
      // IOS
      const url = 'twitter://media';
      setTimeout(() => {
        window.open('https://itunes.apple.com/kr/app/twitter/id333903271?mt=8');
      }, 1000);
      window.location.href = url;
    } else {
      // 아이폰, 안드로이드 외 모바일 또는 pc
      window.location.href = 'https://twitter.com/?lang=ko';
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
          <Button onClick={() => clickBank()}>트위터</Button>
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
