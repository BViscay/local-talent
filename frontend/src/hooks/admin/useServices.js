import axios from "axios";
import { getToken } from "../../redux/sliceLogin";
import { API_URL_GET_SERVICES } from "../../config/api";
import { useSelector } from "react-redux";
import useKey from '../useKey';
import Swal from 'sweetalert2';
import useLoader from '../useLoader';

export default function useServices () {
  const [services, setServices] = useKey('allServices')
  const token = useSelector(getToken)

  const { setLoader } = useLoader()

  const getServices = async () => {
    try {
      setLoader(true)
        const headers = { Authorization: `Bearer ${token}`}
        const res = await axios.get(API_URL_GET_SERVICES, { headers })
      setLoader(false)
      setServices(res.data)
      return true      
    } catch ({ message }) {
      Swal.fire('Error al obtener servicios',message,'error')
      setServices([])
      return false
    }
  }

  const handleDelete = async (id) =>{
      try {
        setLoader(true)
          const headers = { Authorization: `Bearer ${token}`}
          await axios.delete(`${API_URL_GET_SERVICES}/${id}`, { headers })
        setLoader(false)
        const newState = services.filter(service => service.id !== id)
        setServices(newState)
        return true
      } catch ({message}) {
        Swal.fire('Error al obtener servicios',message,'error')
        return false
      }
  }

  return { services, getServices , handleDelete}
}


