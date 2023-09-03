import { Box, Button, IconButton, List, ListItem, ListItemText, Tab, Tabs } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { BANK_ORGANIZATION, CARD_ORGANIZATION } from "../../../../../domain/constants/organizations";
import CustomListItem from "./CustomListItem";

interface OrganizationSelectProps {
    value: number,
    selected: {name: string, value: string},
    handleChangeType: (event: React.SyntheticEvent, newValue: number) => void,
    handleSelectOrganization: (org: {name: string, value: string}) => void,
    changeStep: () => void,
}

function OrganizationSelect({ value, selected,  handleChangeType, handleSelectOrganization, changeStep }: OrganizationSelectProps) {
    return (
        <>
            <Box>어떤 자산을 연결할까요?</Box>
            <Tabs value={value} onChange={handleChangeType} aria-label="basic tabs example">
                <Tab label="은행" />
                <Tab label="카드" />
            </Tabs>
            <List dense>
                {value === 0
                    ? BANK_ORGANIZATION.map((b) =>
                        <CustomListItem
                            key={Math.random()}
                            item={b}
                            isChecked={selected === b}
                            handleSelectOrganization={handleSelectOrganization}
                        />)
                    : CARD_ORGANIZATION.map((c) =>
                        <CustomListItem
                            key={Math.random()}
                            item={c}
                            isChecked={selected === c}
                            handleSelectOrganization={handleSelectOrganization}
                        />)
                }
                <Button fullWidth variant='contained' onClick={() => selected.name !== '' && changeStep()}>연결하기</Button>
            </List>
        </>
    )
}

export default OrganizationSelect;
