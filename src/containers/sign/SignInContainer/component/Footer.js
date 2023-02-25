import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Typography color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        핀더펜
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}
export default Footer;
