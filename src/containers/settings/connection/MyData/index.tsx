import {
    Box, Button, FormControl, IconButton, InputAdornment, List, ListItem, ListItemButton, ListItemText, OutlinedInput, Paper, Stack, Tab, Tabs,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import { BANK_ORGANIZATION, CARD_ORGANIZATION } from '../../../../domain/constants/organizations';
import RoundedBorderBox from '../../../../components/common/RoundedBorderBox';
import { useAppSelector } from '../../../../app/redux/hooks';
import { selectGuestMode } from '../../../../app/redux/slices/commonSlice';
import { fetchCreateAccount } from '../../../../app/api/API';

function MyData() {
    const businessType = ['BK', 'CD', 'ST', 'IS'];
    const guestMode = useAppSelector(selectGuestMode);
    const [step, setStep] = useState(0);
    const [value, setValue] = useState(0);
    const [selected, setSelected] = useState({name: '', value: ''});
    const [form, setForm] = useState({id: '', password: ''});

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setSelected({name: '', value: ''});
    };

    const changeDetailInfo = (state: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [state.target.id]: state.target.value });
    };

    const handleClickOk = async () => {
        // if (guestMode) {
        //     alert('게스트 모드입니다.')
        // } else {
        //     const result = await fetchCreateAccount([{
        //         businessType: businessType[value],
        //         organization: selected.value,
        //         ...form,
        //     }]);
        //     console.log(result);
        // }
        const result = await fetchCreateAccount([{
            businessType: businessType[value],
            organization: selected.value,
            // loginType: 1,
            ...form,
        }]);
        console.log(result);
    }

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
                            onClick={() => setSelected(b)}
                            secondaryAction={
                                <IconButton aria-label="comment">
                                    {selected === b ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                                </IconButton>
                            }>
                            <ListItemText primary={b.name} />
                        </ListItem>)
                    : CARD_ORGANIZATION.map((c) =>
                        <ListItem
                            button
                            onClick={() => setSelected(c)}
                            secondaryAction={
                                <IconButton aria-label="comment">
                                    {selected === c ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                                </IconButton>
                            }>
                            <ListItemText primary={c.name} />
                        </ListItem>)
                }
                <Button fullWidth variant='contained' onClick={() => selected.name !== '' && setStep(step + 1)}>연결하기</Button>
            </List>
        </>,
        <RoundedBorderBox>
            <Stack alignItems="center" p={1} spacing={1}>
                <Box>{selected.name}</Box>
                <FormControl fullWidth>
                    <OutlinedInput
                        id="id"
                        startAdornment={<InputAdornment position="start">ID</InputAdornment>}
                        value={form.id}
                        onChange={changeDetailInfo}
                        size="small"
                        inputProps={{
                            style: { textAlign: 'right' },
                        }}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <OutlinedInput
                        id="password"
                        type='password'
                        startAdornment={<InputAdornment position="start">PW</InputAdornment>}
                        value={form.password}
                        onChange={changeDetailInfo}
                        size="small"
                        inputProps={{
                            style: { textAlign: 'right' },
                        }}
                    />
                </FormControl>
                <Button fullWidth variant='contained' onClick={handleClickOk}>확인</Button>
            </Stack>
        </RoundedBorderBox>,
    ];

    return (
        <Box m={2}>
            {steps[step]}
        </Box>
    );
}

export default MyData;
