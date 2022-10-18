import { API_URL } from '@/utils'
import { getKeyFromStorage, STORAGE_KEYS } from '@/utils/storage'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

function usePayments() {
  const [loading, setLoading] = useState(false)
  const [currentDelivery, setCurrentDelivery] = useState(null)
  const [member, setMember] = useState(null)
  useEffect(() => {
    const delivery = getKeyFromStorage(STORAGE_KEYS.currentDelivery) || null

    if (!delivery) return

    setCurrentDelivery(delivery)
  }, [])

  const sendPay = async (data, e) => {
    setLoading(true)

    axios
      .post(`${API_URL}/payments`, data)
      .then(_res => {
        toast('Payment added', {
          position: 'bottom-right',
          type: 'success',
          autoClose: true,
        })
        e.target.reset()
        setMember(null)
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

  return {
    delivery: currentDelivery,
    member,
    setMember,
    sendPay,
    loading,
  }
}

export default usePayments
