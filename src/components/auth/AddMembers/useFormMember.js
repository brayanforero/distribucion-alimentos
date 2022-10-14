import { useState } from 'react'

function useFormMember() {
  const [loading, setLoading] = useState(false)

  const submiter = member => {
    console.log(member ?? 'Empty data')
  }

  return { loading, submiter }
}

export default useFormMember
