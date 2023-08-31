import {
    Box, Button, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Stack, Tab, Tabs,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import { BANK_ORGANIZATION, CARD_ORGANIZATION } from '../../../../domain/constants/organizations';

function MyData() {
    const [step, setStep] = useState(0);
    const [value, setValue] = useState(0);
    const [selected, setSelected] = useState('');

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setSelected('');
    };

    const steps = [
        <Paper sx={{ padding: 2 }} onClick={() => setStep(step + 1)}>
            <Stack direction="row" justifyContent="space-between">
                <Box>My 자산 연결하기</Box>
                <KeyboardArrowRightIcon />
            </Stack>
        </Paper>,
        <>
            <Box>어떤 자산을 연결할까요?</Box>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="은행" />
                <Tab label="카드" />
            </Tabs>
            <List dense>
                {value === 0
                    ? BANK_ORGANIZATION.map((b) =>
                        <ListItem
                            button
                            onClick={() => setSelected(b.value)}
                            secondaryAction={
                                <IconButton aria-label="comment">
                                    {selected === b.value ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                                </IconButton>
                            }>
                            <ListItemText primary={b.name} />
                        </ListItem>)
                    : CARD_ORGANIZATION.map((c) =>
                        <ListItem
                            button
                            onClick={() => setSelected(c.value)}
                            secondaryAction={
                                <IconButton aria-label="comment">
                                    {selected === c.value ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                                </IconButton>
                            }>
                            <ListItemText primary={c.name} />
                        </ListItem>)
                }
                <Button>연결하기</Button>
            </List>
        </>,
    ];

    return (
        <Box m={2}>
            {steps[step]}
        </Box>
    );
}

export default MyData;
