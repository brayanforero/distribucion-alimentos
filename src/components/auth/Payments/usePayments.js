import { getKeyFromStorage, STORAGE_KEYS } from '@/utils/storage'
import { useState, useEffect } from 'react'

function usePayments() {
  const [currentDelivery, setCurrentDelivery] = useState(null)
  const [member, setMember] = useState(null)
  useEffect(() => {
    const delivery = getKeyFromStorage(STORAGE_KEYS.currentDelivery) || null

    if (!delivery) return

    setCurrentDelivery(delivery)
  }, [])

  const sendPay = (data, e) => {
    console.log(data)
  }

  return {
    delivery: currentDelivery,
    member,
    setMember,
    sendPay,
  }
}

export default usePayments
