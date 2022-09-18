import { Outlet } from 'react-router-dom'
import { NavApp } from './components/NavApp'

function Dashboard() {
  return (
    <div className="w-full h-full grid grid-cols-4 overflow-hidden">
      <NavApp />
      <div className="col-span-3 py-7 pr-5">
        <div className="shadow-lg h-full">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
