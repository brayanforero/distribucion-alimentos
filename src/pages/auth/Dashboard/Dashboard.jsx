import { AuthRoute, NavApp, StatusApp } from '@/components'
import { Outlet } from 'react-router-dom'

import './Dashboard.css'
function Dashboard() {
  return (
    <AuthRoute>
      <main className="dashboard">
        <NavApp />
        <section className="dashboard-body">
          <StatusApp />
          <Outlet />
        </section>
      </main>
    </AuthRoute>
  )
}

export default Dashboard
