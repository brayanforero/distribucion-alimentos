import { Suspense } from 'react'
import './App.css'
import { LoaderApp } from './components'
import AuthProvider from './context/auth/AuthProvider'
import { AppRouter } from './routes/AppRouter'

function App() {
  return (
    <>
      <Suspense fallback={<LoaderApp />}>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </Suspense>
    </>
  )
}

export default App
