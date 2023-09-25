import { Box, Button, Tab, Tabs, Grid } from "@mui/material";
import { BANK_ORGANIZATION, CARD_ORGANIZATION } from "../../../../../domain/constants/organizations";
import CustomListItem from "./CustomListItem";
import { OrganizationInterface } from "@type/common";

interface OrganizationSelectProps {
    value: number,
    selected: OrganizationInterface,
    handleChangeType: (event: React.SyntheticEvent, newValue: number) => void,
    handleSelectOrganization: (org: OrganizationInterface) => void,
    changeStep: () => void,
}

function OrganizationSelect({ value, selected, handleChangeType, handleSelectOrganization, changeStep }: OrganizationSelectProps) {
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
            <Button fullWidth variant='contained' onClick={() => selected.name !== '' && changeStep()}>연결하기</Button>
        </>
    )
}

export default OrganizationSelect;
