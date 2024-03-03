import { Tab, Tabs } from "@mui/material";
import { SyntheticEvent } from "react";

export interface MenuTabProps {
  labels: string[];
  value: number;
  handleChange: (event: SyntheticEvent, newValue: number) => void;
}

function MenuTab({ labels, value, handleChange }: MenuTabProps) {
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="inherit"
      variant="fullWidth"
      TabIndicatorProps={{
        style: {
          background: "#43464C",
        },
      }}
      sx={{ px: "20px" }}
    >
      {labels.map((label) => (
        <Tab key={label} label={label} />
      ))}
    </Tabs>
  );
}

export default MenuTab;
