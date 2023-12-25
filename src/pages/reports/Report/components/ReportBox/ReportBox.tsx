import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export interface ReportBoxProps {
  title: string;
  navigateTo?: `/${string}`;
  content?: ReactNode;
}

function ReportBox({ navigateTo, title, content }: ReportBoxProps) {
  const navigate = useNavigate();
  return (
    <Box bgcolor="white" p="16px" borderRadius="16px">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize="20px" fontWeight={700}>
          {title}
        </Typography>
        {navigateTo && (
          <Button
            variant="text"
            sx={{ fontSize: "14px" }}
            onClick={() => navigate(navigateTo)}
          >
            자세히 보기
            <ArrowForwardIosIcon fontSize="inherit" />
          </Button>
        )}
      </Stack>
      <Box>{content}</Box>
    </Box>
  );
}

export default ReportBox;
