import { Box, Typography, FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function SearchInput() {
    return (
        <Box px={1.5} py={1}>
            <Typography variant="button">My 일정 검색하기</Typography>
            <FormControl fullWidth>
                <OutlinedInput
                    id="time"
                    type="text"
                    autoFocus
                    endAdornment={<InputAdornment position="end"><SearchIcon color="primary" /></InputAdornment>}
                    // onChange={}
                    size="small"
                    inputProps={{
                        style: { textAlign: 'right' },
                    }}
                />
            </FormControl>
        </Box>
    );
}

export default SearchInput;
