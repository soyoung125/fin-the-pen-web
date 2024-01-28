import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

function HeaderBox({ children }: PropsWithChildren) {
  return (
    <Box px={2.5} py={1.5} bgcolor={"primary.main"} color={"white"}>
      {children}
    </Box>
  );
}

export default HeaderBox;
