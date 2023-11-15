import useKey from './useKey'

export default function useLoader () {
  const [loaderValue, setKey] = useKey('loader')
  const setLoader = (value = !loaderValue) => setKey(value)

  const handleLoader = async (service, param) => {
    setLoader(true)
    const res = await service(param)
    setLoader(false)
    return res
  }

  return { loaderValue, setLoader, handleLoader }
}
