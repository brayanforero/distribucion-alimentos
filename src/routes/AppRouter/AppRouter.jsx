import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '@/utils'

const Login = lazy(() => import('@/pages/public/Login/Login'))
const Dashboard = lazy(() => import('@/pages/auth/Dashboard/Dashboard'))
const MembersList = lazy(() =>
  import('@/components/auth/MembersList/MembersList')
)
const AddMembers = lazy(() => import('@/components/auth/AddMembers/AddMembers'))
const DeliveriesList = lazy(() =>
  import('@/components/auth/DeliveriesList/DeliveriesList')
)

const Payments = lazy(() => import('@/components/auth/Payments/Payments'))
function AppRouter() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<Login />} />
        <Route path={routes.dashboard} element={<Dashboard />}>
          <Route index element={<h1>Index</h1>} />
          <Route path={routes.members.index} element={<MembersList />} />
          <Route path={routes.members.add} element={<AddMembers />} />
          <Route path={routes.deliveries} element={<DeliveriesList />} />
          <Route path={routes.payments} element={<Payments />} />
          <Route path={routes.settings} element={<h1>Config</h1>} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  )
}

export default AppRouter
