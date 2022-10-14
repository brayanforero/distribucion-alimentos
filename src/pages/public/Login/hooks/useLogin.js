import axios from 'axios'
import { useState } from 'react'
import useAuth from '@/hooks/useAuth'
import { toast } from 'react-toastify'
import { API_URL } from '@/utils'
import { setStorage, STORAGE_KEYS } from '@/utils/storage'

function useLogin() {
  const { login: authStore } = useAuth()
  const [loading, setLoading] = useState(false)

  const login = crendentials => {
    setLoading(true)
    axios
      .post(`${API_URL}/auth`, crendentials, {})
      .then(({ data }) => {
        setStorage(STORAGE_KEYS.user, data?.user)
        setStorage(STORAGE_KEYS.token, data?.token)
        setLoading(false)
        authStore(data?.user)
      })
      .catch(err => {
        const error401 = err?.response?.data?.body
        const message = err?.message ?? 'Falied get data'
        toast(error401 || message, {
          autoClose: true,
          type: 'error',
          position: 'bottom-right',
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const submitUser = data => {
    login(data)
  }

  return {
    submitUser,
    loading,
  }
}

export default useLogin
