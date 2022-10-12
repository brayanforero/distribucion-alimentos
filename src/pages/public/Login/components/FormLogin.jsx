import { TextInput } from 'flowbite-react'
import { Label } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { userSchema } from '@/utils'
import useLogin from '../hooks/useLogin'
import { Spinner } from 'flowbite-react'
import { Toast } from 'flowbite-react'
function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  })

  const { submitUser, loading, error } = useLogin()

  return (
    <form onSubmit={handleSubmit(submitUser)} className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Ingresa tu usuario" />
        </div>
        <TextInput
          id="username"
          type="text"
          autoComplete="off"
          placeholder="name@flowbite.com"
          sizing="sm"
          color="red"
          helperText={
            <span className="text-sm text-red-500">
              {errors.username?.message}
            </span>
          }
          {...register('username')}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput
          id="password"
          type="password"
          placeholder="******"
          sizing="sm"
          color="red"
          helperText={
            <span className="text-sm text-red-500">
              {errors.password?.message}
            </span>
          }
          {...register('password', { maxLength: 10, minLength: 6 })}
        />
      </div>

      <div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block w-full"
          disabled={loading}
        >
          {!loading ? (
            'Iniciar Sesión'
          ) : (
            <Spinner aria-label="Default status example" />
          )}
        </button>
        {error && (
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500"></div>
            <div className="ml-3 text-sm font-normal text-red-500">{error}</div>
          </Toast>
        )}
      </div>
    </form>
  )
}

export default FormLogin
