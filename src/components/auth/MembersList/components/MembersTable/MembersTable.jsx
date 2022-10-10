const MembersTable = ({ data = [], isLoadData = true }) => {
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
          </tr>
        </thead>
        <tbody>
          {data.map(i => (
            <tr key={i.id} className="bg-white border-b  dark:border-gray-700">
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
