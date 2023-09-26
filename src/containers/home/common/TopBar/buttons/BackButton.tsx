import RoundedButton from '@components/common/RoundedButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();
    return (
        <RoundedButton value="login" onClick={() => navigate(-1)}>
            <ArrowBackIosIcon sx={{ color: '#000000' }} />
        </RoundedButton>
    );
}

export default BackButton;
