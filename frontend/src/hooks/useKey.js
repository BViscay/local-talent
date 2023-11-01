import { useDispatch, useSelector } from 'react-redux'
import { setKey as setKeySlice } from '../redux/sliceKeys'

export default function useKey (key) {
  const keys = useSelector(state => state.keys)
  const dispatch = useDispatch()

  const setKey = (value) => {
    dispatch(setKeySlice({ key, value }))
  }

  const value = keys[key]

  return [value, setKey]
}
