import { PropsWithChildren, ReactNode, useState } from "react";
import { OverlayContext } from "./OverlayContext.ts";
import { createPortal } from "react-dom";

function OverlayProvider({ children }: PropsWithChildren) {
  const [overlay, setOverlay] = useState<ReactNode>(null);

  const mount = (node: ReactNode) => {
    setOverlay(node);
  };

  const unmount = () => {
    setOverlay(null);
  };

  return (
    <OverlayContext.Provider
      value={{
        mount,
        unmount,
      }}
    >
      {children}
      {overlay && createPortal(overlay, document.body)}
    </OverlayContext.Provider>
  );
}

export default OverlayProvider;
