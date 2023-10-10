import {
  Box,
  Button,
  Tab,
  Tabs,
  Grid,
} from "@mui/material";
import {
  BANK_ORGANIZATION,
  CARD_ORGANIZATION,
} from "../../../../../constants/organizations";
import CustomListItem from "./CustomListItem";
import { OrganizationInterface } from "@type/common";
import { useRecoilValue } from "recoil";
import { headerRepository } from "@app/recoil/header";
import { useEffect } from "react";

interface OrganizationSelectProps {
  value: number;
  selected: OrganizationInterface;
  handleChangeType: (event: React.SyntheticEvent, newValue: number) => void;
  handleSelectOrganization: (org: OrganizationInterface) => void;
  openAlertModal: () => void;
}

function OrganizationSelect({ value, selected, handleChangeType, handleSelectOrganization, openAlertModal }: OrganizationSelectProps) {
  const { changeHeaderTitle } = useRecoilValue(headerRepository);

  useEffect(() => {
    changeHeaderTitle('자산연결');
  }, [])

  return (
    <>
      <Box sx={{ fontSize: '22px', fontWeight: 700 }}>어떤 자산을 연결하세요?</Box>
      <Tabs value={value} onChange={handleChangeType} aria-label="basic tabs example">
        <Tab label="은행" />
        <Tab label="카드" />
      </Tabs>

      <Grid container spacing={2} paddingY={2}>
        {value === 0
          ? BANK_ORGANIZATION.map((b) =>
            <CustomListItem
              key={Math.random()}
              item={b}
              isChecked={selected === b}
              opacity={selected.name === '' ? 1 : 0.7}
              handleSelectOrganization={handleSelectOrganization}
            />)
          : CARD_ORGANIZATION.map((c) =>
            <CustomListItem
              key={Math.random()}
              item={c}
              isChecked={selected === c}
              opacity={selected.name === '' ? 1 : 0.7}
              handleSelectOrganization={handleSelectOrganization}
            />)
        }
      </Grid>

      {selected.name !== "" &&
        <Button
          fullWidth variant='contained'
          sx={{ position: 'fixed', bottom: "30px", width: "calc(100vw - 32px)" }}
          onClick={openAlertModal}>
          연결하기
        </Button>
      }
    </>
  )
}

export default OrganizationSelect;
