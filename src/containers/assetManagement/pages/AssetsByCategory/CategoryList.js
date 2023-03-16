import {
  Box, Button, Collapse, InputBase, List, ListItem, ListItemButton, Stack,
} from '@mui/material';
import { useState } from 'react';
import CategoryTypeBadge from '../../../../components/common/CategoryTypeBadge';

function CategoryList({
  assets, handleClick, open, modifyAsset,
}) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [asset, setAsset] = useState(0);

  const modify = (type, title, preValue) => {
    setSelectedCategory('');
    modifyAsset(type, title, preValue === '-' ? 0 : preValue, parseInt(asset, 10));
  };

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
              {`${category.total.toLocaleString('kr-KO')}원`}
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
                          <InputBase
                            onChange={(e) => setAsset(e.target.value)}
                            sx={{
                              border: '1px solid', borderRadius: 1, fontSize: '14px', height: '21px', width: '100px',
                            }}
                          />
                          <Button sx={{ fontSize: '14px', height: '21px' }} onClick={() => modify(category.type, c.title, c.asset)}>save</Button>
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
