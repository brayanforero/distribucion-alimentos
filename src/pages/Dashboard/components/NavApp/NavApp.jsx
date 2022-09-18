import { Sidebar } from 'flowbite-react'

import { NavLink } from 'react-router-dom'

function NavApp() {
  return (
    <div className="w-fit h-full bg-white">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">
              <NavLink className="text-bold text-blue-600" to={'/app'}>
                Dashboard
              </NavLink>
            </Sidebar.Item>
            <Sidebar.Item href="#">Brayan Forero</Sidebar.Item>
            <Sidebar.Item href="#">Inbox</Sidebar.Item>
            <Sidebar.Item href="#">
              <NavLink to={'/app/comunity'}>Comunidad</NavLink>
            </Sidebar.Item>
            <Sidebar.Item href="#">Lotes</Sidebar.Item>
            <Sidebar.Item href="#">
              <NavLink to={'/app/settings'}>Configuración</NavLink>
            </Sidebar.Item>
            <Sidebar.Item href="#">Cerrar Sesión</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  )
}

export default NavApp
