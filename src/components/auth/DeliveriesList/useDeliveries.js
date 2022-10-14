import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { cleanStorage, getKeyFromStorage, STORAGE_KEYS } from '@/utils/storage'
import { API_URL, routes } from '@/utils'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'
import { redirect } from 'react-router-dom'

function useDeliveries() {
  const [deliveries, setDeliveries] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${API_URL}/deliveries`, {
        headers: {
          authorization: `Bearer ${
            getKeyFromStorage(STORAGE_KEYS.token) ?? ''
          }`,
        },
      })
      .then(({ data }) => {
        const { values } = data.body

        values.sort((a, b) => {
          return (
            dayjs(b.created_at).format('YYMMDD') -
            dayjs(a.created_at).format('YYMMDD')
          )
        })

        setDeliveries(values)
      })
      .catch(err => {
        const error401 = err?.response?.data?.body
        const message = err?.message ?? 'Falied get data'
        toast(error401 || message, {
          autoClose: true,
          type: 'error',
          position: 'bottom-right',
        })

        if (error401) {
          cleanStorage()
          redirect(routes.home)
        }
      })

      .finally(() => {
        setLoading(false)
      })
  }, [])
  return {
    deliveries,
    loading,
  }
}

export default useDeliveries
