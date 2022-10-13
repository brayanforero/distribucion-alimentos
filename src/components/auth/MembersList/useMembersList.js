import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { getKeyFromStorage, STORAGE_KEYS } from '@/utils/storage'
import { API_URL } from '@/utils'

function useMembersList() {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    const timer = setTimeout(() => {
      axios
        .get(`${API_URL}/members`, {
          signal: controller.signal,
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
          console.log(err)
        })
        .finally(() => {
          setLoading(false)
        })
    }, 2000)
    return () => {
      controller.abort()
      clearTimeout(timer)
    }
  }, [])
  return {
    members,
    loading,
  }
}

export default useMembersList
