export const STORAGE_KEYS = {
  token: 'token',
  user: 'user',
}

export const setStorage = (key, value) => {
  const parseValue = JSON.stringify(value)
  window.localStorage.setItem(key, parseValue)
}

export const getKeyFromStorage = key => {
  const dataString = window.localStorage.getItem(key)

  if (!dataString || typeof dataString === 'undefined') return null

  return JSON.parse(dataString)
}

export const removeKeyStorage = key => {
  window.localStorage.removeItem(key)
}

export const cleanStorage = key => {
  window.localStorage.clear(key)
}
