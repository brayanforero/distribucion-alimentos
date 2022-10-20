import { routes } from '@/utils'
import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const MembersTable = ({ data = [], isLoadData = true, onDeleteItem }) => {
  const navigate = useNavigate()
  const { state: lastMemberUpdated } = useLocation()
  const handleDelete = useCallback(i => {
    MySwal.fire({
      icon: 'warning',
      text: `¿Está seguro que quiere eliminar a ${i.names} ${i.lastnames}?`,
      showCancelButton: true,
      confirmButtonColor: '#1A56DB',
      cancelButtonColor: '#E02424',
    }).then(({ isConfirmed }) => {
      if (!isConfirmed) return

      onDeleteItem(i.id)
    })
  }, [])

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
              Cédula
            </th>
            <th scope="col" className="py-3 px-6">
              Nombres
            </th>
            <th scope="col" className="py-3 px-6">
              Apellidos
            </th>
            <th scope="col" className="py-3 px-6">
              Teléfono
            </th>
            <th scope="col" className="py-3 px-6">
              Miembros en la Familia
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
              className={`bg-white border-b dark:border-gray-700${
                parseInt(lastMemberUpdated) === i.id ? ' changed-status' : ''
              }`}
            >
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                {i.cedula}
              </th>
              <td className="py-4 px-6">{i.names}</td>
              <td className="py-4 px-6">{i.lastnames}</td>
              <td className="py-4 px-6">{i.phone_number}</td>
              <td className="py-4 px-6">{i.members_of_family}</td>
              <td className="py-4 px-6">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-green-600 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  p-2 text-center mr-2 mb-2"
                  onClick={() => navigate(routes.members.update, { state: i })}
                >
                  Actualizar
                </button>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-red-600 to-red-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  p-2 text-center mr-2 mb-2"
                  onClick={() => handleDelete(i)}
                >
                  Eliminar
                </button>
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

export default MembersTable
