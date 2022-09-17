import Logo from '@/assets/clap-logo.png'
function CardForm({ children }) {
  return (
    <div className=" bg-white opacity-90 w-full max-w-sm  rounded-lg shadow-lg py-5 px-8">
      <div className="block mb-5 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 opacity-90">
          Inicio de Sesión
        </h1>
      </div>
      <div>
        <img
          className="block mx-auto w-[220px] max-w-[320px]"
          src={Logo}
          alt="clap logo"
        />
      </div>
      {children}
    </div>
  )
}

export default CardForm
