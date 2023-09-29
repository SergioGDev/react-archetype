import { BarChart, Bell, Contact, Home, Info, LogOut, Settings } from "lucide-react";
import { SidebarSectionType } from "./sidebar.interface";

export const SidebarLinks: SidebarSectionType[] = [
  {
    title: "Main Menu",
    vLinks: [
      {
        name: "Home",
        icon: Home,
        path: "/dashboard/home",
      },
      {
        name: "About",
        icon: Info,
        path: "/dashboard/about",
      },
      {
        name: "Contact",
        icon: Contact,
        path: "/dashboard/contact",
      },
      {
        name: "Notifications",
        icon: Bell,
        path: "/dashboard/notifications",
      },
      {
        name: "Analytics",
        icon: BarChart,
        path: "/dashboard/analytics",
      },
    ],
  },
  {
    title: "User Menu",
    vLinks: [
      {
        name: "Settings",
        icon: Settings,
        path: "/dashboard/settings",
      },
      {
        name: "Logout",
        icon: LogOut,
      }
    ],
  },
];
