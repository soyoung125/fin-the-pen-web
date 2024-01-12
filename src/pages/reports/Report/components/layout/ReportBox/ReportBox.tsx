import { Box } from "@mui/material";
import { ReactNode } from "react";

export interface ReportBoxProps {
  content: ReactNode;
}

function ReportBox({ content }: ReportBoxProps) {
  return (
    <Box bgcolor="white" p="16px" borderRadius="16px">
      {content}
    </Box>
  );
}

export default ReportBox;
