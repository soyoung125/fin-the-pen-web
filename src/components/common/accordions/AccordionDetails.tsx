import styled from '@emotion/styled';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }: any) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
export default AccordionDetails;
