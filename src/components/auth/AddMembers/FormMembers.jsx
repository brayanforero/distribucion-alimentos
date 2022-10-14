import { memberSchema } from '@/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { Spinner } from 'flowbite-react'
import { Label, TextInput } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify'
import useFormMember from './useFormMember'

function FormMembers() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(memberSchema) })
  const { submiter, loading } = useFormMember(reset)
  return (
    <form
      onSubmit={handleSubmit(submiter)}
      className="grid grid-cols-4 gap-4 shadow-md rounded-lg p-4"
    >
      <div className="col-span-2">
        <div className="mb-2 block">
          <Label htmlFor="cedula" value="Cédula" />
        </div>
        <TextInput
          id="cedula"
          type="text"
          autoComplete="off"
          placeholder="xxxxxxxxx"
          sizing="sm"
          color="red"
          helperText={
            <span className="text-sm text-red-500">
              {errors.cedula?.message}
            </span>
          }
          {...register('cedula')}
        />
      </div>
      <div className="col-span-2"></div>
      <div className="col-span-2">
        <div className="mb-2 block">
          <Label htmlFor="names" value="Nombres" />
        </div>
        <TextInput
          id="names"
          type="text"
          autoComplete="off"
          placeholder="John Eric"
          sizing="sm"
          color="red"
          helperText={
            <span className="text-sm text-red-500">
              {errors.names?.message}
            </span>
          }
          {...register('names')}
        />
      </div>

      <div className="col-span-2">
        <div className="mb-2 block">
          <Label htmlFor="lastnames" value="Apellidos" />
        </div>
        <TextInput
          id="lastnames"
          type="text"
          autoComplete="off"
          placeholder="Doe Park"
          sizing="sm"
          color="red"
          helperText={
            <span className="text-sm text-red-500">
              {errors.lastnames?.message}
            </span>
          }
          {...register('lastnames')}
        />
      </div>

      <div className="col-span-2">
        <div className="mb-2 block">
          <Label htmlFor="phone_number" value="Télefono" />
        </div>
        <TextInput
          id="phone_number"
          type="text"
          autoComplete="off"
          placeholder="+581022310000"
          sizing="sm"
          color="red"
          helperText={
            <span className="text-sm text-red-500">
              {errors.phone_number?.message}
            </span>
          }
          {...register('phone_number')}
        />
      </div>

      <div className="col-span-2">
        <div className="mb-2 block">
          <Label htmlFor="address" value="Dirección" />
        </div>
        <TextInput
          id="address"
          type="text"
          autoComplete="off"
          placeholder="Calle Alegria, Municipio, Estado"
          sizing="sm"
          color="red"
          helperText={
            <span className="text-sm text-red-500">
              {errors.address?.message}
            </span>
          }
          {...register('address')}
        />
      </div>

      <div className="col-span-2">
        <div className="mb-2 block">
          <Label htmlFor="member_of_family" value="Miembros en la Familía" />
        </div>
        <TextInput
          id="member_of_family"
          type="text"
          autoComplete="off"
          placeholder="x"
          sizing="sm"
          color="red"
          helperText={
            <span className="text-sm text-red-500">
              {errors.member_of_family?.message}
            </span>
          }
          {...register('member_of_family')}
        />
      </div>

      <div className="col-span-2">
        <div className="mb-2 block">
          <Label htmlFor="is_worker" value="¿Es trabajador?" />
        </div>
        <input
          id="is_worker"
          type="checkbox"
          value=""
          className="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          {...register('is_worker')}
        />
      </div>

      <div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block w-full"
        >
          {!loading ? 'Agregar' : <Spinner />}
        </button>
        <ToastContainer />
      </div>
    </form>
  )
}

export default FormMembers
