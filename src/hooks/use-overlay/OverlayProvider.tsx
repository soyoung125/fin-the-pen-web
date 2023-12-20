import { PropsWithChildren, ReactNode, useState } from "react";
import { OverlayContext } from "./OverlayContext.ts";

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
      {overlay}
    </OverlayContext.Provider>
  );
}

export default OverlayProvider;
