import React, { useContext } from "react";
import styles from "./Sidebar.module.scss";
import { SidebarLinks } from "./sidebarData/sidebarLinks";
import {
  SidebarSectionItem,
  SidebarSectionType,
} from "./sidebarData/sidebar.interface";

import { Link, useLocation } from "react-router-dom";
import { SidebarClose, SidebarOpen } from "lucide-react";
import { SidebarContext } from "@/context/SidebarContext";
// import { ArrowRightFromLine } from "lucide-react";

export const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const { sidebarOpened, setSidebarOpened } = useContext(SidebarContext);

  return (
    <div
      className={`${styles.container} ${sidebarOpened ? styles.active : ""}`}
    >
      <div className={styles.sidebarSubcontainer}>
        {SidebarLinks.map(
          ({ title, vLinks }: SidebarSectionType, index: number) => {
            return (
              <div
                className={styles.linkListContainer}
                key={`${index}-${title}`}
              >
                <div className={styles.sectionTitle}>{title}</div>
                {vLinks.map((linkData: SidebarSectionItem) => {
                  return linkData.path ? (
                    <Link
                      key={linkData.name}
                      to={linkData.path}
                      className={`${styles.linkContainer} ${
                        pathname === linkData.path ? styles.active : ""
                      }`}
                    >
                      <div className={styles.linkIcon}>
                        <linkData.icon />
                      </div>
                      <div className={styles.linkTitle}>{linkData.name}</div>
                    </Link>
                  ) : (
                    <button
                      className={styles.linkContainer}
                      key={linkData.name}
                    >
                      <div className={styles.linkIcon}>
                        <linkData.icon />
                      </div>
                      <div className={styles.linkTitle}>{linkData.name}</div>
                    </button>
                  );
                })}
              </div>
            );
          }
        )}
      </div>
      <div className={styles.sidebarSubcontainer}>
        <div className={styles.linkListContainer}>
          <button
            onClick={() => {
              setSidebarOpened(!sidebarOpened);
            }}
            className={`${styles.linkContainer} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            <div className={styles.linkIcon}>
              {sidebarOpened ? <SidebarClose /> : <SidebarOpen />}
            </div>
            <div className={styles.linkTitle}>Colapsar</div>
          </button>
        </div>
      </div>
    </div>
  );
};
