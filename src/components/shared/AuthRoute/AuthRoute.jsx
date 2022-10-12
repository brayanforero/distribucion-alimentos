import { Navigate } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import { routes } from '@/utils'

const AuthRoute = ({ children }) => {
  const { user } = useAuth()

  if (!user) return <Navigate to={routes.home} />

  return children
}

export default AuthRoute
