import { Box, Button, IconButton, List, ListItem, ListItemText, Tab, Tabs } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { BANK_ORGANIZATION, CARD_ORGANIZATION } from "../../../../../domain/constants/organizations";

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
                        <ListItem
                            key={Math.random()}
                            button
                            onClick={() => handleSelectOrganization(b)}
                            secondaryAction={
                                <IconButton aria-label="comment">
                                    {selected === b ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                                </IconButton>
                            }>
                            <ListItemText primary={b.name} />
                        </ListItem>)
                    : CARD_ORGANIZATION.map((c) =>
                        <ListItem
                            key={Math.random()}
                            button
                            onClick={() => handleSelectOrganization(c)}
                            secondaryAction={
                                <IconButton aria-label="comment">
                                    {selected === c ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                                </IconButton>
                            }>
                            <ListItemText primary={c.name} />
                        </ListItem>)
                }
                <Button fullWidth variant='contained' onClick={() => selected.name !== '' && changeStep()}>연결하기</Button>
            </List>
        </>
    )
}

export default OrganizationSelect;
