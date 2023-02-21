import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function EasyAuthentication() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)}>인증</Button>
  );
}

export default EasyAuthentication;
