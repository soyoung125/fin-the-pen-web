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

function SearchButton() {
    const user = useSelector(selectUser);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [isSearchMode, setIsSearchMode] = useState<Boolean>(false);
    const searchBtn = useRef(null);

    const {
        modalOpen: paymentHistoryModalOpen,
        openModal: openPaymentHistoryModal,
        closeModal: closePaymentHistoryModal
    } = useModal();

    const handleClick = () => {
        setAnchorEl(searchBtn.current);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setTimeout(() => setIsSearchMode(false), 300);
    };

    const handleOpenModal = () => {
        setAnchorEl(null);
        openPaymentHistoryModal();
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
                {isSearchMode ?
                    <SearchInput />
                    : <OptionList openSearchInput={() => user && setIsSearchMode(true)} handleOpenModal={() => user && handleOpenModal()} />
                }
            </Popover>

            <ModalStaticBackdrop
                keepMounted
                width="xs"
                open={paymentHistoryModalOpen}
                component={(
                    <PaymentHistoryModal closePaymentHistoryModal={closePaymentHistoryModal} />
                )}
            />
        </>
    );
}

export default SearchButton;
