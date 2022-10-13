import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { getKeyFromStorage, STORAGE_KEYS } from '@/utils/storage'
import { API_URL } from '@/utils'

function useDeliveries() {
  const [deliveries, setDeliveries] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    const timer = setTimeout(() => {
      axios
        .get(`${API_URL}/deliveries`, {
          signal: controller.signal,
          headers: {
            authorization: `Bearer ${
              getKeyFromStorage(STORAGE_KEYS.token) ?? ''
            }`,
          },
        })
        .then(({ data }) => {
          const { values } = data.body
          setDeliveries(values)
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
    deliveries,
    loading,
  }
}

export default useDeliveries
