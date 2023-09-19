import {
    Box, Button, Stack,
} from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';
import { useAppSelector } from '../../../../app/redux/hooks';
import { selectGuestMode } from '../../../../app/redux/slices/commonSlice';
import { fetchCreateAccount, fetchGetAccountList, fetchGetCardList } from '../../../../app/api/API';
import OrganizationSelect from './OrganizationSelect';
import AccountInput from './AccountInput';
import RoundedPaper from '@components/common/RoundedPaper';

function MyData() {
    const businessType = ['BK', 'CD', 'ST', 'IS'];
    const guestMode = useAppSelector(selectGuestMode);
    const [step, setStep] = useState(0);
    const [value, setValue] = useState(0);
    const [selected, setSelected] = useState({name: '', value: '', icon: ''});
    const [form, setForm] = useState({id: '', password: ''});

    const handleChangeType = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setSelected({name: '', value: '', icon: ''});
    };

    const handleSelectOrganization = (org: {name: string, value: string, icon: string}) => {
        setSelected(org);
    }

    const changeDetailInfo = (state: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [state.target.id]: state.target.value });
    };

    const changeStep = () => setStep(step + 1);

    const handleClickOk = async () => {
        if (guestMode) {
            alert('게스트 모드입니다.')
        } else {
            const result = await fetchCreateAccount([{
                businessType: businessType[value],
                organization: selected.value,
                // loginType: 1,
                ...form,
            }]);
            if (result.data) {
                const list = await getList();
                console.log(list);
            }
        }
    }

    const getList = async () => {
        let result = [];
        switch (businessType[value]) {
            case 'BK':
                result = await fetchGetAccountList(selected.value);
                break;
            case 'CD':
                result = await fetchGetCardList(selected.value);
                break;
            case 'ST':
                break;
            case 'IS':
                break;
        }
    }

    const steps = [
        <RoundedPaper my={0}>
            <Stack sx={{height: '320px'}} alignItems="center" justifyContent="center" spacing={1}>
                <Box>연결된 자산이 없어요.</Box>
                <Button
                    sx={{ borderRadius: '50px' }}
                    size="large"
                    variant="contained"
                    endIcon={<AddRoundedIcon />}
                    onClick={changeStep}
                >MY 자산 연결하기</Button>
            </Stack>
            {/* <Stack direction="row" justifyContent="space-between">
                <Box>My 자산 연결하기</Box>
                <KeyboardArrowRightIcon />
            </Stack> */}
        </RoundedPaper>,
        <OrganizationSelect
            value={value}
            selected={selected}
            handleChangeType={handleChangeType}
            handleSelectOrganization={handleSelectOrganization}
            changeStep={changeStep}
        />,
        <AccountInput
            selected={selected}
            form={form}
            changeDetailInfo={changeDetailInfo}
            handleClickOk={handleClickOk}
        />,
    ];

    return (
        <Box m={2}>
            {steps[step]}
        </Box>
    );
}

export default MyData;
