import { Spinner } from 'flowbite-react'
import { Label } from 'flowbite-react'
import { TextInput } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify'
import BoxSearch from './BoxSearch'
import usePayments from './usePayments'

function FormPay() {
  const { delivery, member, setMember, sendPay, loading } = usePayments()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <>
      <BoxSearch onSelect={setMember} />
      {delivery && member && (
        <form
          onSubmit={handleSubmit(sendPay)}
          className="grid grid-cols-4 gap-4 shadow-md rounded-lg p-4"
        >
          <input
            type="hidden"
            {...register('delivery_id', { value: delivery?.id })}
          />
          <input
            type="hidden"
            {...register('member_id', { value: member?.id })}
          />
          <input type="hidden" {...register('is_paid', { value: true })} />
          <div className="col-span-4">
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
          <div className="col-span-4">
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
              placeholder={
                member
                  ? `${member.cedula} - ${member.names} ${member.lastnames}`
                  : 'xxxxxx'
              }
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
              {...register('mount', {
                required: true,
                min: { value: 0.25, message: 'Should be min 0.25' },
                valueAsNumber: true,
              })}
              helperText={
                <span className="text-sm text-red-500">
                  {errors.mount?.message}
                </span>
              }
            />
          </div>

          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="mount" value="Moneda" />
            </div>
            <select
              id="mount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              {...register('currency', {
                required: { value: true, message: 'You must chose an option' },
              })}
            >
              <option selected value="VEZ">
                VEZ
              </option>
              <option value="COP">COP</option>
            </select>
            <span className="text-sm text-red-500">
              {errors.currency?.message}
            </span>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block w-full"
            >
              {!loading ? 'Consigar Pago' : <Spinner />}
            </button>
            <ToastContainer />
          </div>
        </form>
      )}
    </>
  )
}
export default FormPay
