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
  setAllServices,
  setServiceDetail,
  setNearServices,
  getAllServices,
  getRenderServices,
  getFilteredServices,
  setFilteredServices,
  setMyServices,
} from "../redux/sliceFilters";
import Swal from "sweetalert2";

const useFilters = () => {
  const token = useSelector(getToken);
  const allServices = useSelector(getAllServices);
  const renderServices = useSelector(getRenderServices);
  const filteredServices = useSelector(getFilteredServices);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFilterByCategory = async (catId) => {
    try {
      const {data} = await axios.get(`${API_URL_SEARCH}?categoryId=${catId}`);

      if (data) {
        navigate("/filtered-services");
        dispatch(setFilteredServices(data));
        dispatch(setRenderServices(data));
      }
    } catch (error) {
      console.log(error);

      Swal.fire({
        title: "Error",
        text: "No existen servicios de esta categoría",
        icon: "error",
      });
    }
  };

  const handleFilterByName = async (serviceName) => {
    try {
      const {data} = await axios.get(`${API_URL_SEARCH}?text=${serviceName}`);
      if (data) {
        dispatch(setRenderServices(data));
        dispatch(setFilteredServices(data));
      }
    } catch (error) {
      console.log(error);

      Swal.fire({
        title: "Error",
        text: "No existen servicios con este nombre",
        icon: "error",
      });
    }
  };

  const handleFilterOwnServices = async () => {
    if (!token) {
      Swal.fire({
        title: "Aviso",
        text: "Por favor inicia sesión o regístrate para buscar tus servicios",
        icon: "warning",
      });
    }
    try {


      const { data } = await axios(API_URL_SERVICES, {

        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data) {

        dispatch(setMyServices(data));
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleFilterByServiceId = async (servId) => {
    try {
      const response = await axios(`${API_URL_SEARCH}?serviceId=${servId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        dispatch(setServiceDetail(response.data));
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
      console.log(error.message);
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

  const filterByRating = (rating) => {
    if (rating === "rating") {
      dispatch(setRenderServices(renderServices));
    } else if (rating === "Menor") {
      const descendentOrder = [...renderServices];
      descendentOrder.sort((a, b) => {
        const nameA = a.rating;
        const nameB = b.rating;
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
      });
      dispatch(setRenderServices(descendentOrder));
    } else if (rating === "Mayor") {
      const ascendentOrder = [...renderServices];
      ascendentOrder.sort((a, b) => {
        const nameA = a.rating;
        const nameB = b.rating;
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      });
      dispatch(setRenderServices(ascendentOrder));
    }
  };

  const filterByPrice = (price) => {
    if (price === "price") {
      dispatch(setRenderServices(renderServices));
    } else if (price === "Menor") {
      const descendentOrder = [...renderServices];
      descendentOrder.sort((a, b) => {
        const nameA = a.price;
        const nameB = b.price;
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
      });
      dispatch(setRenderServices(descendentOrder));
    } else if (price === "Mayor") {
      const ascendentOrder = [...renderServices];
      ascendentOrder.sort((a, b) => {
        const nameA = a.price;
        const nameB = b.price;
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      });
      dispatch(setRenderServices(ascendentOrder));
    }
  };

  const filterByCategory = (category) => {
    if (category === "categoria") {
      dispatch(setRenderServices(filteredServices));
    } else {
      const categoryFiltered = filteredServices.filter((service) =>
        service.category.name.includes(category)
      );
      dispatch(setRenderServices(categoryFiltered));
    }
  };
  return {
    handleFilterByServiceId,
    handleFilterByCategory,
    handleFilterByName,
    handleFilterOwnServices,
    handleFilterByLocation,
    handleAllServices,
    filterByRating,
    filterByPrice,
    filterByCategory,
  };
};

export default useFilters;
