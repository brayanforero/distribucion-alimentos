import useAuth from '@/hooks/useAuth'
import { routes } from '@/utils'
import { Navigate } from 'react-router-dom'

const GuestRoute = ({ children }) => {
  const { user } = useAuth()

  if (user) return <Navigate to={routes.dashboard} />
  return children
}

export default GuestRoute
