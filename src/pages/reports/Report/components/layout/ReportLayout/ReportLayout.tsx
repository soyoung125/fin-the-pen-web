import {ReactNode} from "react";
import {Box, Button, Stack, Typography} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {useNavigate} from "react-router-dom";

export interface ReportLayoutProps {
  title: string;
  navigateTo?: `/${string}`;
  content?: ReactNode;
}

function ReportLayout({navigateTo, title, content}: ReportLayoutProps) {
  const navigate = useNavigate();
  return (
    <Stack spacing={4}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize="20px" fontWeight={700}>
          {title}
        </Typography>
        {navigateTo && (
          <Button
            variant="text"
            sx={{fontSize: "14px"}}
            onClick={() => navigate(navigateTo)}
          >
            자세히 보기
            <ArrowForwardIosIcon fontSize="inherit"/>
          </Button>
        )}
      </Stack>
      <Box>{content}</Box>
    </Stack>
  )
}

export default ReportLayout;