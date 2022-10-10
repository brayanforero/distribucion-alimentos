import { useState, useEffect } from 'react'
import axios from 'axios'

import { MembersTable } from './components/MembersTable'
import { TableSkeleton } from '@/layouts/TableSkeleton'
const MembersList = () => {
  const [members, setMembers] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    const timer = setTimeout(() => {
      axios
        .get('http://127.0.0.1:4000/v1/members', {
          signal: controller.signal,
        })
        .then(({ data }) => {
          const { values } = data.body
          setMembers(values)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setLoading(false)
        })
    }, 2000)
    return () => {
      controller.abort()
      clearTimeout(timer)
    }
  }, [])
  return (
    <section className="py-5 px-8">
      <h1 className="mb-4 text-lg font-semibold text-center">
        Lista de Miembros
      </h1>
      {loading && <TableSkeleton />}
      <MembersTable isLoadData={loading} data={members} />
    </section>
  )
}

export default MembersList
