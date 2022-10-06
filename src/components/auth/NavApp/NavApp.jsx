import { AppLink } from '@/components/shared/AppLink'
import { Link } from 'react-router-dom'

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
                <i className="bx bx-chevron-right ml-auto text-xl"></i>
              </div>
              <ul className="w-[90%] ml-auto border-l-2 border-white">
                <li>
                  <Link className="py-3 px-4 block w-full" to=".">
                    Subitem1
                  </Link>
                </li>
                <li>
                  <Link className="py-3 px-4 block w-full" to=".">
                    Subitem2
                  </Link>
                </li>
                <li>
                  <Link className="py-3 px-4 block w-full" to=".">
                    Subitem3
                  </Link>
                </li>
              </ul>
            </AppLink>
          </li>
          <li className="w-[85%] mx-auto">
            <AppLink to="comunity">
              <div className="flex items-center gap-4">
                <i class="bx bx-group"></i>
                Comunidad
                <i className="bx bx-chevron-right ml-auto text-xl"></i>
              </div>
            </AppLink>
          </li>
          <li className="w-[85%] mx-auto">
            <AppLink to="settings">
              <div className="flex items-center gap-4">
                <i class="bx bx-cog"></i>
                Configuración
              </div>
            </AppLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default NavApp
