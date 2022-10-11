import Logo from '@/assets/clap-logo.png'
function CardForm({ children }) {
  return (
    <div className="bg-white opacity-90 w-full max-w-sm  rounded-lg shadow-lg py-5 px-8">
      <div className="block mb-2 xl:mb-4 text-center">
        <h1 className="text-2xl xl:text-3xl font-semibold text-gray-800 opacity-90">
          Inicio de Sesión
        </h1>
      </div>
      <div>
        <img
          className="block mx-auto w-[140px] xl:w-[220px]"
          src={Logo}
          alt="clap logo"
        />
      </div>
      {children}
    </div>
  )
}

export default CardForm
