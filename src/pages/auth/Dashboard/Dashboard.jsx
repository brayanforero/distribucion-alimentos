import { AuthRoute, InitData, NavApp, StatusApp } from '@/components'
import { Outlet } from 'react-router-dom'

import './Dashboard.css'
function Dashboard() {
  return (
    <AuthRoute>
      <main className="dashboard">
        <NavApp />
        <InitData>
          <section className="dashboard-body">
            <StatusApp />
            <Outlet />
          </section>
        </InitData>
      </main>
    </AuthRoute>
  )
}

export default Dashboard
