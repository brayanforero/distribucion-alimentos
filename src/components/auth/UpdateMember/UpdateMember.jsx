import { routes } from '@/utils'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import FormUpdateMember from './FormUpdateMember'

const UpdateMember = () => {
  const { state } = useLocation()

  if (!state) return <Navigate to={routes.dashboard} />
  return (
    <section className="px-8">
      <h1 className="text-lg font-semibold text-center">
        Actualizacion de Datos
      </h1>
      {state && <FormUpdateMember member={state} />}
    </section>
  )
}

export default UpdateMember
