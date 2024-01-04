import { Meta } from "@storybook/react";
import { Button, Divider, Typography } from "@mui/material";
import { useDialog } from "./useDialog.tsx";
import { useState } from "react";

export const Example = () => {
  const { openAlert, openConfirm } = useDialog();
  const [value, setValue] = useState("버튼을 눌러 업데이트 해주세요");

  const handleAlert = async () => {
    await openAlert({
      title: "알림",
      content:
        "개발자 모드의 콘솔창에서 확인해보면 확인 이후에 출력문이 실행되는 것을 확인할 수 있습니다.",
      approveText: "확인",
    });
    console.log("확인 이후에 출력됐을 거에요");
  };

  const handleConfirm = async () => {
    const answer = await openConfirm({
      title: "확인",
      content:
        "확인 또는 취소를 눌러주세요. 누른 값에 따라 answer가 true or false로 결정됩니다.",
      approveText: "확인",
      rejectText: "취소",
    });
    if (answer) {
      setValue("확인을 눌렀습니다.");
    } else {
      setValue("취소를 눌렀습니다.");
    }
  };

  return (
    <>
      <Typography variant="h1">openAlert</Typography>
      <Button variant="contained" color="info" onClick={handleAlert}>
        Alert
      </Button>
      <Divider sx={{ borderWidth: "2px", margin: "8px" }} />
      <Typography variant="h1">openConfirm</Typography>
      <Typography>handleConfirm에 의해서 선택된 값 : {value}</Typography>
      <Button variant="contained" color="success" onClick={handleConfirm}>
        Confirm
      </Button>
    </>
  );
};

const meta = {
  title: "Common/useDialog",
  component: Example,
} satisfies Meta<typeof Example>;

export default meta;
