import styled from '@emotion/styled';
import MuiAccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails';
import { Theme } from "@mui/system";

interface StyledAccordionDetailsProps extends AccordionDetailsProps {
  theme?: Theme;
}

const AccordionDetails = styled(MuiAccordionDetails)<StyledAccordionDetailsProps>(({ theme }) => ({
  padding: theme.spacing(0),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default AccordionDetails;
