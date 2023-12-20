import { createContext, ReactNode } from "react";

export const OverlayContext = createContext<{
  mount: (node: ReactNode) => void;
  unmount: () => void;
}>({
  mount: () => {},
  unmount: () => {},
});
