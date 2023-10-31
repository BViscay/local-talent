import {useState} from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {
  API_URL_SERVICES,
  API_URL_ALLSERVICES,
  API_URL_SEARCH,
} from "../config/api";
import {getToken} from "../redux/sliceLogin";
import {
  setRenderServices,
  setFilterByName,
  setAllServices,
  setNearServices,
  getAllServices,
} from "../redux/sliceFilters";

const useFilters = () => {
  const [detailService, setDetailService] = useState({});
  const token = useSelector(getToken);
  const allServices = useSelector(getAllServices);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFilterByCategory = async (catId) => {
    try {
      const {data} = await axios.get(`${API_URL_SEARCH}?data=${catId}`);

      if (data) {
        navigate("/filtered-services");
        dispatch(setRenderServices(data));
      }
    } catch (error) {
      console.log(error);
      alert("No existen servicios de esta categoría");
    }
  };

  const handleFilterByName = async (serviceName) => {
    try {
      const {data} = await axios.get(`${API_URL_SEARCH}?data=${serviceName}`);
      if (data) {
        dispatch(setFilterByName(data));
      }
    } catch (error) {
      console.log(error);
      alert("No existen servicios con este nombre");
    }
  };

  const handleFilterOwnServices = async () => {
    if (!token) {
      alert("Por favor logueate o registrate para buscar tus servicios");
      if (token !== null) {
        try {
          const {data} = await axios(API_URL_SERVICES, {
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

  const handleFilterByServiceId = async (servId) => {
    try {
      const response = await axios(`${API_URL_SERVICES}?categoryId=${servId}`,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
      if (response.data.name) {
        setDetailService(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAllServices = async () => {
    try {
      const {data} = await axios(API_URL_ALLSERVICES);
      if (data) {
        dispatch(setAllServices(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterByLocation = (location) => {
    const roundedLatitude = location.latitude.toFixed(1);
    const roundedLongitude = location.longitude.toFixed(1);

    const sameLocationService = allServices.filter((service) => {
      const serviceRoundedLatitude = service.latitude.toFixed(1);
      const serviceRoundedLongitude = service.longitude.toFixed(1);

      return (
        serviceRoundedLatitude === roundedLatitude &&
        serviceRoundedLongitude === roundedLongitude
      );
    });

    dispatch(setNearServices(sameLocationService));
  };

  return {
    handleFilterByServiceId,
    handleFilterByCategory,
    handleFilterByName,
    handleFilterOwnServices,
    handleFilterByLocation,
    handleAllServices,
    detailService,
  };
};

export default useFilters;
