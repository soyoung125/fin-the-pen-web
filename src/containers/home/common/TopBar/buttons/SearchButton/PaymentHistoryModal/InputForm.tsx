import { Stack, Select, InputAdornment, MenuItem, OutlinedInput, TextField, Box } from "@mui/material";
import { LocalizationProvider, MobileDatePicker, PickersDay } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { RenderDayFunction } from "../../../../../../../types/common";
import { useState } from "react";
import { DatePickerToolbar } from "@mui/x-date-pickers/DatePicker/DatePickerToolbar";

interface InputFormProps {
    selected: string,
    form: {
        organization: string,
        cardNo: string,
        account: string,
        connectedId: string,
        startDate: string,
        endDate: string,
        orderBy: string,
        inquiryType: string,
    },
    changeDetailInfo: (e: { target: { id: string; value: string | number; }; }) => void,
    changeStartAndEndDate: (date: string) => void,
}

function InputForm({ selected, form, changeDetailInfo, changeStartAndEndDate }: InputFormProps) {
    const [isSelectStartDate, setIsSelectStartDate] = useState(false);
    const bankOrganizations = [
        { name: '산업은행', value: '0002' },
        { name: '기업은행', value: '0003' },
        { name: '국민은행', value: '0004' },
        { name: '수협은행', value: '0007' },
        { name: '농협은행', value: '0011' },
        { name: '우리은행', value: '0020' },
        { name: 'SC은행', value: '0023' },
        { name: '씨티은행', value: '0027' },
        { name: '대구은행', value: '0031' },
        { name: '부산은행', value: '0032' },
        { name: '광주은행', value: '0034' },
        { name: '제주은행', value: '0035' },
        { name: '전북은행', value: '0037' },
        { name: '경남은행', value: '0039' },
        { name: '새마을금고', value: '0045' },
        { name: '신협은행', value: '0048' },
        { name: '우체국', value: '0071' },
        { name: 'KEB하나은행', value: '0081' },
        { name: '신한은행', value: '0088' },
        { name: 'K뱅크', value: '0089' },
    ]
    const cardOrganizations = [
        { name: 'KB카드', value: '0301' },
        { name: '우리카드', value: '0309' },
        { name: '현대카드', value: '0302' },
        { name: '롯데카드', value: '0311' },
        { name: '삼성카드', value: '0303' },
        { name: '하나카드', value: '0313' },
        { name: 'NH카드', value: '0304' },
        { name: '전북카드', value: '0315' },
        { name: 'BC카드', value: '0305' },
        { name: '광주카드', value: '0316' },
        { name: '신한카드', value: '0306' },
        { name: '수협카드', value: '0320' },
        { name: '씨티카드', value: '0307' },
        { name: '제주카드', value: '03032120' },
        { name: '산업은행카드', value: '0002' },
    ]

    const organizations = selected === 'card' ? cardOrganizations : bankOrganizations;

    const changeDate = (date: string) => {
        if (isSelectStartDate) {
            if(moment(date).isAfter(form.endDate)) {
                changeStartAndEndDate(date)
            } else {
                changeDetailInfo({ target: { id: 'startDate', value: date } })
            }
        } else {
            if(moment(date).isBefore(form.startDate)) {
                changeStartAndEndDate(date)
            } else {
                changeDetailInfo({ target: { id: 'endDate', value: date } })
            }
        }
        setIsSelectStartDate(!isSelectStartDate);
    }

    const renderDayInPicker: RenderDayFunction = (day, _value, DayComponentProps) => {
        if (moment(form.startDate).isSame(form.endDate)) {
            return <PickersDay {...DayComponentProps} />;
        }
        if (moment(form.startDate).isSame(day)) {
            return (
                <PickersDay
                    sx={{
                        borderTopRightRadius: 0, borderBottomRightRadius: 0, marginX: 0, width: '40px',
                    }}
                    className="Mui-selected"
                    {...DayComponentProps}
                />
            );
        }
        if (moment(form.endDate).isSame(day)) {
            return (
                <PickersDay
                    sx={{
                        borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginX: 0, width: '40px',
                    }}
                    className="Mui-selected"
                    {...DayComponentProps}
                />
            );
        }
        if (moment(form.startDate).isBefore(day) && moment(form.endDate).isAfter(day)) {
            return (
                <PickersDay
                    sx={{
                        borderRadius: 0, marginX: 0, width: '40px',
                    }}
                    className="Mui-selected"
                    {...DayComponentProps}
                />
            );
        }
        return <PickersDay {...DayComponentProps} />;
    };

    return (
        <Stack spacing={1}>
            <Select
                inputProps={{
                    IconComponent: () => null,
                    style: { textAlign: 'right' },
                }}
                size="small"
                startAdornment={<InputAdornment position="start">{selected === 'card' ? '카드사' : '거래은행'}</InputAdornment>}
                sx={{ '.MuiSelect-select.MuiSelect-outlined': { textAlign: 'right', paddingRight: '14px' } }}
                value={form.organization}
                onChange={(e) => changeDetailInfo({ target: { id: 'organization', value: e.target.value } })}
            >   
                {organizations.map((organization) => <MenuItem key={Math.random()} value={organization.value}>{organization.name}</MenuItem>)}
            </Select>

            <OutlinedInput
                id={selected === 'card' ? 'cardNo' : 'account'}
                startAdornment={<InputAdornment position="start">{selected === 'card' ? '카드번호' : '계좌번호'}</InputAdornment>}
                value={selected === 'card' ? form.cardNo : form.account}
                onChange={changeDetailInfo}
                size="small"
                inputProps={{
                    style: { textAlign: 'right' },
                }}
            />

            <OutlinedInput
                id="connectedId"
                startAdornment={<InputAdornment position="start">커넥티드ID</InputAdornment>}
                value={form.connectedId}
                onChange={changeDetailInfo}
                size="small"
                inputProps={{
                    style: { textAlign: 'right' },
                }}
            />

            <LocalizationProvider dateAdapter={AdapterMoment}>
                <MobileDatePicker
                    value={moment(form.startDate)}
                    onChange={(newValue) => {
                        newValue && changeDate(newValue.format('YYYY-MM-DD'));
                    }}
                    ToolbarComponent={() =>
                    <Stack direction='row' spacing={1} justifyContent="center" p={2}>
                        <Box sx={{color: isSelectStartDate ? 'grey' : 'black' }}>{form.startDate}</Box>
                        <Box>~</Box>
                        <Box sx={{color: isSelectStartDate ? 'black' : 'grey' }}>{form.endDate}</Box>
                    </Stack>}
                    renderDay={renderDayInPicker}
                    componentsProps={{
                        actionBar: {
                            actions: ["accept"]
                        }
                    }}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">조회일자</InputAdornment>,
                            }}
                            inputProps={{
                                style: { textAlign: 'right' },
                            }}
                            size="small"
                            value={`${form.startDate}~${form.endDate}`}
                        />
                    }
                />
            </LocalizationProvider>
            
            <Select
                inputProps={{
                    IconComponent: () => null,
                    style: { textAlign: 'right' },
                }}
                size="small"
                startAdornment={<InputAdornment position="start">조회정렬기준</InputAdornment>}
                sx={{ '.MuiSelect-select.MuiSelect-outlined': { textAlign: 'right', paddingRight: '14px' } }}
                id="orderBy"
                value={form.orderBy}
                onChange={(e) => changeDetailInfo({ target: { id: 'orderBy', value: e.target.value } })}
            >
                <MenuItem value={'0'}>오름차순</MenuItem>
                <MenuItem value={'1'}>내림차순</MenuItem>
            </Select>

            {selected === 'card' &&
                <Select
                    inputProps={{
                        IconComponent: () => null,
                        style: { textAlign: 'right' },
                    }}
                    size="small"
                    startAdornment={<InputAdornment position="start">조회구분</InputAdornment>}
                    sx={{ '.MuiSelect-select.MuiSelect-outlined': { textAlign: 'right', paddingRight: '14px' } }}
                    id="inquiryType"
                    value={form.inquiryType}
                    onChange={(e) => changeDetailInfo({ target: { id: 'inquiryType', value: e.target.value } })}
                >
                    <MenuItem value={'0'}>카드별조회</MenuItem>
                    <MenuItem value={'1'}>전체조회</MenuItem>
                </Select>
            }
        </Stack>
    )
}

export default InputForm;
