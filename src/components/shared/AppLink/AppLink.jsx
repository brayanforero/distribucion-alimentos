import { NavLink } from 'react-router-dom'
import './AppLink.css'
function AppLink({ children, to }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        isActive
          ? 'AppLink text-white bg-gradient-to-r from-red-600 to-red-500 pointer-events-none'
          : 'AppLink'
      }
    >
      {children}
    </NavLink>
  )
}

export default AppLink
