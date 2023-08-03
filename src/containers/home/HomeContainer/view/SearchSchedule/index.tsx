import { FormControl, IconButton, InputAdornment, OutlinedInput, Stack, Typography } from "@mui/material";
import RoundedPaper from "../../../../../components/common/RoundedPaper";
import SearchIcon from '@mui/icons-material/Search';
import { useRef } from "react";

function SearchSchedule() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    
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
            </RoundedPaper>
        </Stack>
    );
}

export default SearchSchedule;
