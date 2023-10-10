import {
    Box, Button, Stack,
} from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../app/redux/hooks';
import { selectGuestMode } from '../../../../app/redux/slices/commonSlice';
import { fetchCreateAccount, fetchGetAccountList, fetchGetCardList, fetchGetTransavrionList } from '../../../../app/api/API';
import OrganizationSelect from './OrganizationSelect';
import AccountInput from './AccountInput';
import RoundedPaper from '@components/common/RoundedPaper';
import AssetSelect from './AssetSelect';
import AssetFilter from './AssetFilter';
import moment from 'moment';
import { useRecoilValue } from 'recoil';
import { bottomTabMenuRepository } from '@app/recoil/bottomTabMenu';
import { headerRepository } from '@app/recoil/header';
import { useNavigate } from 'react-router-dom';
import useModal from '@hooks/useModal';
import AlertModal from '@components/common/AlertModal';
import { OrganizationInterface } from '@type/common';

function MyData() {
    const navigate = useNavigate();
    const businessType = ['BK', 'CD', 'ST', 'IS'];
    const guestMode = useAppSelector(selectGuestMode);
    const { openBottomBar, closeBottomBar } = useRecoilValue(bottomTabMenuRepository);
    const { changeBackAction, changeHeaderTitle } = useRecoilValue(headerRepository);
    const {
        modalOpen: alertModalOpen,
        openModal: openAlertModal,
        closeModal: closeAlertModal,
    } = useModal();

    const [step, setStep] = useState(0);
    const [value, setValue] = useState(0);
    const [selected, setSelected] = useState<OrganizationInterface>({ name: '', value: '', icon: '', limit: 0 });
    const [form, setForm] = useState({ id: '', password: '' });
    const [selectedAccount, setSelectedAccount] = useState({ name: '', account: '', startDate: moment().format('YYYY/MM/DD'), endDate: '', orderBy: "0" })
    const [content, setContent] = useState("");
    const [pwdCount, setPwdCount] = useState(1);

    useEffect(() => {
        if (step === 0) {
            changeBackAction(() => () => navigate(-1));
            changeHeaderTitle("마이데이터");
            setSelected({ name: '', value: '', icon: '', limit: 0 });
        } else {
            changeBackAction(() => () => setStep(step - 1));
        }
        switch (step) {
            case 1:
                setContent("거래내역을 조회하시겠습니까?");
                break;
            case 3:
                setContent("모든 계좌 연결을 해제하시겠습니까?\n조회된 거래내역은 삭제되지 않습니다.");
                break;
            case 4:
                setContent("조회에 성공했습니다.\n홈 화면에 내역을 추가하시겠습니까?")
                break;
        }
    }, [step])

    useEffect(() => {
        closeBottomBar();
        return (() => openBottomBar());
    }, [])

    const handleChangeType = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setSelected({ name: '', value: '', icon: '', limit: 0 });
    };

    const handleSelectOrganization = (org: OrganizationInterface) => {
        setSelected(org);
    }

    const changeDetailInfo = (state: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [state.target.id]: state.target.value });
    };

    const changeStep = () => setStep(step + 1);

    const handleSelectAccount = (name: string, account: string) => {
        setSelectedAccount({ ...selectedAccount, name: name, account: account });
        changeStep()
    }

    const handleClickSerch = async () => {
        // const result = await fetchGetTransavrionList(selectedAccount);
        console.log('ok');
        openAlertModal();
    }

    const goFirstStep = () => setStep(0);

    const handleClickYes = () => {
        switch (step) {
            case 1:
                changeStep();
                break;
            case 2:
                if(content === "자산 연결에 성공했습니다.") {
                    changeStep();
                }
                break;
            case 3:
                goFirstStep();
                break;
            case 4:
                goFirstStep();
                break;
        }
        closeAlertModal();
    }

    const handleClickOk = async () => {
        // if (guestMode) {
        //     alert('게스트 모드입니다.')
        // } else {
        //     const result = await fetchCreateAccount([{
        //         businessType: businessType[value],
        //         organization: selected.value,
        //         // loginType: 1,
        //         ...form,
        //     }]);
        //     if (result.data) {
        //         const list = await getList();
        //         console.log(list);
        //     }
        // }
        const result = await fetchCreateAccount([{
            businessType: businessType[value],
            organization: selected.value,
            // loginType: 1,
            ...form,
        }]);

        if (result) {
            setContent("자산 연결에 성공했습니다.")
            const list = await getList();
            console.log(list);
        } else if (selected.limit === "-") {
            setContent(`로그인 정보가 일치하지 않습니다.`)
        } else {
            setContent(`로그인 정보가 일치하지 않습니다.\n(${pwdCount}/${selected.limit})`)
            setPwdCount(pwdCount + 1)
        }

        openAlertModal();
    }

    const getList = async () => {
        let result = [];
        switch (businessType[value]) {
            case 'BK':
                result = await fetchGetAccountList(selected.value);
                return result.data;
            case 'CD':
                result = await fetchGetCardList(selected.value);
                return result.data;
            case 'ST':
                break;
            case 'IS':
                break;
        }
    }

    const steps = [
        <RoundedPaper my={0}>
            <Stack sx={{ height: '320px' }} alignItems="center" justifyContent="center" spacing={1}>
                <Box>연결된 자산이 없어요.</Box>
                <Button
                    sx={{ borderRadius: '50px' }}
                    size="large"
                    variant="contained"
                    endIcon={<AddRoundedIcon />}
                    onClick={changeStep}
                >MY 자산 연결하기</Button>
            </Stack>
        </RoundedPaper>,
        <OrganizationSelect
            value={value}
            selected={selected}
            handleChangeType={handleChangeType}
            handleSelectOrganization={handleSelectOrganization}
            openAlertModal={openAlertModal}
        />,
        <AccountInput
            selected={selected}
            form={form}
            changeDetailInfo={changeDetailInfo}
            handleClickOk={handleClickOk}
        />,
        <AssetSelect selected={selected} handleSelectAccount={handleSelectAccount} openAlertModal={openAlertModal} />,
        <AssetFilter selected={selected} selectedAccount={selectedAccount} handleClickSerch={handleClickSerch} />
    ];

    return (
        <Box m={2}>
            {steps[step]}

            <AlertModal
                open={alertModalOpen}
                handleClose={step !== 2 ? closeAlertModal : undefined}
                handleClickYes={() => handleClickYes()}
                mode={"setting"}
                content={content} />
        </Box>
    );
}

export default MyData;
