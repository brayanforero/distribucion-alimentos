import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Login } from '@/pages'

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  )
}

export default AppRouter
