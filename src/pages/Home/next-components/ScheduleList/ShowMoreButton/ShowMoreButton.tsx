import { Button } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useNavigate } from "react-router-dom";

export interface ShowMoreButtonProps {
  count: number;
  navigateTo?: string;
}

function ShowMoreButton({ count, navigateTo }: ShowMoreButtonProps) {
  const navigate = useNavigate();
  return (
    <Button
      variant="text"
      fullWidth
      endIcon={<ArrowForwardIosRoundedIcon />}
      sx={{ color: "#5B5F67", fontWeight: 500 }}
      onClick={() => navigateTo && navigate(navigateTo)}
    >
      <span style={{ color: "#735BF2" }}>{`${count}건`}</span>
      &nbsp;일정 더보기
    </Button>
  );
}

export default ShowMoreButton;
