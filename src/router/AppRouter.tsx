import { DashboardRoutes } from "@/modules/Dashboard/router/DashboardRouter"
import { Route, Routes } from "react-router-dom"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/dashboard/*' element={<DashboardRoutes />} />
    </Routes>
  )
}
