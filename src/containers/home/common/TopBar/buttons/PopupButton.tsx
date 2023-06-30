import { Fab } from "@mui/material";
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PATH from "../../../../../domain/constants/path";

interface PopupButtonProps {
  handleClickPopup: () => void,
}
function PopupButton({handleClickPopup}: PopupButtonProps) {
  const navigate = useNavigate();
  const position = 120;
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const fabRef = useRef<HTMLDivElement>(null);
  const startPositionRef = useRef<number>(120);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
    startPositionRef.current = event.clientY - offset;
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    startPositionRef.current = event.touches[0].clientY - offset;
    setIsDragging(true);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const offsetY = event.clientY - startPositionRef.current;

    setOffset(offsetY);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const offsetY = event.touches[0].clientY - startPositionRef.current;

    setOffset(offsetY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={fabRef}
      style={{ position: 'fixed', top: `calc(100vh - ${position - offset}px)`, right: 10 }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <Fab
        color="secondary"
        size="small"
        aria-label="popup"
        onClick={handleClickPopup}
      >
        <SavingsOutlinedIcon />
      </Fab>
    </div>
  );
}

export default PopupButton;
