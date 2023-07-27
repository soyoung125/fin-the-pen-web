import { Box, Button, Divider, Grid, IconButton, Popover, Stack, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useRef, useState } from "react";
import RoundedButton from "../../../../../../components/common/RoundedButton";
import SearchInput from "./popover/SearchInput";
import OptionList from "./popover/OptionList";
import ModalStaticBackdrop from "../../../../../../components/layouts/ModalStaticBackdrop";
import useModal from "../../../../../../hooks/useModal";
import RoundedPaper from "../../../../../../components/common/RoundedPaper";
import RoundedBorderBox from "../../../../../../components/common/RoundedBorderBox";

function SearchButton() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [isSearchMode, setIsSearchMode] = useState<Boolean>(false);
    const [selectCard, setSelectCard] = useState<Boolean>(true);
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
                    : <OptionList openSearchInput={() => setIsSearchMode(true)} handleOpenModal={() => handleOpenModal()} />
                }
            </Popover>

            <ModalStaticBackdrop
                keepMounted
                width="xs"
                open={paymentHistoryModalOpen}
                component={(
                    <Stack p={2} spacing={1}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <IconButton disabled sx={{ width: '40px' }} />
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>My 결제 내역 조회</Typography>
                            <IconButton onClick={closePaymentHistoryModal}>
                                <ClearIcon />
                            </IconButton>
                        </Stack>
                        <RoundedPaper my={1}>
                            <Grid container spacing={1} sx={{ textAlign: 'center', wordBreak: 'keep-all' }}>
                                <Grid item xs={6}><Typography variant="button">카드</Typography></Grid>
                                <Grid item xs={6}><Typography variant="button">은행/계좌</Typography></Grid>
                                <Grid item xs={6} onClick={() => setSelectCard(true)}>
                                    <RoundedBorderBox greyBorder={!selectCard}>
                                        <Stack alignItems="center" pb={1}>
                                            <CreditCardIcon sx={{ fontSize: 60, my: 2 }} />
                                            <Typography variant="caption">보유하신 카드 결제 내역을 조회합니다.</Typography>
                                        </Stack>
                                    </RoundedBorderBox>
                                </Grid>
                                <Grid item xs={6} onClick={() => setSelectCard(false)}>
                                    <RoundedBorderBox greyBorder={selectCard}>
                                        <Stack alignItems="center" pb={1}>
                                            <AccountBalanceWalletIcon sx={{ fontSize: 60, my: 2 }} />
                                            <Typography variant="caption">보유하신 계좌 결재 내역을 조회합니다.</Typography>
                                        </Stack>
                                    </RoundedBorderBox>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" fullWidth>조회하기</Button>
                                </Grid>
                            </Grid>
                        </RoundedPaper>
                    </Stack>
                )}
            />
        </>
    );
}

export default SearchButton;
