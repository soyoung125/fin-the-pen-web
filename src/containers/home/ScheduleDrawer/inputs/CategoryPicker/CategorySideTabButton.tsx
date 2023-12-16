import { MouseEventHandler } from "react";
import { Button } from "@mui/material";

export interface CategorySideTabProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function CategorySideTabButton({ onClick }: CategorySideTabProps) {
  return <Button onClick={onClick}>ㅇㅇ</Button>;
}

export default CategorySideTabButton;
