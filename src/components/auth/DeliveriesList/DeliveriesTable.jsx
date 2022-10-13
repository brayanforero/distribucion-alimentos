import React from 'react'
function DeliveriesTable({ data = [], isLoadData = false }) {
  return (
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
          </tr>
        </thead>
        <tbody>
          {data.map(i => (
            <tr key={i.id} className="bg-white border-b  dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                {i.code}
              </th>

              <td className="py-4 px-6">{i.created_at}</td>
              <td className="py-4 px-6">{i.peoples}</td>
              <td className="py-4 px-6">{i.unities}</td>
              <td
                className={`py-4 px-6 font-semibold ${
                  i.state ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {i.state ? 'Abierto' : 'Cerrado'}
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
  )
}

export default DeliveriesTable
