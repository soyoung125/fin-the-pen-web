import RoundedButton from '@components/common/RoundedButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { headerBackActionState } from '@app/recoil/header';

function BackButton() {
    const navigate = useNavigate();
    const headerBackAction = useRecoilValue(headerBackActionState);

    return (
        <RoundedButton value="login" onClick={headerBackAction}>
            <ArrowBackIosIcon sx={{ color: '#000000' }} />
        </RoundedButton>
    );
}

export default BackButton;
