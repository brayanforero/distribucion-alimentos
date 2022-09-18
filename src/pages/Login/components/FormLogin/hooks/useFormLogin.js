import { useState } from 'react'

const INITIAL_STATE = { username: '', password: '' }
function useFormLogin() {
  const [user, setUser] = useState(INITIAL_STATE)
  const handleSubmit = e => {
    e.preventDefault()
    console.log('SEND')
  }

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }
  return {
    user,
    setUser,
    handleChange,
    handleSubmit,
  }
}

export default useFormLogin
