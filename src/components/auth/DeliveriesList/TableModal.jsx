import { Modal } from 'flowbite-react'

function TableModal({ item, onHidde }) {
  return (
    <Modal
      show={true}
      size="5xl"
      position="top-center"
      onClose={() => onHidde(null)}
    >
      <Modal.Header>
        Pagos Consignados - Lote {item.code.substring(0, 8)}
      </Modal.Header>
      <Modal.Body>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Fecha del Pago
              </th>
              <th scope="col" className="py-3 px-6">
                Cédula
              </th>

              <th scope="col" className="py-3 px-6">
                Nombres
              </th>
              <th scope="col" className="py-3 px-6">
                Apellidos
              </th>
              <th scope="col" className="py-3 px-6">
                Monto
              </th>
              <th scope="col" className="py-3 px-6">
                Moneda
              </th>
              <th scope="col" className="py-3 px-6">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            {item.payers.map(i => (
              <tr
                key={i.cedula}
                className="bg-white border-b  dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  asdfasdfasdf
                </th>

                <td className="py-4 px-6">{i.cedula}</td>
                <td className="py-4 px-6">{i.names}</td>
                <td className="py-4 px-6">{i.lastnames}</td>
                <td className="py-4 px-6">
                  {i.pay.mount} {i.pay.currency}
                </td>
                <td className="py-4 px-6">{i.pay.currency}</td>
                <td className="py-4 px-6">
                  {i.pay.is_paid ? 'Pagado' : 'Pendiente'}
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
              <td className="py-4 px-6">1</td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
    </Modal>
  )
}

export default TableModal
