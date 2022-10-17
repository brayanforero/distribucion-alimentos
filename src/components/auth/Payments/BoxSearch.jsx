import { Label } from 'flowbite-react'
import { TextInput } from 'flowbite-react'
import { useRef } from 'react'

import BoxResult from './BoxResult'
import useBoxSearch from './useBoxSearch'

function BoxSearch({ onSelect }) {
  const inputRef = useRef()
  const { result, searchMember, setResult } = useBoxSearch()
  const handleSearch = ({ target }) => {
    if (target.value === '') return setResult([])
    searchMember(target.value)
  }

  const handleSelect = m => {
    onSelect(m)
    setResult([])

    if (inputRef) {
      inputRef.current.value = ''
    }
  }

  return (
    <section className=" shadow-md rounded-lg p-4 mb-4 ">
      <form className="flex items-center  gap-2">
        <div>
          <Label htmlFor="search">
            <i className="bx bx-search bx-sm"></i>
          </Label>
        </div>
        <div className="flex-1 relative">
          <TextInput
            ref={inputRef}
            autoComplete="off"
            onChange={handleSearch}
            name="cedula"
            id="search"
            placeholder="Ingresa el numero de cédula"
          />
          <BoxResult onSelectItem={handleSelect} items={result} />
        </div>
      </form>
    </section>
  )
}

export default BoxSearch
