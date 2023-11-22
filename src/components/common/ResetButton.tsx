import { Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

interface ResetButtonProps {
  handleClick: () => void;
}

function ResetButton({ handleClick }: ResetButtonProps) {
  return (
    <Button
      sx={{
        paddingX: 0,
        color: "secondary.dark",
        fontSize: "14px",
        justifyContent: "start",
      }}
      onClick={handleClick}
    >
      <RefreshIcon sx={{ fontSize: "16px" }} />
      초기화
    </Button>
  );
}

export default ResetButton;
