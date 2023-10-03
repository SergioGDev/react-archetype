import { useContext } from "react";
import styles from "./Toolbar.module.scss";
import { Menu } from "lucide-react";
import { SidebarContext } from "@/context/SidebarContext";

export const Toolbar = () => {
  const { sidebarOpened, setSidebarOpened } = useContext(SidebarContext);
  return (
    <div className={`${styles.toolbarContainer} ${sidebarOpened && styles.sidebarOpened}`}>
      <button
        className={styles.menuButton}
        onClick={() => {
          setSidebarOpened(!sidebarOpened);
        }}
      >
        <Menu />
      </button>
    </div>
  );
};
