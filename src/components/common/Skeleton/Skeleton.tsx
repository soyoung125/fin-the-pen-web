import { BoxProps } from "@mui/material";
import { StyledSkeleton } from "./Skeleton.style.ts";

function Skeleton(props: BoxProps) {
  const width = props.width || "100%";
  const height = props.height || "1rem";
  const borderRadius = props.borderRadius || "6px";
  return (
    <StyledSkeleton
      width={width}
      height={height}
      borderRadius={borderRadius}
      {...props}
    />
  );
}

export default Skeleton;
