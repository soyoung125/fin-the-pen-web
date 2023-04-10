import {
  Box, Button, Collapse, InputBase, List, ListItem, ListItemButton, Stack,
} from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CategoryTypeBadge from '../../../../components/common/CategoryTypeBadge';
import { selectAssetsByCategory } from '../../../../utils/redux/asset/assetSlice';

function CategoryList({
  handleClick, open, modifyAsset,
}) {
  const assets = useSelector(selectAssetsByCategory);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [asset, setAsset] = useState(0);

  const modify = (type, index, title, preValue) => {
    setSelectedCategory(index);
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
              {category.categories.map((c, index) => (
                <ListItem sx={{ py: 0 }} key={c.title}>
                  <Stack direction="row" justifyContent="space-between" sx={{ width: '100%', color: c.asset === '-' ? '#979797' : 'primary.main', fontSize: '14px' }}>
                    <Box sx={{ ml: 2 }}>
                      {c.title}
                    </Box>
                    {selectedCategory === index
                      ? (
                        <Box>
                          <InputBase
                            onChange={(e) => setAsset(e.target.value)}
                            autoFocus
                            sx={{
                              border: '1px solid', borderRadius: 1, fontSize: '14px', height: '21px', width: '100px',
                            }}
                            onKeyDown={(ev) => {
                              if (ev.key === 'Enter') {
                                // setSelectedCategory(index + 1);
                                modify(category.type, index + 1, c.title, c.asset);
                              }
                            }}
                          />
                          <Button sx={{ fontSize: '14px', height: '21px' }} onClick={() => modify(category.type, c.title, c.asset)}>save</Button>
                        </Box>
                      )
                      : (
                        <Box onClick={() => setSelectedCategory(index)}>
                          {c.asset === '-' ? `${c.asset}원` : `${c.asset.toLocaleString('kr-KO')}원`}
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
