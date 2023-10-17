import {
    LocalizationProvider,
    MobileDatePicker,
    PickersDay,
} from "@mui/x-date-pickers";
import {
    Stack,
    InputAdornment,
    TextField,
    Box,
    Grid,
} from "@mui/material";
import moment from "moment";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { RenderDayFunction } from "@type/common";
import InputGrid from "./InputGrid";

interface PeriodInputProps {
    startDate: string;
    endDate: string;
    isSelectStartDate: boolean;
    changeDate: (date: string) => void;
}

function PeriodInput({ startDate, endDate, isSelectStartDate, changeDate }: PeriodInputProps) {
    const renderDayInPicker: RenderDayFunction = (
        day,
        _value,
        DayComponentProps
    ) => {
        if (moment(startDate).isSame(endDate)) {
            return <PickersDay {...DayComponentProps} />;
        }
        if (moment(startDate).isSame(day)) {
            return (
                <PickersDay
                    sx={{
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        marginX: 0,
                        width: "40px",
                    }}
                    className="Mui-selected"
                    {...DayComponentProps}
                />
            );
        }
        if (moment(endDate).isSame(day)) {
            return (
                <PickersDay
                    sx={{
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        marginX: 0,
                        width: "40px",
                    }}
                    className="Mui-selected"
                    {...DayComponentProps}
                />
            );
        }
        if (
            moment(startDate).isBefore(day) &&
            moment(endDate).isAfter(day)
        ) {
            return (
                <PickersDay
                    sx={{
                        borderRadius: 0,
                        marginX: 0,
                        width: "40px",
                    }}
                    className="Mui-selected"
                    {...DayComponentProps}
                />
            );
        }
        return <PickersDay {...DayComponentProps} />;
    };

    return (
        <InputGrid title="조회기간">
            <Grid xs item>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <MobileDatePicker
                        value={moment(startDate)}
                        onChange={(newValue) => {
                            newValue && changeDate(newValue.format("YYYY-MM-DD"));
                        }}
                        ToolbarComponent={() => (
                            <Stack direction="row" spacing={1} justifyContent="center" p={2}>
                                <Box sx={{ color: isSelectStartDate ? "grey" : "black" }}>
                                    {startDate}
                                </Box>
                                <Box>~</Box>
                                <Box sx={{ color: isSelectStartDate ? "black" : "grey" }}>
                                    {endDate}
                                </Box>
                            </Stack>
                        )}
                        renderDay={renderDayInPicker}
                        componentsProps={{
                            actionBar: {
                                actions: ["accept"],
                            },
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <CalendarTodayOutlinedIcon
                                                fontSize="small"
                                                color={endDate === "" ? "secondary" : "primary"}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                                inputProps={{
                                    style: { textAlign: "right" },
                                }}
                                size="small"
                                value={`${startDate}~${endDate}`}
                            />
                        )}
                    />
                </LocalizationProvider>
            </Grid>
        </InputGrid>
    );
}

export default PeriodInput;
