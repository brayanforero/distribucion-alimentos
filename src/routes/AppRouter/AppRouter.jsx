import { Routes, Route } from 'react-router-dom'
import { routes } from '@/utils'
import { Dashboard, Login } from '@/pages'
import { DeliveriesList, MembersList } from '@/components'

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<Login />} />
        <Route path={routes.dashboard} element={<Dashboard />}>
          <Route index element={<h1>Index</h1>} />
          <Route path={routes.members.index} element={<MembersList />} />
          <Route path={routes.deliveries} element={<DeliveriesList />} />
          <Route path={routes.settings} element={<h1>Config</h1>} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  )
}

export default AppRouter
