/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import {
  Box, Collapse, InputBase, List, ListItem, ListItemButton, Stack,
} from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CategoryTypeBadge from '../../../../components/common/CategoryTypeBadge';
import { selectAssetsByCategory } from '../../../../app/redux/slices/assetSlice';
import { AssetsByCategoryInterface } from '../../../../types/common';

interface CategoryListProps {
  handleClick: (type: string) => void,
  open: string,
  modifyCategoryAsset: (type: string, value: number) => void,
  modifySubcategoryAsset: (type: string, title: string, summary: number, value: number) => void,
}

function CategoryList({
  handleClick, open, modifyCategoryAsset, modifySubcategoryAsset,
}: CategoryListProps) {
  const assets = useSelector(selectAssetsByCategory);
  const [selectedCategory, setSelectedCategory] = useState<'' | number>('');
  const [asset, setAsset] = useState('0');

  const modifySubcategory = (category: AssetsByCategoryInterface, title: string, preValue: string | number) => {
    let sum = 0;
    const total = category.total === '-' ? 0 : category.total;
    if (asset === '') {
      sum = category.sum - (preValue === '-' ? 0 : +preValue);
      modifySubcategoryAsset(category.type, title, sum, 0);
    } else if (asset !== '-') {
      sum = category.sum - (preValue === '-' ? 0 : +preValue) + parseInt(asset, 10);
      if (sum > +total) {
        alert('합계가 설정한 카테고리 지출 목표 금액을 넘었습니다.');
        return;
      }
      modifySubcategoryAsset(category.type, title, sum, parseInt(asset, 10));
    }
    setSelectedCategory(+selectedCategory + 1);
  };

  const modifyCategory = () => {
    modifyCategoryAsset(open, asset === '' ? 0 : parseInt(asset, 10));
    setSelectedCategory(0);
  };

  const clickCategory = (category: string) => {
    handleClick(category);
    setSelectedCategory('');
  };

  return (
    <List>
      {assets.map((category: AssetsByCategoryInterface) => (
        <Box key={category.type}>
          <ListItemButton onClick={() => clickCategory(category.type)}>
            <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
              <Stack direction="row">
                <CategoryTypeBadge color={category.color} mr={0.5} />
                {category.type}
              </Stack>
              {open === category.type && selectedCategory === ''
                ? (
                  <InputBase
                    onChange={(e) => setAsset(e.target.value.replaceAll(',', ''))}
                    autoFocus
                    onFocus={() => setAsset(category.total === '-' ? '' : category.total.toLocaleString('ko-KR'))}
                    type="text"
                    value={(+asset).toLocaleString('ko-KR')}
                    sx={{
                      border: '1px solid', borderRadius: 1, fontSize: '14px', height: '21px', width: '100px',
                    }}
                    onKeyDown={(ev) => {
                      if (ev.key === 'Enter') {
                        modifyCategory();
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
                            onChange={(e) => setAsset(e.target.value.replaceAll(',', ''))}
                            autoFocus
                            onFocus={() => setAsset(c.asset === '-' ? '' : c.asset.toLocaleString('ko-KR'))}
                            type="text"
                            value={(+asset).toLocaleString('ko-KR')}
                            sx={{
                              border: '1px solid', borderRadius: 1, fontSize: '14px', height: '21px', width: '100px',
                            }}
                            onKeyDown={(ev) => {
                              if (ev.key === 'Enter') {
                                modifySubcategory(category, c.title, c.asset);
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
