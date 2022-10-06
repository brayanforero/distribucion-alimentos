import { NavApp } from '@/components'
import { Outlet } from 'react-router-dom'

import './Dashboard.css'
function Dashboard() {
  return (
    <div className="dashboard">
      <NavApp />
      <div className="dashboard-body">
        <div className="shadow-lg h-full">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
