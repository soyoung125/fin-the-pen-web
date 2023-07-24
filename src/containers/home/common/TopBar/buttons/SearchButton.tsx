import { Box, Popover, Typography, Stack } from "@mui/material";
import RoundedButton from "../../../../../components/common/RoundedButton";
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRef, useState } from "react";

function SearchButton() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const searchBtn = useRef(null);

    const handleClick = () => {
        setAnchorEl(searchBtn.current);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Box ref={searchBtn}>
                <RoundedButton value="user" onClick={handleClick}>
                    <SearchIcon />
                </RoundedButton>
            </Box>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Stack p={1} spacing={1}>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="caption">My 일정 검색하기</Typography>
                        <KeyboardArrowRightIcon fontSize="small" />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Typography variant="caption">My 결제 내역 불러오기</Typography>
                        <KeyboardArrowRightIcon fontSize="small" />
                    </Stack>
                </Stack>
            </Popover>
        </>
    );
}

export default SearchButton;
