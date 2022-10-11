import { NavApp } from '@/components'
import { Outlet } from 'react-router-dom'

import './Dashboard.css'
function Dashboard() {
  return (
    <main className="dashboard">
      <NavApp />
      <section className="dashboard-body">
        <Outlet />
      </section>
    </main>
  )
}

export default Dashboard
