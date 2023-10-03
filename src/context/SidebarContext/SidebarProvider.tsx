import { PropsWithChildren, useState } from "react";
import { SidebarContext } from ".";

type SidebarProviderProps = PropsWithChildren;

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [sidebarOpened, setSidebarOpened] = useState(true);
  console.log(sidebarOpened)
  return (
    <SidebarContext.Provider value={{ sidebarOpened, setSidebarOpened }}>
      {children}
    </SidebarContext.Provider>
  );
};
