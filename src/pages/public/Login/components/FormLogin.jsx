import { TextInput } from 'flowbite-react'
import { Label } from 'flowbite-react'

function FormLogin() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Ingresa tu usuario" />
        </div>
        <TextInput
          id="username"
          name="username"
          type="text"
          autoComplete="off"
          placeholder="name@flowbite.com"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput
          id="password"
          placeholder="******"
          name="password"
          type="password"
        />
      </div>
      <div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block w-full"
        >
          Iniciar Sesión
        </button>
      </div>
    </form>
  )
}

export default FormLogin
