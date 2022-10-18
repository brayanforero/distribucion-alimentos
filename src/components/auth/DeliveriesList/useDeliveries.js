import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {
  cleanStorage,
  getKeyFromStorage,
  setStorage,
  STORAGE_KEYS,
} from '@/utils/storage'
import { API_URL, routes } from '@/utils'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'
import { redirect } from 'react-router-dom'

function useDeliveries() {
  const [deliveries, setDeliveries] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchDeliveries()
  }, [])

  const fetchDeliveries = () => {
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

        setStorage(
          STORAGE_KEYS.currentDelivery,
          values.find(i => i.state === true)
        )
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
  }

  const closeDelivery = id => {
    setLoading(true)
    axios
      .put(`${API_URL}/deliveries/${id}`, null, {
        headers: {
          authorization: `Bearer ${
            getKeyFromStorage(STORAGE_KEYS.token) ?? ''
          }`,
        },
      })
      .then(_res => {
        toast('Delivery closed', {
          type: 'success',
          position: 'bottom-right',
        })

        fetchDeliveries()
      })
      .catch(err => {
        const error400 = err?.response?.data.body
        const axiosMessage = err?.message || 'Error sending information'

        toast(error400 || axiosMessage, {
          type: 'error',
          position: 'bottom-right',
        })
      })
      .finally(() => setLoading(false))
  }

  const addDelivery = () => {
    setLoading(true)
    axios
      .post(`${API_URL}/deliveries/`, null, {
        headers: {
          authorization: `Bearer ${
            getKeyFromStorage(STORAGE_KEYS.token) ?? ''
          }`,
        },
      })
      .then(_res => {
        toast('Delivery added', {
          type: 'success',
          position: 'bottom-right',
        })
        fetchDeliveries()
      })
      .catch(err => {
        const error400 = err?.response?.data.body
        const axiosMessage = err?.message || 'Error sending information'

        toast(error400 || axiosMessage, {
          type: 'error',
          position: 'bottom-right',
        })
      })
      .finally(() => setLoading(false))
  }

  return {
    deliveries,
    closeDelivery,
    addDelivery,
    loading,
    fetchDeliveries,
  }
}

export default useDeliveries
