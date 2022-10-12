import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { API_URL, routes } from '@/utils'
import { useNavigate } from 'react-router-dom'
import { setStorage, STORAGE_KEYS } from '@/utils/storage'
function useLogin() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const login = data => {
    setLoading(true)
    axios
      .post(`${API_URL}/auth`, data, { timeout: 5000 })
      .then(({ data }) => {
        setStorage(STORAGE_KEYS.token, data?.token)
        setStorage(STORAGE_KEYS.user, data?.user)
        navigate(routes.dashboard)
      })
      .catch(err => setError(err.response?.data.body ?? ''))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setError('')
    }, 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [error])

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
