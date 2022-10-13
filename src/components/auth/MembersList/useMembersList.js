import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { getKeyFromStorage, STORAGE_KEYS } from '@/utils/storage'
import { API_URL } from '@/utils'
import { toast } from 'react-toastify'

function useMembersList() {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    axios
      .get(`${API_URL}/members`, {
        headers: {
          authorization: `Bearer ${
            getKeyFromStorage(STORAGE_KEYS.token) ?? ''
          }`,
        },
      })
      .then(({ data }) => {
        const { values } = data.body
        setMembers(values)
      })
      .catch(err => {
        const message = err?.message ?? 'Falied get data'
        toast(message, {
          autoClose: true,
          type: 'error',
          position: 'bottom-right',
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return {
    members,
    loading,
  }
}

export default useMembersList
