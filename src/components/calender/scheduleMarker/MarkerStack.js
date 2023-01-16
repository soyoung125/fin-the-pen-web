import { Box, Stack } from '@mui/material';

function MarkerStack({ nonFixedWithdrwal }) {
  return (
    <Stack direction="row" justifyContent="center" spacing={0.5} mt={0.2}>
      {nonFixedWithdrwal.map((s, index) => ( // 추후 e의 카테고리 별로 색 바꿀 예정
        index < 3 ? (
          <Box
            key={Math.random()}
            sx={{
              width: '5px', height: '5px', border: '1px solid', borderRadius: 3, borderColor: s.category.color,
            }}
          />
        )
          : null
      ))}
    </Stack>
  );
}

export default MarkerStack;
