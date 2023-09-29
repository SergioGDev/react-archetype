import React, { PropsWithChildren, useContext } from "react";
import styles from "./SidebarLayout.module.scss";

import { Sidebar } from "@/components/Sidebar";
import { SidebarContext } from "@/context/SidebarContext";

export type SidebarLayoutProps = PropsWithChildren;

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const { sidebarOpened } = useContext(SidebarContext);
  console.log(sidebarOpened);
  return (
    <div className={styles.container}>
      <div
        className={`${styles.sidebarContainer} ${
          sidebarOpened ? styles.sidebarOpened : ""
        }`}
      >
        <Sidebar />
      </div>
      <div
        className={`${styles.content} ${
          sidebarOpened ? styles.sidebarOpened : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};
