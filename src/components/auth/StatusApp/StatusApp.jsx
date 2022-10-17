import useAuth from '@/hooks/useAuth'
import dayjs from 'dayjs'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const StatusApp = () => {
  const { user, logout } = useAuth()
  const [date, setDate] = useState(
    dayjs(new Date()).format('DD/MM/YYYY HH:mm a')
  )

  useEffect(() => {
    const timerDate = setInterval(() => {
      setDate(dayjs(new Date()).format('DD/MM/YYYY HH:mm a'))
    }, 1000 * 60)

    return () => {
      clearInterval(timerDate)
    }
  }, [])

  return (
    <section className="p-4 flex flex-col gap-2">
      <div className="ml-auto w-2/5 flex justify-end gap-2 text-gray-800 text-sm">
        <p className="font-semibold">Fecha: </p>
        <p className="font-normal">{date}</p>
      </div>
      <div className="ml-auto mx-w-sm flex justify-end gap-2 text-gray-800 text-sm">
        <p className="font-semibold flex items-center gap-1">
          <i className="bx bxs-user"></i> Bienvenido(a):{' '}
          <span className="opacity-90">{user.username}</span>
        </p>
        <button
          onClick={logout}
          className="text-white font-semi flex gap-2 items-center bg-gradient-to-r from-red-600 to-red-500 p-2 rounded"
        >
          <i className="bx bxs bx-exit"></i>
          Cerrar Sesión
        </button>
      </div>
    </section>
  )
}

export default StatusApp
