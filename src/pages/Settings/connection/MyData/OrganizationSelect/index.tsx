import { Box, Button, Grid, Tab, Tabs } from "@mui/material";
import {
  BANK_ORGANIZATION,
  CARD_ORGANIZATION,
} from "@constants/organizations.tsx";
import CustomListItem from "./CustomListItem.tsx";
import { OrganizationInterface } from "@type/common.tsx";

interface OrganizationSelectProps {
  value: number;
  selected: OrganizationInterface;
  handleChangeType: (event: React.SyntheticEvent, newValue: number) => void;
  handleSelectOrganization: (org: OrganizationInterface) => void;
  openAlertModal: () => void;
}

function OrganizationSelect({
  value,
  selected,
  handleChangeType,
  handleSelectOrganization,
  openAlertModal,
}: OrganizationSelectProps) {
  return (
    <>
      <Box sx={{ fontSize: "22px", fontWeight: 700 }}>
        어떤 자산을 연결하세요?
      </Box>
      <Tabs
        value={value}
        onChange={handleChangeType}
        aria-label="basic tabs example"
      >
        <Tab label="은행" />
        <Tab label="카드" />
      </Tabs>

      <Grid container spacing={2} paddingY={2}>
        {value === 0
          ? BANK_ORGANIZATION.map((b) => (
              <CustomListItem
                key={Math.random()}
                item={b}
                isChecked={selected === b}
                opacity={selected.name === "" ? 1 : 0.7}
                handleSelectOrganization={handleSelectOrganization}
              />
            ))
          : CARD_ORGANIZATION.map((c) => (
              <CustomListItem
                key={Math.random()}
                item={c}
                isChecked={selected === c}
                opacity={selected.name === "" ? 1 : 0.7}
                handleSelectOrganization={handleSelectOrganization}
              />
            ))}
      </Grid>

      {selected.name !== "" && (
        <Button
          fullWidth
          variant="contained"
          sx={{
            position: "fixed",
            bottom: "30px",
            width: "calc(100vw - 32px)",
          }}
          onClick={openAlertModal}
        >
          연결하기
        </Button>
      )}
    </>
  );
}

export default OrganizationSelect;
