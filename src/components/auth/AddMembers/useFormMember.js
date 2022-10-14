import { API_URL } from '@/utils'
import { getKeyFromStorage, STORAGE_KEYS } from '@/utils/storage'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'

function useFormMember(resetHandler) {
  const [loading, setLoading] = useState()

  const sendDataMember = member => {
    setLoading(true)

    axios
      .post(`${API_URL}/members`, member, {
        headers: {
          authorization: `Bearer ${
            getKeyFromStorage(STORAGE_KEYS.token) ?? ''
          }`,
        },
      })
      .then(_data => {
        toast('Member added', { type: 'success', position: 'bottom-right' })
      })
      .catch(err => {
        const error404 = err?.response?.data.body
        const axiosMessage = err?.message || 'Error sending information'

        toast(error404 || axiosMessage, {
          type: 'error',
          position: 'bottom-right',
        })
      })
      .finally(() => {
        setLoading()
        resetHandler()
      })
  }

  const submiter = member => {
    sendDataMember(member)
  }

  return { loading, submiter }
}

export default useFormMember
