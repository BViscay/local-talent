import useKey from './useKey'

export default function useLoader () {
  const [loaderValue, setKey] = useKey('loader')
  const loaderOnOff = (value = !loaderValue) => setKey(value)

  const handleLoader = async (service, param) => {
    loaderOnOff(true)
    const res = await service(param)
    loaderOnOff(false)
    return res
  }

  return { loaderValue, loaderOnOff, handleLoader }
}
