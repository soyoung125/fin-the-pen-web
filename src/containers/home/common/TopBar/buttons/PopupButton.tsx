import { Fab } from "@mui/material";
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import { useState } from "react";

function PopupButton() {
  const [height, setHeight] = useState(80);
  
  return (
      <Fab
        color="secondary"
        size="small"
        aria-label="popup"
        sx={{ position: 'fixed', bottom: height, right: 10 }}
        //onMouseDown={(e) => console.log(e)}
        onMouseMove={(e) => setHeight(height + e.movementY)}
      >
        <SavingsOutlinedIcon />
      </Fab>
  );
}

export default PopupButton;
