import { Box, Popover } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useRef, useState } from "react";
import RoundedButton from "../../../../../../components/common/RoundedButton";
import SearchInput from "./popover/SearchInput";
import OptionList from "./popover/OptionList";
import ModalStaticBackdrop from "../../../../../../components/layouts/ModalStaticBackdrop";
import useModal from "../../../../../../hooks/useModal";
import PaymentHistoryModal from "./PaymentHistoryModal";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../../../app/redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import PATH from "../../../../../../domain/constants/path";

function SearchButton() {
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
        setAnchorEl(null);
        navigate(PATH.searchSchedule)
    }

    const openFetchPage = () => {
        setAnchorEl(null);
        navigate(PATH.fetchPaymentHistory)
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
