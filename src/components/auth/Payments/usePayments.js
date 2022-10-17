import { getKeyFromStorage, STORAGE_KEYS } from '@/utils/storage'
import { useState, useEffect } from 'react'

function usePayments() {
  const [currentDelivery, setCurrentDelivery] = useState(null)
  useEffect(() => {
    const delivery = getKeyFromStorage(STORAGE_KEYS.currentDelivery) || null

    if (!delivery) return

    setCurrentDelivery(delivery)
  }, [])

  return {
    delivery: currentDelivery,
  }
}

export default usePayments
