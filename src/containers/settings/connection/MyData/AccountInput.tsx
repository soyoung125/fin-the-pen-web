import {
    Box, Button, FormControl, InputAdornment, OutlinedInput, Stack,
} from '@mui/material';
import RoundedPaper from "../../../../components/common/RoundedPaper";

interface AccountInputProps {
    selected: {name: string, value: string},
    form: {id: string, password: string},
    changeDetailInfo: (state: React.ChangeEvent<HTMLInputElement>) => void,
    handleClickOk: () => void,
}

function AccountInput({ selected, form, changeDetailInfo, handleClickOk }: AccountInputProps) {
    return (
        <RoundedPaper my={1}>
            <Stack alignItems="center" spacing={1}>
                <Box>{selected.name}</Box>
                <FormControl fullWidth>
                    <OutlinedInput
                        id="id"
                        startAdornment={<InputAdornment position="start">ID</InputAdornment>}
                        value={form.id}
                        onChange={changeDetailInfo}
                        size="small"
                        inputProps={{
                            style: { textAlign: 'right' },
                        }}
                    />
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
                        }}
                    />
                </FormControl>
                <Button fullWidth variant='contained' onClick={handleClickOk}>확인</Button>
            </Stack>
        </RoundedPaper>
    );
}

export default AccountInput;
