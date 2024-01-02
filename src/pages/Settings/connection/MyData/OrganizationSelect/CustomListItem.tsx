import { Box, Grid, Stack } from "@mui/material";
import { OrganizationInterface } from "@app/types/common.ts";
import styled from "@emotion/styled";

interface CustomListItemProps {
  item: OrganizationInterface;
  isChecked: boolean;
  opacity: number;
  handleSelectOrganization: (org: OrganizationInterface) => void;
}

const Img = styled("img")({
  display: "block",
  width: "28px",
  height: "28px",
});

function CustomListItem({
  item,
  isChecked,
  opacity,
  handleSelectOrganization,
}: CustomListItemProps) {
  return (
    <Grid
      item
      xs={6}
      key={Math.random()}
      onClick={() => handleSelectOrganization(item)}
      sx={{
        color: isChecked ? "#735BF2" : "#43464C",
        opacity: isChecked ? 1 : opacity,
      }}
    >
      <Stack direction="row" spacing={2}>
        <Img alt={item.name} src={item.icon} />
        <Box>{item.name}</Box>
      </Stack>
    </Grid>
  );
}

export default CustomListItem;
