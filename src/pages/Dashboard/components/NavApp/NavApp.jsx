import { Sidebar } from 'flowbite-react'
import { AppLink } from '@/components'

function NavApp() {
  return (
    <div className="w-fit h-full bg-white">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <li>
              <AppLink to="/app">Home</AppLink>
            </li>
            <li>
              <AppLink to="comunity">Comunidad</AppLink>
            </li>
            <li>
              <AppLink to="settings">Configuración</AppLink>
            </li>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  )
}

export default NavApp
