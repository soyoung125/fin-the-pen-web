import { Box, Button, ButtonBase, Checkbox, FormControl, IconButton, InputAdornment, OutlinedInput, Stack, Typography } from "@mui/material";
import RoundedPaper from "../../../../../components/common/RoundedPaper";
import SearchIcon from '@mui/icons-material/Search';
import { useRef, useState } from "react";
import { useAppSelector } from "../../../../../app/redux/hooks";
import { selectSchedules } from "../../../../../app/redux/slices/scheduleSlice";
import RoundedBorderBox from "../../../../../components/common/RoundedBorderBox";
import moment from "moment";
import 'moment/locale/ko'

function SearchSchedule() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const schedules = useAppSelector(selectSchedules);
    const [checkedSchedules, setCheckedSchedules] = useState<string[]>([]);
    
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = () => {
        if (inputRef.current){
            console.log(inputRef.current.value);
        }
    };

    const handleClick = (id: string) => {
        const idx = checkedSchedules.indexOf(id);
        if (idx < 0) {
            setCheckedSchedules(checkedSchedules.concat(id));
        } else {
            setCheckedSchedules(checkedSchedules.filter(s => s !== id));
        }
    }

    return (
        <Stack p={2} spacing={1}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: 3, marginBottom: 1 }}>My 일정 검색하기</Typography>
            <RoundedPaper my={1}>
                <FormControl fullWidth>
                    <OutlinedInput
                        id="time"
                        type="text"
                        autoFocus
                        onKeyDown={handleKeyPress}
                        endAdornment={<InputAdornment position="end"><IconButton onClick={handleSearch}><SearchIcon color="primary" /></IconButton></InputAdornment>}
                        size="small"
                        inputRef={inputRef}
                    />
                </FormControl>
                {schedules.map((schedule, index) => (
                    <>
                        <Box pb={1} />
                        <RoundedBorderBox greyBorder={true}>
                            <Stack direction="row" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
                                <Stack direction="row" spacing={1}>
                                    <RoundedBorderBox greyBorder={true}>
                                        <ButtonBase
                                            onClick={() => handleClick(schedule.id as string)}
                                            sx={{
                                                width: '30px', height: '100%', display: 'grid', placeItems: 'center',
                                                color: checkedSchedules.includes(schedule.id as string) ? 'white' : '#979797',
                                                backgroundColor: checkedSchedules.includes(schedule.id as string) ? 'primary.main' : 'null',
                                            }}
                                        >
                                            {index+1}
                                        </ButtonBase>
                                    </RoundedBorderBox>
                                    <Stack>
                                        <Box>{moment(schedule.date).format('YYYY/MM/DD')}</Box>
                                        <Box>{`${schedule.start_time}~${schedule.end_time}`}</Box>
                                    </Stack>
                                </Stack>
                                <Stack alignItems="flex-end">
                                    <Box>{schedule.event_name}</Box>
                                    <Box>{`${schedule.type} ${schedule.expected_spending}`}</Box>
                                </Stack>
                            </Stack>
                        </RoundedBorderBox>
                    </>
                ))}

                {schedules.length > 0 && <Button fullWidth variant="contained" sx={{mt: 1}}>선택 일정 삭제</Button>}
            </RoundedPaper>
        </Stack>
    );
}

export default SearchSchedule;
