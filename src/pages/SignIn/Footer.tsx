import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Typography color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" to="https://github.com/soyoung125/fin-the-pen-web">
        핀더펜
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}
export default Footer;
