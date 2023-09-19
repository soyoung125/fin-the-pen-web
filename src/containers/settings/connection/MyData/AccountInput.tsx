import {
    Box, Button, FormControl, InputAdornment, OutlinedInput, Stack,
} from '@mui/material';
import RoundedPaper from "../../../../components/common/RoundedPaper";
import styled from 'styled-components';

interface AccountInputProps {
    selected: { name: string, value: string, icon: string },
    form: { id: string, password: string },
    changeDetailInfo: (state: React.ChangeEvent<HTMLInputElement>) => void,
    handleClickOk: () => void,
}

const Img = styled('img')({
    padding: '10px',
    borderRadius: '50%',
    border: '1px solid var(--gray-scale-010, #DEE0E3)',
    display: 'block',
    width: '80px',
    height: '80px',
});

function AccountInput({ selected, form, changeDetailInfo, handleClickOk }: AccountInputProps) {
    return (
        <>
            <Box sx={{ fontSize: '22px', fontWeight: 700, whiteSpace: 'pre-line' }}>자산 연결을 위해{`\n`}기관의 로그인 정보를 입력해주세요.</Box>
            <RoundedPaper my={1}>
                <Stack alignItems="center" spacing={1}>
                    <Img alt={selected.name} src={selected.icon} />
                    <Box sx={{ fontSize: '20px', fontWeight: 500 }}>{selected.name}</Box>
                    <FormControl fullWidth>
                        <OutlinedInput
                            id="id"
                            startAdornment={<InputAdornment position="start">ID</InputAdornment>}
                            value={form.id}
                            onChange={changeDetailInfo}
                            size="small"
                            inputProps={{
                                style: { textAlign: 'right' },
                            }} />
                    </FormControl>
                    <FormControl fullWidth>
                        <OutlinedInput
                            id="password"
                            type='password'
                            startAdornment={<InputAdornment position="start">PW</InputAdornment>}
                            value={form.password}
                            onChange={changeDetailInfo}
                            size="small"
                            inputProps={{
                                style: { textAlign: 'right' },
                            }} />
                    </FormControl>
                    <Button fullWidth variant='contained' onClick={handleClickOk}>확인</Button>
                </Stack>
            </RoundedPaper>
        </>
    );
}

export default AccountInput;
