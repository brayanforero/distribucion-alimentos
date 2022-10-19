import { routes } from '@/utils'
import { Link } from 'react-router-dom'
import Logo from '@/assets/clap-logo.png'
const Home = () => {
  return (
    <main className="flex flex-col items-center gap-5">
      <section className="w-3/5 h-[15%] shadow-md rounded-lg p-4  bg-gradient-to-r from-red-600  to-red-500">
        <p className="text-2xl text-gray-50 text-center">Bienvenidos</p>
      </section>
      <img src={Logo} width="240" alt="Clap logo" />
      <section className="w-3/5 h-2/4 shadow-md  rounded-lg grid grid-cols-4 overflow-hidden">
        <Link
          to={routes.members.index}
          className="col-span-2 text-gray-800 hover:text-gray-50 flex justify-center items-center hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 transition-all"
        >
          <i className="bx bx-group bx-lg"></i>
          <span className="text-xl">Miembros</span>
        </Link>
        <Link
          to={routes.payments}
          className="col-span-2 text-gray-800 hover:text-gray-50 flex justify-center items-center hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 transition-all"
        >
          <i className="bx bx-wallet bx-lg"></i>
          <span className="text-xl">Consignar Pago</span>
        </Link>
        <Link
          to={routes.deliveries}
          className="col-span-2 text-gray-800 hover:text-gray-50 flex justify-center items-center hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 transition-all"
        >
          <i className="bx bx-box bx-lg"></i>
          <span className="text-xl">Entregas</span>
        </Link>
        <Link
          to={routes.members.add}
          className="col-span-2 text-gray-800 hover:text-gray-50 flex justify-center items-center hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 transition-all"
        >
          <i className="bx bx-user-plus bx-lg"></i>
          <span className="text-xl">Agregar Miembro</span>
        </Link>
      </section>
    </main>
  )
}

export default Home
