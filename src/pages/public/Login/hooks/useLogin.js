import { useState } from 'react'
import useAuth from '@/hooks/useAuth'
import axios from 'axios'
import { setStorage, STORAGE_KEYS } from '@/utils/storage'
import { API_URL } from '@/utils'

function useLogin() {
  const { login: authStore } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const login = async crendentials => {
    setError('')
    setLoading(true)
    try {
      const { data } = await axios.post(`${API_URL}/auth`, crendentials, {
        timeout: 5000,
      })

      setStorage(STORAGE_KEYS.user, data?.user)
      setStorage(STORAGE_KEYS.token, data?.token)
      setLoading(false)
      authStore(data?.user)
    } catch ({ response }) {
      setLoading(false)

      setError(response.data?.body ?? 'Error')
    }
  }

  const submitUser = data => {
    login(data)
  }

  return {
    submitUser,
    loading,
    error,
  }
}

export default useLogin
