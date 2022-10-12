import { GuestRoute } from '@/components'
import CardForm from './components/CardForm'
import FormLogin from './components/FormLogin'
import './Login.css'
function Login() {
  return (
    <GuestRoute>
      <div className="Login w-full h-full flex justify-center items-center px-4 md:px-0">
        <CardForm>
          <FormLogin />
        </CardForm>
      </div>
    </GuestRoute>
  )
}

export default Login
