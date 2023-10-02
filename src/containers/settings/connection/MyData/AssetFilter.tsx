import RoundedPaper from "@components/common/RoundedPaper";
import { Box, Button, FormControl, InputAdornment, OutlinedInput, Stack, TextField, Grid } from "@mui/material";
import { OrganizationInterface } from "@type/common";
import styled from "styled-components";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

interface AssetFilter {
    selected: OrganizationInterface;
    selectedAccount: { name: string, account: string, startDate: string, endDate: string, orderBy: string };
    handleClickSerch: () => void;
}

const Img = styled('img')({
    padding: '10px',
    borderRadius: '50%',
    border: '1px solid var(--gray-scale-010, #DEE0E3)',
    display: 'block',
    width: '80px',
    height: '80px',
});

function AssetFilter({ selected, selectedAccount, handleClickSerch }: AssetFilter) {
    return (
        <RoundedPaper my={0}>
            <Stack alignItems="center" spacing={1.5}>
                <Img alt={selected.name} src={selected.icon} />
                <Box sx={{ fontSize: '20px', fontWeight: 500 }}>{selected.name}</Box>
                <FormControl fullWidth>
                    <OutlinedInput
                        id="name"
                        disabled
                        startAdornment={<InputAdornment position="start">{selectedAccount.name}</InputAdornment>}
                        value={selectedAccount.account}
                        size="small"
                        inputProps={{
                            style: { textAlign: 'right' },
                        }} />
                </FormControl>

                <Grid container>
                    <Grid xs="auto" item sx={{ paddingRight: "8px"}}>
                        <Box sx={{ textAlign: 'center', padding: '8px 12px', border: '1.4px solid var(--main-01, #735BF2)', borderRadius: '4px', fontSize: '14px' }}>조회기간</Box>
                    </Grid>
                    <Grid xs item>
                        <TextField
                            fullWidth
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><CalendarTodayOutlinedIcon fontSize="small" color={selectedAccount.endDate === '' ? 'secondary' : 'primary'} /></InputAdornment>
                            }}
                            inputProps={{
                                style: { textAlign: 'right' },
                            }}
                            size="small"
                            value={`${selectedAccount.startDate}~${selectedAccount.endDate}`}
                        />
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid xs="auto" item sx={{ paddingRight: "8px"}}>
                        <Box sx={{ textAlign: 'center', padding: '8px 12px', border: '1.4px solid var(--main-01, #735BF2)', borderRadius: '4px', fontSize: '14px' }}>정렬기준</Box>
                    </Grid>
                    <Grid xs item sx={{ paddingRight: "8px"}}>
                        <Button fullWidth variant="contained" sx={{ borderRadius: "4px 4px 0px 0px" }}>최신순</Button>
                    </Grid>
                    <Grid xs item>
                        <Button fullWidth variant="outlined" sx={{ borderRadius: "4px 4px 0px 0px", borderColor: "#A9ACB2", color: "#5B5F67" }}>과거순</Button>
                    </Grid>
                </Grid>

                <Button fullWidth variant='contained' onClick={handleClickSerch}>확인</Button>
            </Stack>
        </RoundedPaper>
    );
}

export default AssetFilter;
