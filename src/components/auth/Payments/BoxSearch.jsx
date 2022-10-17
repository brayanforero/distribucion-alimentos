import { Button } from 'flowbite-react'
import { Label } from 'flowbite-react'
import { TextInput } from 'flowbite-react'
import { useState } from 'react'
import BoxResult from './BoxResult'

function BoxSearch() {
  const data = useState([])
  return (
    <section className=" shadow-md rounded-lg p-4 mb-4 ">
      <form className="flex items-center  gap-2">
        <div>
          <Label htmlFor="search">
            <i className="bx bx-search bx-sm"></i>
          </Label>
        </div>
        <div className="flex-1 relative">
          <TextInput id="search" placeholder="Ingresa el numero de cédula" />
          <BoxResult />
        </div>
        <div>
          <Button type="submit">Buscar</Button>
        </div>
      </form>
    </section>
  )
}

export default BoxSearch
