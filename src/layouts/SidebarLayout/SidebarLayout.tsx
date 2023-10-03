import React, { PropsWithChildren, useContext } from "react";
import styles from "./SidebarLayout.module.scss";

import { Sidebar } from "@/components/Sidebar";
import { SidebarContext } from "@/context/SidebarContext";
import { Toolbar } from "@/components/Toolbar";

export type SidebarLayoutProps = PropsWithChildren;

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const { sidebarOpened } = useContext(SidebarContext);
  
  return (
    <div className={styles.container}>
      <div
        className={`${styles.sidebarContainer} ${
          sidebarOpened ? styles.sidebarOpened : ""
        }`}
      >
        <Sidebar />
      </div>
      <div className={styles.mainContent}>
        {/* Toolbar */}
        <div  className={styles.toolbarContent}>
          <Toolbar />
        </div>

        {/* Page container */}
        <div
          className={`${styles.pageContainer} ${
            sidebarOpened ? styles.sidebarOpened : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
