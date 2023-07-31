import { Button, IconButton, Stack, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import RoundedPaper from "../../../../../../../components/common/RoundedPaper";
import moment from "moment";
import { useState } from "react";
import { useAppSelector } from "../../../../../../../app/redux/hooks";
import { selectGuestMode } from "../../../../../../../app/redux/slices/commonSlice";
import { fetchGetTransavrionList } from "../../../../../../../app/api/API";
import OptionSelector from "./OptionSelector";
import InputForm from "./InputForm";

interface PaymentHistoryModalProps {
    closePaymentHistoryModal: () => void;
}

function PaymentHistoryModal({ closePaymentHistoryModal }: PaymentHistoryModalProps) {
    const [selected, setSelected] = useState<string | null>(null);
    const [form, setForm] = useState({
        organization: '0002',
        account: '',
        connectedId: '',
        startDate: '',
        endDate: '',
        orderBy: '0',
    })
    const guestMode = useAppSelector(selectGuestMode);

    const changeDetailInfo = (e: { target: { id: string; value: string | number; }; }) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    const resetForm = () => {
        setForm({
            organization: '0002',
            account: '',
            connectedId: '',
            startDate: moment().format('YYYY-MM-DD'),
            endDate: '',
            orderBy: '0',
        });
    }

    const handleSubmit = async () => {
        if (selected === 'card') {
            alert('카드로 거래 내역 조회')
        } else if(selected === 'account') {
            if (!guestMode) {
                const result = await fetchGetTransavrionList({...form, endDate: form.endDate.replaceAll('-', ''), startDate: form.startDate.replaceAll('-', '')});
                console.log(result);
            } else {
                console.log({...form, endDate: form.endDate.replaceAll('-', ''), startDate: form.startDate.replaceAll('-', '')});
            }
        }
        handleCloseModal();
    }

    const handleCloseModal = () => {
        closePaymentHistoryModal();
        setTimeout(() => { setSelected(null); resetForm(); }, 300);
    }

    return (
        <Stack p={2} spacing={1}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <IconButton disabled sx={{ width: '40px' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>My 결제 내역 조회</Typography>
                <IconButton onClick={handleCloseModal}>
                    <ClearIcon />
                </IconButton>
            </Stack>
            <RoundedPaper my={1}>
                {selected === 'account' ?
                    <InputForm form={form} changeDetailInfo={changeDetailInfo} />
                    : <OptionSelector selected={selected} changeOption={(option) => setSelected(option)} />
                }
                <Button variant="contained" fullWidth sx={{ marginTop: 2 }} onClick={handleSubmit}>조회하기</Button>
            </RoundedPaper>
        </Stack>
    )
}

export default PaymentHistoryModal;
