import { createContext, ReactNode } from "react";

export const OverlayContext = createContext<{
  mount: (id: string, node: ReactNode) => void;
  unmount: (id: string) => void;
}>({
  mount: () => {},
  unmount: () => {},
});
