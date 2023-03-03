import { Typography } from '@mui/material';
import Accordion from '../../../../../../../components/common/accordions/Accordion';
import AccordionDetails from '../../../../../../../components/common/accordions/AccordionDetails';
import AccordionSummary from '../../../../../../../components/common/accordions/AccordionSummary';
import FilterChips from './FilterChips';

function FilterAccordion({ tag }) {
  return (
    <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{tag.type}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {tag.nested.map((el) => (
          <FilterChips key={el.type} nested={el} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
export default FilterAccordion;
