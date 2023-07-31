import { Grid, Stack, Typography } from "@mui/material";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import RoundedBorderBox from "../../../../../../../components/common/RoundedBorderBox";

interface OptionSelectorProps {
    selected: string | null,
    changeOption: (option: string) => void;
}
function OptionSelector({ changeOption, selected }: OptionSelectorProps) {
    return (
        <Grid container spacing={1} sx={{ textAlign: 'center', wordBreak: 'keep-all' }}>
            <Grid item xs={6}><Typography variant="button">카드</Typography></Grid>
            <Grid item xs={6}><Typography variant="button">은행/계좌</Typography></Grid>
            <Grid item xs={6} onClick={() => changeOption('card')}>
                <RoundedBorderBox greyBorder={!(selected === 'card')}>
                    <Stack alignItems="center" pb={1}>
                        <CreditCardIcon sx={{ fontSize: 60, my: 2 }} />
                        <Typography variant="caption">보유하신 카드 결제 내역을 조회합니다.</Typography>
                    </Stack>
                </RoundedBorderBox>
            </Grid>
            <Grid item xs={6} onClick={() => changeOption('account')}>
                <RoundedBorderBox greyBorder={!(selected === 'account')}>
                    <Stack alignItems="center" pb={1}>
                        <AccountBalanceWalletIcon sx={{ fontSize: 60, my: 2 }} />
                        <Typography variant="caption">보유하신 계좌 결재 내역을 조회합니다.</Typography>
                    </Stack>
                </RoundedBorderBox>
            </Grid>
        </Grid>
    )
}

export default OptionSelector;
