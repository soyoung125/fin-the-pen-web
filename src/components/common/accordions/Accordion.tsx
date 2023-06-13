import { Theme } from "@mui/system";

import styled from "@emotion/styled";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { ReactNode } from "react";

interface StyledAccordionProps extends AccordionProps {
  theme?: Theme;
}

const Accordion = styled((props: StyledAccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export default Accordion;
