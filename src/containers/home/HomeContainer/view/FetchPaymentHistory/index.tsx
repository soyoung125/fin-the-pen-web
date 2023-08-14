import { Button, IconButton, Stack, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import moment from "moment";
import { useState } from "react";
import { useAppSelector } from "../../../../../app/redux/hooks";
import { selectGuestMode } from "../../../../../app/redux/slices/commonSlice";
import { fetchGetTransavrionList } from "../../../../../app/api/API";
import RoundedPaper from "../../../../../components/common/RoundedPaper";
import InputForm from "../../../common/TopBar/buttons/SearchButton/PaymentHistoryModal/InputForm";
import OptionSelector from "../../../common/TopBar/buttons/SearchButton/PaymentHistoryModal/OptionSelector";
//@ts-ignore
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { useNavigate } from "react-router-dom";

SwiperCore.use([Navigation]);

function FetchPaymentHistory() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState<string>('card');
    const [showInput, setShowInput] = useState(false);
    const [form, setForm] = useState({
        organization: '',
        account: '',
        cardNo: '',
        connectedId: '',
        startDate: moment().format('YYYY-MM-DD'),
        endDate: '',
        orderBy: '0',
        inquiryType: '0',
    })
    const guestMode = useAppSelector(selectGuestMode);

    const changeDetailInfo = (e: { target: { id: string; value: string | number; }; }) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    const changeStartAndEndDate = (date: string) => {
        setForm({ ...form, startDate: date, endDate: date })
    }

    const changeShowInput = () => {
        setShowInput(true);
    }

    const handleSubmit = async () => {
        if (selected === 'card') {
            console.log(form);
        } else if(selected === 'account') {
            if (!guestMode) {
                const result = await fetchGetTransavrionList({...form, endDate: form.endDate.replaceAll('-', ''), startDate: form.startDate.replaceAll('-', '')});
                console.log(result);
            } else {
                console.log({...form, endDate: form.endDate.replaceAll('-', ''), startDate: form.startDate.replaceAll('-', '')});
            }
        }
    }

    const handleSlideChange = (swiper: SwiperCore): void => {
        const activeIndex: number = swiper.activeIndex || 0;
        console.log(activeIndex);
    
        if (activeIndex === 1) {
          // 뒤로 가기 동작을 수행할 코드 작성
          navigate(-1);
        }
      };

    return (
        <Swiper onSlideChange={handleSlideChange}>
            <SwiperSlide>
                <Stack p={2} spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: 3, marginBottom: 1 }}>My 결제 내역 조회</Typography>
                    <RoundedPaper my={1}>
                        {showInput ?
                            <InputForm selected={selected} form={form} changeDetailInfo={changeDetailInfo} changeStartAndEndDate={changeStartAndEndDate} />
                            : <OptionSelector selected={selected} changeOption={(option) => setSelected(option)} />
                        }
                        <Button variant="contained" fullWidth sx={{ marginTop: 2 }} onClick={showInput ? handleSubmit : changeShowInput}>{showInput ? '조회하기' : '다음'}</Button>
                    </RoundedPaper>
                </Stack>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
        </Swiper>
    );
}

export default FetchPaymentHistory;
