import {
  Box, Collapse, InputBase, List, ListItem, ListItemButton, Stack,
} from '@mui/material';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import CategoryTypeBadge from '../../../../components/common/CategoryTypeBadge';
import { selectAssetsByCategory } from '../../../../utils/redux/asset/assetSlice';

function CategoryList({
  handleClick, open, modifyAsset,
}) {
  const assets = useSelector(selectAssetsByCategory);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [asset, setAsset] = useState(0);
  const totalAsset = useRef();

  const modify = (category, title, preValue) => {
    let sum = 0;
    const total = category.total === '-' ? 0 : category.total;
    if (asset === '') {
      sum = category.sum - (preValue === '-' ? 0 : preValue);
      modifyAsset(category.type, title, sum, 0);
    }
    if (asset !== '-') {
      sum = category.sum - (preValue === '-' ? 0 : preValue) + parseInt(asset, 10);
      if (sum > total) {
        alert('합계가 설정한 카테고리 지출 목표 금액을 넘었습니다.');
        return;
      }
      modifyAsset(category.type, title, sum, parseInt(asset, 10));
    }
    setSelectedCategory(selectedCategory + 1);
  };

  const clickCategory = (category) => {
    handleClick(category);
    setSelectedCategory(null);
  };

  return (
    <List>
      {assets.map((category) => (
        <Box key={category.type}>
          <ListItemButton onClick={() => clickCategory(category.type)}>
            <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
              <Stack direction="row">
                <CategoryTypeBadge color={category.color} mr={0.5} />
                {category.type}
              </Stack>
              {open === category.type && !selectedCategory
                ? (
                  <InputBase
                    autoFocus
                    type="number"
                    ref={totalAsset}
                    defaultValue={category.total === '-' ? '' : category.total}
                    sx={{
                      border: '1px solid', borderRadius: 1, fontSize: '14px', height: '21px', width: '100px',
                    }}
                    onKeyDown={(ev) => {
                      if (ev.key === 'Enter') {
                        // modify(category.type, index + 1, c.title, c.asset);
                        setSelectedCategory(0);
                      }
                    }}
                    inputProps={{
                      style: { textAlign: 'right' },
                    }}
                  />
                )
                : (
                  <Box sx={{ color: category.total === '-' ? '#979797' : 'black' }}>
                    {category.total === '-' ? `${category.total}원` : `${category.total.toLocaleString('kr-KO')}원`}
                  </Box>
                )}
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
                            onFocus={() => setAsset(c.asset)}
                            type="number"
                            defaultValue={c.asset === '-' ? '' : c.asset}
                            sx={{
                              border: '1px solid', borderRadius: 1, fontSize: '14px', height: '21px', width: '100px',
                            }}
                            onKeyDown={(ev) => {
                              if (ev.key === 'Enter') {
                                modify(category, c.title, c.asset);
                              }
                            }}
                            inputProps={{
                              style: { textAlign: 'right' },
                            }}
                          />
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
