import { Stack, Select, InputAdornment, MenuItem, OutlinedInput, TextField, Box } from "@mui/material";
import { LocalizationProvider, MobileDatePicker, PickersDay } from "@mui/x-date-pickers";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { RenderDayFunction } from "../../../../../../../types/common";
import { useState } from "react";
import { BANK_ORGANIZATION, CARD_ORGANIZATION } from "../../../../../../../domain/constants/organizations";

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

    const organizations = selected === 'card' ? CARD_ORGANIZATION : BANK_ORGANIZATION;

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
                                endAdornment: <InputAdornment position="end"><CalendarTodayOutlinedIcon fontSize="small" color={form.endDate === '' ? 'secondary' : 'primary'} /></InputAdornment>
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
