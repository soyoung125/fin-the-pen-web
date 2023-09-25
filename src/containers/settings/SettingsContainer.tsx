import { Divider, Typography } from "@mui/material";
import { useEffect } from "react";
import AppLocker from "./display/AppLocker";
import Budget from "./display/Budget";
import ThemeMode from "./display/ThemeMode";
import Version from "./version/Version";
import Accordion from "../../components/common/accordions/Accordion";
import AccordionSummary from "../../components/common/accordions/AccordionSummary";
import AccordionDetails from "../../components/common/accordions/AccordionDetails";
import { useAppSelector } from "../../app/redux/hooks";
import { selectIsBudgetHidden } from "../../app/redux/slices/settingSlice";
import useHeader from "../../hooks/useHeader";
import { useNavigate } from "react-router-dom";
import PATH from "../../constants/path";
import ClickableListItem from "../../components/settings/ClickableListItem";
import { useRecoilValue } from "recoil";
import { isAuthenticatedRepository } from "../../app/recoil/isAuthenticated.ts";
import { HEADER_MODE } from "@recoil/header.ts";

export default function SettingsContainer() {
  const navigate = useNavigate();
  const isHideBudgetMode = useAppSelector(selectIsBudgetHidden);
  const userAgent = navigator.userAgent.toLowerCase();

  const { setIsAuthenticatedFalse } = useRecoilValue(isAuthenticatedRepository);

  useHeader(true, HEADER_MODE.settings);

  useEffect(() => {
    if (isHideBudgetMode) {
      setIsAuthenticatedFalse();
    }
  }, []);

  const clickBank = () => {
    if (userAgent.indexOf("android") > -1) {
      // 안드로이드
      // kbbank://
      window.location.href =
        "intent://main/#Intent;package=com.kbstar.kbbank;scheme=kbbank;end";
    } else if (
      userAgent.indexOf("iphone") > -1 ||
      userAgent.indexOf("ipad") > -1 ||
      userAgent.indexOf("ipod") > -1
    ) {
      // IOS
      const url = "kbbank://home";
      setTimeout(() => {
        window.open(
          "https://itunes.apple.com/kr/app/kb스타뱅킹/id373742138?mt=8"
        );
      }, 1000);
      window.location.href = url;
    } else {
      // 아이폰, 안드로이드 외 모바일 또는 pc
      window.location.href = "https://www.kbstar.com/";
    }
  };

  const clickInstagram = () => {
    if (userAgent.indexOf("android") > -1) {
      // 안드로이드
      window.location.href =
        "intent://instagram.com/#Intent;package=com.instagram.android;scheme=https;end";
    } else if (
      userAgent.indexOf("iphone") > -1 ||
      userAgent.indexOf("ipad") > -1 ||
      userAgent.indexOf("ipod") > -1
    ) {
      // IOS
      const url = "https://instagram.com";
      setTimeout(() => {
        window.open("https://itunes.apple.com/kr/app/instagram/id389801252");
      }, 1000);
      window.location.href = url;
    } else {
      // 아이폰, 안드로이드 외 모바일 또는 pc
      window.location.href = "https://www.instagram.com/";
    }
  };

  return (
    <>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>화면 설정</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ThemeMode />
          <Divider />
          <AppLocker />
          <Divider />
          <Budget />
        </AccordionDetails>
      </Accordion>

      {/* <Accordion>
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
      </Accordion> */}

      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>보안</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ClickableListItem to="/test" title="비밀번호 설정" subTitle="" />
          <Divider />
          <ClickableListItem to="/test" title="비밀번호 변경" subTitle="" />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>알림</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ClickableListItem to="/test" title="알림 데이터" subTitle="" />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>연결관리</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Button onClick={() => clickBank()}>국민은행</Button>
          <Button onClick={() => clickInstagram()}>instagram</Button> */}
          <ClickableListItem
            to={PATH.myData}
            title="마이데이터[은행/카드]"
            subTitle=""
          />
          <Divider />
          <ClickableListItem to="/test" title="캘린더 연동" subTitle="" />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>핀더팬 정보</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ClickableListItem to="/test" title="공지사항" subTitle="" />
          <Divider />
          <ClickableListItem to="/test" title="인증서" subTitle="" />
          <Divider />
          <ClickableListItem to="/test" title="약관 및 졍책" subTitle="" />
          <Divider />
          <Version />
        </AccordionDetails>
      </Accordion>

      {/* <Accordion>
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
      </Accordion> */}
    </>
  );
}
