import {
  Box, Collapse, List, ListItem, ListItemButton, Stack,
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
                <ListItem sx={{ py: 0 }} key={c.title}>
                  <Stack direction="row" justifyContent="space-between" sx={{ width: '100%', color: c.asset === '-' ? '#979797' : 'primary.main', fontSize: '14px' }}>
                    <Box sx={{ ml: 2 }}>
                      {c.title}
                    </Box>
                    <Box onClick={() => console.log(category.type, c.title)}>
                      {`${c.asset}원`}
                    </Box>
                  </Stack>
                </ListItem>
              ))}
            </List>
          </Collapse>

        </Box>
      ))}
    </List>
  );
}

export default CategoryList;
