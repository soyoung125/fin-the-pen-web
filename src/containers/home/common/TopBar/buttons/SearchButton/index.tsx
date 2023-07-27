import { Box, Button, Divider, Grid, IconButton, InputAdornment, MenuItem, OutlinedInput, Popover, Select, Stack, Typography } from "@mui/material";
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
    const [selected, setSelected] = useState<string | null>(null);
    const [form, setForm] = useState({
        organization: '0002',
        account: '',
        connectedId: '',
        startDate: '',
        endDate: '',
        orderBy: 0,
    })
    const searchBtn = useRef(null);

    const organizations = [
        {name: '산업은행', value: '0002'},
        {name: '기업은행', value: '0003'},
        {name: '국민은행', value: '0004'},
        {name: '수협은행', value: '0007'},
        {name: '농협은행', value: '0011'},
        {name: '우리은행', value: '0020'},
        {name: 'SC은행', value: '0023'},
        {name: '씨티은행', value: '0027'},
        {name: '대구은행', value: '0031'},
        {name: '부산은행', value: '0032'},
        {name: '광주은행', value: '0034'},
        {name: '제주은행', value: '0035'},
        {name: '전북은행', value: '0037'},
        {name: '경남은행', value: '0039'},
        {name: '새마을금고', value: '0045'},
        {name: '신협은행', value: '0048'},
        {name: '우체국', value: '0071'},
        {name: 'KEB하나은행', value: '0081'},
        {name: '신한은행', value: '0088'},
        {name: 'K뱅크', value: '0089'},
    ]

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

    const changeDetailInfo = (e: { target: { id: string; value: string | number; }; }) => {
        setForm({ ...form, [e.target.id]: e.target.value })
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
                            {selected === 'account' ?
                                <Stack spacing={1}>
                                    <Select
                                        inputProps={{
                                            IconComponent: () => null,
                                            style: { textAlign: 'right' },
                                        }}
                                        startAdornment={<InputAdornment position="start">거래 은행</InputAdornment>}
                                        sx={{ '.MuiSelect-select.MuiSelect-outlined': { textAlign: 'right', paddingRight: '14px' } }}
                                        value={form.organization}
                                        onChange={(e) => changeDetailInfo({target: {id: 'organization', value: e.target.value}})}
                                    >
                                        {organizations.map((organization) => <MenuItem key={Math.random()} value={organization.value}>{organization.name}</MenuItem>)}
                                    </Select>

                                    <OutlinedInput
                                        id="account"
                                        startAdornment={<InputAdornment position="start">계좌 번호</InputAdornment>}
                                        value={form.account}
                                        onChange={changeDetailInfo}
                                        size="small"
                                        inputProps={{
                                            style: { textAlign: 'right' },
                                        }}
                                    />

                                    <OutlinedInput
                                        id="connectedId"
                                        startAdornment={<InputAdornment position="start">커넥티드ID</InputAdornment>}
                                        value={form.connectedId}
                                        onChange={changeDetailInfo}
                                        size="small"
                                        inputProps={{
                                            style: { textAlign: 'right' },
                                        }}
                                    />

                                    <OutlinedInput
                                        id="startDate"
                                        startAdornment={<InputAdornment position="start">시작일</InputAdornment>}
                                        type="date"
                                        value={form.startDate}
                                        onChange={changeDetailInfo}
                                        size="small"
                                        inputProps={{
                                            style: { textAlign: 'right' },
                                        }}
                                    />

                                    <OutlinedInput
                                        id="endDate"
                                        startAdornment={<InputAdornment position="start">종료일</InputAdornment>}
                                        type="date"
                                        value={form.endDate}
                                        onChange={changeDetailInfo}
                                        size="small"
                                        inputProps={{
                                            style: { textAlign: 'right' },
                                        }}
                                    />

                                    <Select
                                        inputProps={{
                                            IconComponent: () => null,
                                            style: { textAlign: 'right' },
                                        }}
                                        startAdornment={<InputAdornment position="start">표시 항목</InputAdornment>}
                                        sx={{ '.MuiSelect-select.MuiSelect-outlined': { textAlign: 'right', paddingRight: '14px' } }}
                                        id="orderBy"
                                        value={form.orderBy}
                                        onChange={(e) => changeDetailInfo({target: {id: 'orderBy', value: e.target.value}})}
                                    >
                                        <MenuItem value={0}>오름차순</MenuItem>
                                        <MenuItem value={1}>내림차순</MenuItem>
                                    </Select>
                                </Stack>
                                : <Grid container spacing={1} sx={{ textAlign: 'center', wordBreak: 'keep-all' }}>
                                    <Grid item xs={6}><Typography variant="button">카드</Typography></Grid>
                                    <Grid item xs={6}><Typography variant="button">은행/계좌</Typography></Grid>
                                    <Grid item xs={6} onClick={() => setSelected('card')}>
                                        <RoundedBorderBox greyBorder={!(selected === 'card')}>
                                            <Stack alignItems="center" pb={1}>
                                                <CreditCardIcon sx={{ fontSize: 60, my: 2 }} />
                                                <Typography variant="caption">보유하신 카드 결제 내역을 조회합니다.</Typography>
                                            </Stack>
                                        </RoundedBorderBox>
                                    </Grid>
                                    <Grid item xs={6} onClick={() => setSelected('account')}>
                                        <RoundedBorderBox greyBorder={!(selected === 'account')}>
                                            <Stack alignItems="center" pb={1}>
                                                <AccountBalanceWalletIcon sx={{ fontSize: 60, my: 2 }} />
                                                <Typography variant="caption">보유하신 계좌 결재 내역을 조회합니다.</Typography>
                                            </Stack>
                                        </RoundedBorderBox>
                                    </Grid>
                                </Grid>
                            }
                            <Button variant="contained" fullWidth sx={{ marginTop: 2 }}>조회하기</Button>
                        </RoundedPaper>
                    </Stack>
                )}
            />
        </>
    );
}

export default SearchButton;
