import { useContext } from 'react'
import { DataContext } from '~/providers/data'

function useData() {
  const data = useContext(DataContext)
  return data
}

export default useData
