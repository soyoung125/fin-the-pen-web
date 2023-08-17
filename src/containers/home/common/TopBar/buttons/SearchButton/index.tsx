import { Box, Popover } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useRef, useState } from "react";
import RoundedButton from "../../../../../../components/common/RoundedButton";
import OptionList from "./popover/OptionList";
import { useNavigate } from "react-router-dom";
import PATH from "../../../../../../domain/constants/path";
import { useAppSelector } from "../../../../../../app/redux/hooks";
import { selectUser } from "../../../../../../app/redux/slices/userSlice";

function SearchButton() {
    const user = useAppSelector(selectUser);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const searchBtn = useRef(null);

    const handleClick = () => {
        setAnchorEl(searchBtn.current);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openSearchPage = () => {
        if (user) {
            setAnchorEl(null);
            navigate(PATH.searchSchedule)
        }
    }

    const openFetchPage = () => {
        if (user) {
            setAnchorEl(null);
            navigate(PATH.fetchPaymentHistory)
        }
    }

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
                <OptionList openSearchPage={openSearchPage} openFetchPage={openFetchPage} />
            </Popover>
        </>
    );
}

export default SearchButton;
