import { cleanStorage } from '@/utils/storage'
import { useState } from 'react'
import AuthContext from './AuthContext'
import useInitAuth from './useInitAuth'

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  useInitAuth(setUser)

  const login = user => {
    setUser(user)
  }

  const logout = () => {
    cleanStorage()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
