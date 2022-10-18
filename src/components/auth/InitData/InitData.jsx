import { getKeyFromStorage, STORAGE_KEYS } from '@/utils/storage'
import { useEffect } from 'react'
import useDeliveries from '../DeliveriesList/useDeliveries'

const InitData = ({ children }) => {
  const { fetchDeliveries } = useDeliveries()

  useEffect(() => {
    const currentDelivery = getKeyFromStorage(STORAGE_KEYS.currentDelivery)
    if (!currentDelivery) {
      fetchDeliveries()
    }
  }, [])
  return <>{children}</>
}

export default InitData
