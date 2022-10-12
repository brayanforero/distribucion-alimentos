import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { API_URL, routes } from '@/utils'
import { useCookies } from 'react-cookie'

import { useNavigate } from 'react-router-dom'
function useLogin() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const [, setCookie] = useCookies('claptoken')

  const login = data => {
    setLoading(true)
    axios
      .post(`${API_URL}/auth`, data, { timeout: 5000 })
      .then(res => {
        setCookie('claptoken', res.data?.token)
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
