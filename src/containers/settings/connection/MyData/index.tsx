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
import OrganizationSelect from './OrganizationSelect';
import RoundedPaper from '../../../../components/common/RoundedPaper';

function MyData() {
    const businessType = ['BK', 'CD', 'ST', 'IS'];
    const guestMode = useAppSelector(selectGuestMode);
    const [step, setStep] = useState(0);
    const [value, setValue] = useState(0);
    const [selected, setSelected] = useState({name: '', value: ''});
    const [form, setForm] = useState({id: '', password: ''});

    const handleChangeType = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setSelected({name: '', value: ''});
    };

    const handleSelectOrganization = (org: {name: string, value: string}) => {
        setSelected(org);
    }

    const changeDetailInfo = (state: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [state.target.id]: state.target.value });
    };

    const changeStep = () => setStep(step + 1);

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
        <Paper sx={{ padding: 2 }} onClick={changeStep}>
            <Stack direction="row" justifyContent="space-between">
                <Box>My 자산 연결하기</Box>
                <KeyboardArrowRightIcon />
            </Stack>
        </Paper>,
        <OrganizationSelect
            value={value}
            selected={selected}
            handleChangeType={handleChangeType}
            handleSelectOrganization={handleSelectOrganization}
            changeStep={changeStep}
        />,
        <RoundedPaper my={1}>
            <Stack alignItems="center" spacing={1}>
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
        </RoundedPaper>,
    ];

    return (
        <Box m={2}>
            {steps[step]}
        </Box>
    );
}

export default MyData;
