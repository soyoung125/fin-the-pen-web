import { Box, Chip, Typography } from '@mui/material';
import Accordion from '../../../../../common/accordions/Accordion';
import AccordionSummary from '../../../../../common/accordions/AccordionSummary';
import AccordionDetails from '../../../../../common/accordions/AccordionDetails';

function FilterAccordion({ tag }) {
  const handleDelete = () => {
    console.info('You clicked the Chip.');
  };
  return (
    <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography color={tag.nested.color}>{tag.type}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {tag.nested.map((el) => (
          <Box key={el.type}>
            <Typography>{el.type}</Typography>
            {el.categories.map((cat) => (
              <Chip key={cat} label={cat} variant="outlined" onDelete={handleDelete} sx={{ mr: 1, mb: 1 }} />
            ))}
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
export default FilterAccordion;
