import { Fab } from "@mui/material";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import { useEffect, useRef, useState } from "react";

interface PopupButtonProps {
  handleClickPopup: () => void;
}

function PopupButton({ handleClickPopup }: PopupButtonProps) {
  const position = 120;
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const fabRef = useRef<HTMLDivElement>(null);
  const startPositionRef = useRef<number>(120);

  useEffect(() => {
    const div = fabRef.current;
    if (div) {
      div.addEventListener("touchstart", handleTouchStart, { passive: false });
    }
  }, []);

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsDragging(true);
    startPositionRef.current = event.clientY - offset;
  };

  const handleTouchStart = (event: TouchEvent) => {
    event.stopPropagation();
    event.preventDefault();
    startPositionRef.current = event.touches[0].clientY - offset;
    setIsDragging(true);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const offsetY = event.clientY - startPositionRef.current;

    setOffset(offsetY);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (!isDragging) return;

    const offsetY = event.touches[0].clientY - startPositionRef.current;

    setOffset(offsetY);
  };

  const handleMouseUp = (event: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(false);
  };

  const handleClick = () => {
    if (!isDragging) {
      console.log("Click event occurred!");
    } else {
      console.log("nonclick");
    }
  };

  return (
    <div
      ref={fabRef}
      style={{
        position: "fixed",
        top: `calc(100vh - ${position - offset}px)`,
        right: 10,
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <Fab
        color="secondary"
        size="small"
        aria-label="popup"
        onClick={handleClick}
      >
        <SavingsOutlinedIcon />
      </Fab>
    </div>
  );
}

export default PopupButton;
