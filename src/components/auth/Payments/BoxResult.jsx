function BoxResult({ items = [], onSelectItem }) {
  const hasItems = items.length > 0 ? true : false
  return (
    <div
      className={`block absolute w-full bg-white shadow z-50 top-[56px] rounded-lg p-4 ${
        hasItems
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      {items.map(i => (
        <span
          onClick={() => onSelectItem(i)}
          key={i.cedula}
          className="block w-full p-4 hover:bg-gray-100 cursor-pointer rounded-lg"
        >
          {i.cedula} - {i.names} {i.lastnames}
        </span>
      ))}
    </div>
  )
}

export default BoxResult
