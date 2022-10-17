import { ToastContainer } from 'react-toastify'

import FormPay from './FormPay'

const Payments = () => {
  return (
    <section className="py-5 px-8">
      <h1 className="mb-4 text-lg font-semibold text-center">Pagos</h1>
      <FormPay />
      <ToastContainer />
    </section>
  )
}

export default Payments
