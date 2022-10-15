import dayjs from 'dayjs'
import { useCallback } from 'react'
import { ToastContainer } from 'react-toastify'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
function DeliveriesTable({ data = [], isLoadData = false, onClose }) {
  const handlerSelected = useCallback(i => {
    MySwal.fire({
      icon: 'warning',
      text: `¿Esta seguro de cerrar el lote ${i.code.substring(0, 8)}?`,
      showCancelButton: true,
      confirmButtonColor: '#1A56DB',
      cancelButtonColor: '#E02424',
    }).then(({ isConfirmed }) => {
      if (!isConfirmed) return
      onClose(i.id)
    })
  }, [])

  return (
    <>
      <div
        className={`overflow-x-auto relative shadow-md rounded-lg${
          !isLoadData ? ' block' : ' hidden'
        }`}
      >
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Code
              </th>
              <th scope="col" className="py-3 px-6">
                Fecha De Apertura
              </th>

              <th scope="col" className="py-3 px-6">
                Beneficiados
              </th>
              <th scope="col" className="py-3 px-6">
                Unidades Recibidas
              </th>
              <th scope="col" className="py-3 px-6">
                Estado
              </th>
              <th scope="col" className="py-3 px-6">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(i => (
              <tr
                key={i.id}
                className="bg-white border-b  dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  {i.code.substring(0, 8)}
                </th>

                <td className="py-4 px-6">
                  {dayjs(i.created_at).format('DD/MM/YYYY HH:mm a')}
                </td>
                <td className="py-4 px-6">{i.peoples}</td>
                <td className="py-4 px-6">{i.unities}</td>
                <td
                  className={`py-4 px-6 font-semibold ${
                    i.state ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {i.state ? 'Abierto' : 'Cerrado'}
                </td>
                <td className="py-4 px-6 font-semibold">
                  {i.state && (
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2"
                      onClick={() => handlerSelected(i)}
                    >
                      Cerrar
                    </button>
                  )}
                </td>
              </tr>
            ))}
            <tr className="bg-white border-b  dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Total:
              </th>
              <td className="py-4 px-6">{data.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </>
  )
}

export default DeliveriesTable
