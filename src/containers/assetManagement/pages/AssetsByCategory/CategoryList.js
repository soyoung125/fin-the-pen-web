import {
  Box, Button, Collapse, InputBase, List, ListItem, ListItemButton, Stack,
} from '@mui/material';
import { useState } from 'react';
import CategoryTypeBadge from '../../../../components/common/CategoryTypeBadge';

function CategoryList({ assets, handleClick, open }) {
  const [selectedCategory, setSelectedCategory] = useState('');

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
                    {selectedCategory === c.title
                      ? (
                        <Box>
                          <InputBase sx={{
                            border: '1px solid', borderRadius: 1, fontSize: '14px', height: '21px', width: '100px',
                          }}
                          />
                          <Button sx={{ fontSize: '14px', height: '21px' }} onClick={() => setSelectedCategory('')}>save</Button>
                        </Box>
                      )
                      : (
                        <Box onClick={() => setSelectedCategory(c.title)}>
                          {`${c.asset}원`}
                        </Box>
                      )}
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
