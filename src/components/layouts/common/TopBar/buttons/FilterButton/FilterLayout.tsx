import { Stack } from "@mui/material";

interface FilterLayoutProps {
  children: React.ReactNode;
}
function FilterLayout({ children }: FilterLayoutProps) {
  return (
    <Stack
      flexWrap="wrap"
      alignSelf="stretch"
      alignContent="flex-start"
      direction="row"
      py="12px"
      px="20px"
      gap="8px"
    >
      {children}
    </Stack>
  );
}

export default FilterLayout;
