import { TableSkeleton } from '@/components/layouts/TableSkeleton'
import { Button } from 'flowbite-react'
import { ToastContainer } from 'react-toastify'
import DeliveriesTable from './DeliveriesTable'
import useDeliveries from './useDeliveries'

const DeliveriesList = () => {
  const { deliveries, loading, closeDelivery, addDelivery } = useDeliveries()
  return (
    <section className="py-5 px-8">
      <h1 className="mb-4 text-lg font-semibold text-center">
        Lista de Entregas
      </h1>
      <div className="w-1/4 mb-4">
        <Button onClick={() => addDelivery()}>Agregar</Button>
      </div>
      {loading && <TableSkeleton />}
      <DeliveriesTable
        isLoadData={loading}
        onClose={closeDelivery}
        data={deliveries}
      />
      <ToastContainer />
    </section>
  )
}

export default DeliveriesList
