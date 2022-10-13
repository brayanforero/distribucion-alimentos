import { useState } from 'react'
import useAuth from '@/hooks/useAuth'
import axios from 'axios'
import { setStorage, STORAGE_KEYS } from '@/utils/storage'
import { API_URL } from '@/utils'
import { toast } from 'react-toastify'

function useLogin() {
  const { login: authStore } = useAuth()
  const [loading, setLoading] = useState(false)

  const login = async crendentials => {
    setLoading(true)
    try {
      const { data } = await axios.post(`${API_URL}/auth`, crendentials, {})

      setStorage(STORAGE_KEYS.user, data?.user)
      setStorage(STORAGE_KEYS.token, data?.token)
      setLoading(false)
      authStore(data?.user)
    } catch ({ response, message }) {
      setLoading(false)
      let messageToast = 'Falied login'
      if (response) {
        messageToast = response.data.body
        toast(messageToast, {
          autoClose: true,
          type: 'error',
          position: 'bottom-right',
        })

        return
      }
      if (message) {
        messageToast = message
        toast(messageToast, {
          autoClose: true,
          type: 'error',
          position: 'bottom-right',
        })

        return
      }

      toast(messageToast, {
        autoClose: true,
        type: 'error',
        position: 'bottom-right',
      })
    }
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
