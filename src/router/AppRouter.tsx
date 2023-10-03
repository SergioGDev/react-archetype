import { DashboardRoutes } from "@/modules/Dashboard/router/DashboardRouter"
import { LoginRoutes } from "@/modules/Login/router/LoginRouter.tsx/LoginRouter"
import { Route, Routes } from "react-router-dom"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/dashboard/*' element={<DashboardRoutes />} />
        <Route path='/login/*' element={<LoginRoutes />} />
    </Routes>
  )
}
