import { API_URL } from '@/utils'
import { getKeyFromStorage, STORAGE_KEYS } from '@/utils/storage'
import axios from 'axios'
import debounce from 'just-debounce-it'
import { useState } from 'react'
import { toast } from 'react-toastify'

function useBoxSearch() {
  const [result, setResult] = useState([])

  const searchMember = debounce(async cedula => {
    const toastID = toast('Buscando...', {
      isLoading: true,
      position: 'bottom-right',
    })

    try {
      const { data: res } = await axios.get(
        `${API_URL}/members/search?q=${cedula}`,
        {
          headers: {
            authorization: `Bearer ${
              getKeyFromStorage(STORAGE_KEYS.token) ?? ''
            }`,
          },
        }
      )

      toast.dismiss(toastID)

      if (res?.body.length === 0) {
        toast('Data not found', {
          autoClose: 600,
          type: 'error',
          position: 'bottom-right',
        })

        return
      }

      setResult(res.body)
    } catch (err) {
      const error401 = err?.response?.data?.body
      const message = err?.message ?? 'Falied get data'
      toast(error401 || message, {
        type: 'error',
        position: 'bottom-right',
      })

      if (error401) {
        cleanStorage()
        redirect(routes.home)
      }
    }
  }, 800)

  return {
    result,
    setResult,
    searchMember,
  }
}

export default useBoxSearch
