import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  API_URL_SERVICES,
  API_URL_ALLSERVICES,
  API_URL_SEARCH,
} from "../config/api";
import { getToken } from "../redux/sliceLogin";
import {
  setRenderServices,
  setFilterByName,
  setAllServices,
  setNearServices,
} from "../redux/sliceFilters";
import Swal from "sweetalert2";


const useFilters = () => {
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFilterByCategory = async (catId) => {
    try {
      const { data } = await axios.get(`${API_URL_SEARCH}?data=${catId}`);

      if (data) {
        navigate("/filtered-services");
        dispatch(setRenderServices(data));
      }
    } catch (error) {
      console.log(error);
      
      Swal.fire({
        title: 'Error',
        text: 'No existen servicios de esta categoría',
        icon: 'error',
      });
    }
  };

  const handleFilterByName = async (serviceName) => {
    try {
      const { data } = await axios.get(`${API_URL_SEARCH}?data=${serviceName}`);
      if (data) {
        dispatch(setFilterByName(data));
      }
    } catch (error) {
      console.log(error);
      
      Swal.fire({
        title: 'Error',
        text: 'No existen servicios con este nombre',
        icon: 'error',
      });
    }
  };

  const handleFilterOwnServices = async () => {
    if (!token) {
      
      Swal.fire({
        title: 'Aviso',
        text: 'Por favor inicia sesión o regístrate para buscar tus servicios',
        icon: 'warning',
      });
      if (token !== null) {
        try {
          const { data } = await axios(API_URL_SERVICES, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (data) {
            dispatch(setFilterByName(data));
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const handleFilterByLocation = async (location) => {
    try {
      const { data } = await axios.get(API_URL_ALLSERVICES);

      if (data) {
        const sameLocationService = data.filter((service) =>
          service.latitude === location?.latitude && service.longitude === location?.longitude
        );

        dispatch(setNearServices(sameLocationService));
        dispatch(setAllServices(data));
      }
    } catch (error) {
      console.error(error);
      
      Swal.fire({
        title: 'Error',
        text: 'Ocurrió un error al filtrar por ubicación',
        icon: 'error',
      });
    }
  };

  return {
    handleFilterByCategory,
    handleFilterByName,
    handleFilterOwnServices,
    handleFilterByLocation,
  };
};

export default useFilters;
