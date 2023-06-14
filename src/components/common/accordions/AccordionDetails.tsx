import styled from '@emotion/styled';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Theme } from "@mui/system";

interface AccordionDetailsProps {
  theme: Theme;
}

const AccordionDetails = styled(MuiAccordionDetails)<AccordionDetailsProps>(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default AccordionDetails;
