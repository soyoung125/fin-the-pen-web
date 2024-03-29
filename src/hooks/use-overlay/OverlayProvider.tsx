import React, { PropsWithChildren, ReactNode, useState } from "react";
import { OverlayContext } from "./OverlayContext.ts";
import { createPortal } from "react-dom";

function OverlayProvider({ children }: PropsWithChildren) {
  const [overlayById, setOverlayById] = useState<Map<string, ReactNode>>(
    new Map()
  );

  const mount = (id: string, node: ReactNode) => {
    setOverlayById((overlayById) => {
      const cloned = new Map(overlayById);
      cloned.set(id, node);
      return cloned;
    });
  };

  const unmount = (id: string) => {
    setOverlayById((overlayById) => {
      const cloned = new Map(overlayById);
      cloned.delete(id);
      return cloned;
    });
  };

  return (
    <OverlayContext.Provider
      value={{
        mount,
        unmount,
      }}
    >
      {children}
      {createPortal(
        [...overlayById.entries()].map(([id, element]) => (
          <React.Fragment key={id}>{element}</React.Fragment>
        )),
        document.body
      )}
    </OverlayContext.Provider>
  );
}

export default OverlayProvider;
