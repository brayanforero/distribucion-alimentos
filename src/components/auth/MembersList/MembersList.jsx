import { TableSkeleton } from '@/components/layouts/TableSkeleton'
import { ToastContainer } from 'react-toastify'
import MembersTable from './MembersTable'
import useMembersList from './useMembersList'

const MembersList = () => {
  const { members, loading, deleteMember } = useMembersList()
  return (
    <section className="py-5 px-8">
      <h1 className="mb-4 text-lg font-semibold text-center">
        Lista de Miembros
      </h1>
      {loading && <TableSkeleton />}
      <MembersTable
        isLoadData={loading}
        data={members}
        onDeleteItem={deleteMember}
      />
      <ToastContainer />
    </section>
  )
}

export default MembersList
