import { Divider, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import AppLocker from "@pages/Settings/components/display/AppLocker.tsx";
import Budget from "@pages/Settings/components/display/Budget.tsx";
import ThemeMode from "@pages/Settings/components/display/ThemeMode.tsx";
import Version from "./components/version/Version";
import Accordion from "@components/common/accordions/Accordion.tsx";
import AccordionSummary from "@components/common/accordions/AccordionSummary.tsx";
import AccordionDetails from "@components/common/accordions/AccordionDetails.tsx";
import { useAppDispatch, useAppSelector } from "@redux/hooks.ts";
import { selectIsBudgetHidden } from "@redux/slices/settingSlice.ts";
import useHeader from "@hooks/useHeader.ts";
import { PATH } from "@constants/path.ts";
import ClickableListItem from "pages/Settings/components/ClickableListItem";
import {
  changeHeaderTitle,
  setIsAuthenticatedFalse,
} from "@redux/slices/commonSlice.tsx";
import { HEADER_MODE } from "@app/types/common.ts";
import PersonalCard from "@pages/Settings/components/PersonalCard";
import { useUser } from "@app/tanstack-query/useUser.ts";

export default function Settings() {
  const isHideBudgetMode = useAppSelector(selectIsBudgetHidden);
  const { data: user } = useUser();

  const dispatch = useAppDispatch();

  useHeader(true, HEADER_MODE.settings);

  useEffect(() => {
    if (isHideBudgetMode) {
      dispatch(setIsAuthenticatedFalse());
    }
    dispatch(changeHeaderTitle("설정"));
  }, []);

  return (
    <>
      <Stack spacing={1.5} px={2.5} py={3}>
        <PersonalCard name={user?.name} />
      </Stack>

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
