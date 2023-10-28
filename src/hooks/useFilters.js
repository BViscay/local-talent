import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {API_URL_SERVICES, API_URL_SEARCH} from "../config/api";
import {getToken} from "../redux/sliceLogin";
import {setRenderServices, setFilterByName} from "../redux/sliceFilters";

const useFilters = () => {
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  const handleFilterByCategory = async (catId) => {
    if (!token) {
      alert("Por favor logueate o registrate para buscar servicios");
      if (token !== null) {
        try {
          const {data} = await axios(`${API_URL_SEARCH}?categoryid=${catId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (data) {
            dispatch(setRenderServices(data));
          }
        } catch (error) {
          console.log(error);
          alert("No existen servicios de esta categoría");
        }
      }
    }
  };

  const handleFilterByName = async (serviceName) => {
    try {
      const {data} = await axios(`${API_URL_SEARCH}?text=${serviceName}`);
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

  return {handleFilterByCategory, handleFilterByName, handleFilterOwnServices};
};

export default useFilters;
