import { Box, Grid, ListItem, Stack } from "@mui/material";
import CategoryTypeBadge from "../../../../components/common/CategoryTypeBadge";
import { AnalysisData } from "@app/types/common.ts";

interface AnalysisListItemProps {
  category: AnalysisData;
  rank: number;
  clickListItem: (category: AnalysisData) => void;
  bgColor: string;
}

function AnalysisListItem({
  category,
  rank,
  clickListItem,
  bgColor,
}: AnalysisListItemProps) {
  return (
    <ListItem onClick={() => clickListItem(category)}>
      <Grid container spacing={2}>
        <Grid xs={2} item>
          <Box display="flex" justifyContent="flex-end">
            {rank}
            st
          </Box>
        </Grid>
        <Grid xs={5} item>
          <Stack
            direction="row"
            alignItems="stretch"
            sx={{
              paddingX: 1,
              borderRadius: 2,
              backgroundColor: bgColor,
            }}
          >
            <CategoryTypeBadge color={category.color} mr={0.5} />
            {category.label}
          </Stack>
        </Grid>
        <Grid xs={5} item>
          <Box display="flex" justifyContent="flex-end" mr={2}>
            {category.value.toLocaleString("ko-KR")}
          </Box>
        </Grid>
      </Grid>
    </ListItem>
  );
}

export default AnalysisListItem;
