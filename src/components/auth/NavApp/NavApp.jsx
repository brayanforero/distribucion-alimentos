import { AppLink } from '@/components/shared/AppLink'
import { routes } from '@/utils'
function NavApp() {
  return (
    <aside className="w-1/4 max-w-[300px]">
      <nav className="h-full flex items-center bg-white rounded">
        <ul className="w-full flex flex-col">
          <li className="w-[85%] mx-auto">
            <AppLink to=".">
              <div className="flex items-center gap-2">
                <i className="bx bx-rocket"></i>
                Home
              </div>
            </AppLink>
          </li>
          <li className="w-[85%] mx-auto">
            <AppLink to={routes.members.index}>
              <div className="flex items-center gap-4">
                <i className="bx bx-group"></i>
                <span className="whitespace-nowrap">Miembros</span>
              </div>
            </AppLink>
          </li>
          <li className="w-[85%] mx-auto">
            <AppLink to={routes.members.add}>
              <div className="flex items-center gap-4">
                <i className="bx bx-user-plus"></i>
                <span className="whitespace-nowrap">Agregar Miembro</span>
              </div>
            </AppLink>
          </li>
          <li className="w-[85%] mx-auto">
            <AppLink to="deliveries">
              <div className="flex items-center gap-4">
                <i className="bx bx-package"></i>
                <span>Entregas</span>
              </div>
            </AppLink>
          </li>
          <li className="w-[85%] mx-auto">
            <AppLink to={routes.payments}>
              <div className="flex items-center gap-4">
                <i className="bx bx-wallet"></i>
                <span>Pagos</span>
              </div>
            </AppLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default NavApp
