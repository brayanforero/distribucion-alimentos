import { API_URL, routes } from '@/utils'
import { getKeyFromStorage, STORAGE_KEYS } from '@/utils/storage'
import axios from 'axios'
import debounce from 'just-debounce-it'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

function useUpdateMember() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState()

  const goToMembers = debounce(
    id => navigate(routes.members.index, { state: id }),
    1200
  )
  const updateMember = member => {
    setLoading(true)

    axios
      .put(`${API_URL}/members`, member, {
        headers: {
          authorization: `Bearer ${
            getKeyFromStorage(STORAGE_KEYS.token) ?? ''
          }`,
        },
      })
      .then(_data => {
        toast('Member added', {
          type: 'success',
          position: 'bottom-right',
          closeOnClick: () => goToMembers(member.id),
          onClose: () => goToMembers(member.id),
        })

        //
      })
      .catch(err => {
        const error404 = err?.response?.data.body
        const axiosMessage = err?.message || 'Error sending information'

        toast(error404 || axiosMessage, {
          type: 'error',
          position: 'bottom-right',
        })
      })
      .finally(() => {
        setLoading()
      })
  }

  const submiter = (member, { target }) => {
    updateMember(member)
    target.reset()
  }

  return { loading, submiter }
}

export default useUpdateMember
