import { ReactNode, useContext } from "react";
import { OverlayContext } from "./OverlayContext.ts";

export const useOverlay = () => {
  const { mount, unmount } = useContext(OverlayContext);
  return {
    openOverlay: (overlayElement: ReactNode) => mount(overlayElement),
    closeOverlay: unmount,
  };
};
