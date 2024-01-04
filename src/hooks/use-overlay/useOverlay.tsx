import { ReactNode, useContext, useState } from "react";
import { OverlayContext } from "./OverlayContext.ts";

let elementId = 1;

export const useOverlay = () => {
  const { mount, unmount } = useContext(OverlayContext);
  const [id] = useState(() => String(elementId++));

  return {
    openOverlay: (overlayElement: ReactNode) => mount(id, overlayElement),
    closeOverlay: () => unmount(id),
  };
};
