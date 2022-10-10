import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Dashboard, Login } from '@/pages'
import { MembersList } from '@/components/auth/MembersList'

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<Dashboard />}>
          <Route index element={<h1>Index</h1>} />
          <Route path="comunity" element={<MembersList />} />
          <Route path="settings" element={<h1>Config</h1>} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  )
}

export default AppRouter
