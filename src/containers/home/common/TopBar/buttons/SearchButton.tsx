import { Box, Popover, Typography, Stack, ButtonBase, List, ListItem, IconButton, ListItemText, ListItemButton, FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import RoundedButton from "../../../../../components/common/RoundedButton";
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useEffect, useRef, useState } from "react";

function SearchButton() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [isSearchMode, setIsSearchMode] = useState<Boolean>(false);
    const searchBtn = useRef(null);

    const handleClick = () => {
        setAnchorEl(searchBtn.current);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setTimeout(() => setIsSearchMode(false), 300);
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
                {isSearchMode ?
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
                    : <List dense>
                        <ListItem
                            secondaryAction={
                                <IconButton edge="end">
                                    <KeyboardArrowRightIcon />
                                </IconButton>
                            }
                            disablePadding
                            onClick={() => setIsSearchMode(true)}
                        >
                            <ListItemButton>
                                <ListItemText
                                    primary="My 일정 검색하기"
                                />
                            </ListItemButton>
                        </ListItem>

                        <ListItem
                            secondaryAction={
                                <IconButton edge="end">
                                    <KeyboardArrowRightIcon />
                                </IconButton>
                            }
                            disablePadding
                            onClick={() => alert('결제 내역 불러오기')}
                        >
                            <ListItemButton>
                                <ListItemText
                                    primary="My 결제 내역 불러오기"
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                }
            </Popover>
        </>
    );
}

export default SearchButton;
