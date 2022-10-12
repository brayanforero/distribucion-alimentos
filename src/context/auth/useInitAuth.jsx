import { getKeyFromStorage, STORAGE_KEYS } from '@/utils/storage'
import { useEffect } from 'react'

function useInitAuth(setterUser) {
  useEffect(() => {
    const loggedUser = getKeyFromStorage(STORAGE_KEYS.user)
    if (loggedUser) {
      setterUser(loggedUser)
    }
  }, [])
}

export default useInitAuth
