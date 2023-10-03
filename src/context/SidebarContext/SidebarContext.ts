import { createContext } from 'react';

export type SidebarContextProps = {
    sidebarOpened: boolean;
    setSidebarOpened: (value: boolean) => void;
};

export const SidebarContext = createContext<SidebarContextProps>({} as SidebarContextProps);