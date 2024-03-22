import { Button } from "@mui/material";
import reset from "@assets/icons/reset.svg";

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
      <img src={reset} alt="reset" width="16px" height="16px" />
      초기화
    </Button>
  );
}

export default ResetButton;
