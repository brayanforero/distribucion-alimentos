import { useEffect } from 'react'
import useDeliveries from '../DeliveriesList/useDeliveries'

const InitData = ({ children }) => {
  const { fetchDeliveries } = useDeliveries()

  useEffect(() => {
    fetchDeliveries()
  }, [])
  return <>{children}</>
}

export default InitData
