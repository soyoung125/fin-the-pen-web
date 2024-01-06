import { Box, keyframes } from "@mui/material";
import styled from "@emotion/styled";

const skeletonAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const StyledSkeleton = styled(Box)`
  background: linear-gradient(-90deg, #c6cbd9, #fafafa, #c6cbd9, #fafafa);
  background-size: 400%;
  animation: ${skeletonAnimation} 5s infinite ease-out;
`;
