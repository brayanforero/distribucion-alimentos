import { useState } from 'react'

const INITIAL_STATE = { username: '', password: '' }
function useFormLogin() {
  const [user, setUser] = useState(INITIAL_STATE)

  return {
    user,
    setUser,
  }
}

export default useFormLogin
