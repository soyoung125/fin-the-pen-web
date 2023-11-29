import { Stack, Typography } from "@mui/material";

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
        <Typography
          onClick={onClickCheckAll}
          fontSize="14px"
          color={isCheckAll ? "#735BF2" : "#8C919C"}
        >
          전체
        </Typography>
      )}
    </Stack>
  );
}

export default FilterHeader;
