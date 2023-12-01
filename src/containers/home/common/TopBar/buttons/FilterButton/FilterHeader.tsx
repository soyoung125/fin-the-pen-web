import { Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface FilterHeaderProps {
  title: string;
  isCheckAll?: boolean;
  onClickCheckAll?: () => void;
}

function FilterHeader({
  onClickCheckAll,
  isCheckAll,
  title,
}: FilterHeaderProps) {
  return (
    <Stack
      py="4px"
      px="20px"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      alignSelf="stretch"
      sx={{ background: "#F7F7F8" }}
    >
      <Typography fontSize="14px">{title}</Typography>
      {onClickCheckAll && (
        <Stack
          direction="row"
          onClick={onClickCheckAll}
          color={isCheckAll ? "#735BF2" : "#8C919C"}
          alignItems="center"
          gap="2px"
        >
          <Typography fontSize="14px" lineHeight={0}>
            전체
          </Typography>
          {isCheckAll ? (
            <CheckCircleIcon sx={{ width: "15px", height: "15px" }} />
          ) : (
            <CheckCircleOutlineIcon sx={{ width: "15px", height: "15px" }} />
          )}
        </Stack>
      )}
    </Stack>
  );
}

export default FilterHeader;
