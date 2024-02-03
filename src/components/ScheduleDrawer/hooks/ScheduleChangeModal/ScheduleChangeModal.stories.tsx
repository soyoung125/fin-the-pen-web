import { Meta } from "@storybook/react";
import { useState } from "react";
import { Button, Divider, Typography } from "@mui/material";
import { useScheduleChangeModal } from "@components/ScheduleDrawer/hooks/ScheduleChangeModal/useScheduleChangeModal.tsx";

export const Example = () => {
  const { openModal } = useScheduleChangeModal();
  const [modifyValue, setModifyValue] =
    useState("버튼을 눌러 업데이트 해주세요");
  const [deleteValue, setDeleteValue] =
    useState("버튼을 눌러 업데이트 해주세요");

  const handleDelete = async () => {
    const answer = await openModal({
      changeMode: "삭제",
    });
    setDeleteValue(answer);
  };

  const handleModify = async () => {
    const answer = await openModal({
      changeMode: "수정",
    });
    setModifyValue(answer);
  };

  return (
    <>
      <Typography>선택된 수정 옵션 : {modifyValue}</Typography>
      <Button variant="contained" color="info" onClick={handleModify}>
        modify
      </Button>
      <Divider sx={{ borderWidth: "2px", margin: "8px" }} />
      <Typography>선택된 삭제 옵션 : {deleteValue}</Typography>
      <Button variant="contained" color="error" onClick={handleDelete}>
        delete
      </Button>
    </>
  );
};

const meta = {
  title: "ui/ScheduleDrawer/hooks/useChangeModal",
  component: Example,
} satisfies Meta<typeof Example>;

export default meta;
