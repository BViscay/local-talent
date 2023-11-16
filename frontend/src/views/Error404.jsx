import { useNavigate } from 'react-router-dom'
import useLoader from '../hooks/useLoader'
import { useEffect } from 'react'
import useKey from '../hooks/useKey'

export default function Error404() {
  const navigate = useNavigate()
  const { setLoader } = useLoader()
  const [value, setValue] = useKey('error404')

  useEffect(()=>{
    setLoader(false)
    setValue(!value)
  },[]) 

  return (
    <div className='flex flex-col h-screen flex items-center justify-center'>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h1 className="text-2xl font-bold mb-4">Ups! Página no encontrada</h1>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-52'
        onClick={() => navigate(-1)}
      >
        Volver
      </button>
    </div>
  )
}