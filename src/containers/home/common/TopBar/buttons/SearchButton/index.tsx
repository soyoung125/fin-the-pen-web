import { Box, Popover } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useRef, useState } from "react";
import RoundedButton from "../../../../../../components/common/RoundedButton";
import SearchInput from "./popover/SearchInput";
import OptionList from "./popover/OptionList";

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
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                {isSearchMode ?
                    <SearchInput />
                    : <OptionList openSearchInput={() => setIsSearchMode(true)} />
                }
            </Popover>
        </>
    );
}

export default SearchButton;
