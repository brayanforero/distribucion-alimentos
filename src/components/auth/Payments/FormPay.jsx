import { Label } from 'flowbite-react'
import { TextInput } from 'flowbite-react'
import { Spinner } from 'flowbite-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify'
import BoxSearch from './BoxSearch'
import usePayments from './usePayments'

function FormPay() {
  const { delivery } = usePayments()
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()

  return (
    <>
      <BoxSearch />
      <form
        onSubmit={handleSubmit(() => {})}
        className="grid grid-cols-4 gap-4 shadow-md rounded-lg p-4"
      >
        <div className="col-span-2">
          <div className="mb-2 block">
            <Label value="Código de Entrega" />
          </div>
          <TextInput
            id="code"
            type="text"
            autoComplete="off"
            sizing="sm"
            disabled
            placeholder={delivery?.code || 'xxxxxx'}
          />
        </div>
        <div className="col-span-2">
          <div className="mb-2 block">
            <Label htmlFor="member" value="Miembro" />
          </div>
          <TextInput
            id="member"
            type="text"
            autoComplete="off"
            sizing="sm"
            color="red"
            disabled
            placeholder="xxxxxx"
            {...register('member')}
          />
        </div>
        <div className="col-span-2">
          <div className="mb-2 block">
            <Label htmlFor="mount" value="Monto" />
          </div>
          <TextInput
            id="mount"
            type="number"
            step="0.5"
            autoComplete="off"
            sizing="sm"
            color="red"
            placeholder="0.0"
            {...register('mount')}
          />
        </div>

        <div className="col-span-2">
          <div className="mb-2 block">
            <Label htmlFor="mount" value="Modena" />
          </div>
          <select
            id="mount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          >
            <option selected>Seleccione una Moneda</option>
            <option value="VEZ">VEZ</option>
            <option value="COP">COP</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block w-full"
          >
            Consigar Pago
          </button>
          <ToastContainer />
        </div>
      </form>
    </>
  )
}
export default FormPay
