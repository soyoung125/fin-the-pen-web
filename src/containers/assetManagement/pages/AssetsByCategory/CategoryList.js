import {
  Box, Collapse, List, ListItemButton, Stack,
} from '@mui/material';
import CategoryTypeBadge from '../../../../components/common/CategoryTypeBadge';

function CategoryList({ assets, handleClick, open }) {
  return (
    <List>
      {assets.map((category) => (
        <Box key={category.type}>
          <ListItemButton onClick={() => handleClick(category.type)}>
            <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
              <Stack direction="row">
                <CategoryTypeBadge color={category.color} mr={0.5} />
                {category.type}
              </Stack>
              xxxxxxx원
            </Stack>
          </ListItemButton>
          <Collapse in={open === category.type} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {category.categories.map((c) => (
                <ListItemButton sx={{ py: 0 }} key={c.title}>
                  <Stack direction="row" justifyContent="space-between" sx={{ width: '100%', color: 'primary.main', fontSize: '14px' }}>
                    <Box sx={{ ml: 2 }}>
                      {c.title}
                    </Box>
                    {`${c.asset}원`}
                  </Stack>
                </ListItemButton>
              ))}
            </List>
          </Collapse>

        </Box>
      ))}
    </List>
  );
}

export default CategoryList;
