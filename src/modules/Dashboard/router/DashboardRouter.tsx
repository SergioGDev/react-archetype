import { SidebarLayout } from "@/layouts/SidebarLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  AboutPage,
  AnalyticsPage,
  ContactPage,
  HomePage,
  NotificationsPage,
} from "../pages";
import { SettingsPage } from "../pages/SettingsPage";
import { SidebarProvider } from '../../../context/SidebarContext/SidebarProvider';

export const DashboardRoutes = () => {
  return (
    <SidebarProvider>
      <SidebarLayout>
        <Routes>
          {/* Here add the pages */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/settings" element={<SettingsPage />} />

          {/* Here add the redirect path */}
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </SidebarLayout>
    </SidebarProvider>
  );
};
