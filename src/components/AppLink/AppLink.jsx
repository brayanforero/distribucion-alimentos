import { NavLink } from 'react-router-dom'
import './AppLink.css'
function AppLink({ children, to }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        isActive
          ? 'AppLink text-gray-100 bg-blue-400 pointer-events-none'
          : 'AppLink'
      }
    >
      {children}
    </NavLink>
  )
}

export default AppLink
