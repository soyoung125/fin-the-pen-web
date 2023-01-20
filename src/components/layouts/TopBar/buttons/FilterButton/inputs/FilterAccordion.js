import { Box, Chip, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Accordion from '../../../../../common/accordions/Accordion';
import AccordionSummary from '../../../../../common/accordions/AccordionSummary';
import AccordionDetails from '../../../../../common/accordions/AccordionDetails';
import { selectFiltered, updateFilter } from '../../../../../../utils/redux/schedule/scheduleSlice';

function FilterAccordion({ tag }) {
  const dispatch = useDispatch();
  const filtered = useSelector(selectFiltered);
  const handleClick = (state) => {
    console.info(state.target.innerText);
    dispatch(updateFilter(state.target.innerText));
  };
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
          <Box key={el.type}>
            <Typography>{el.type}</Typography>
            {el.categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                variant={filtered.findIndex((word) => word === cat) === -1 ? 'outlined' : 'contained'}
                onClick={handleClick}
                sx={{ mr: 1, mb: 1, color: filtered.findIndex((word) => word === cat) === -1 ? el.color : 'white' }}
              />
            ))}
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
export default FilterAccordion;
