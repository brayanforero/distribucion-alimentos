import { AuthRoute, NavApp } from '@/components'
import { Outlet } from 'react-router-dom'

import './Dashboard.css'
function Dashboard() {
  return (
    <AuthRoute>
      <main className="dashboard">
        <NavApp />
        <section className="dashboard-body">
          <Outlet />
        </section>
      </main>
    </AuthRoute>
  )
}

export default Dashboard
