import { styled } from '@mui/material/styles';

const Root = styled('div')(
  ({ theme }) => `
    color: ${
  theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
};
    font-size: 14px;
  `,
);

export default Root;
