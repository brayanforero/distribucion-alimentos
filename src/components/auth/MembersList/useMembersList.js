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
    fetchMembers()
  }, [])

  const fetchMembers = () => {
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
  }

  const deleteMember = id => {
    const toastID = toast('Cargando', {
      position: 'bottom-right',
      isLoading: true,
    })
    axios
      .delete(`${API_URL}/members/${id}`, {
        headers: {
          authorization: `Bearer ${
            getKeyFromStorage(STORAGE_KEYS.token) ?? ''
          }`,
        },
      })
      .then(({ data }) => {
        toast(data?.body || 'Miembro Eliminado', {
          type: 'success',
          position: 'bottom-right',
        })

        fetchMembers()
      })
      .catch(err => {
        const error401 = err?.response?.data?.body
        const message = err?.message ?? 'Falied get data'
        toast(error401 || message, {
          type: 'error',
          position: 'bottom-right',
        })
      })
      .finally(() => toast.dismiss(toastID))
  }

  return {
    members,
    loading,
    deleteMember,
  }
}

export default useMembersList
