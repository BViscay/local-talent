import {getToken, getLocation} from "../redux/sliceLogin";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {API_URL_SERVICES} from "../config/api";

const useServices = () => {
  const token = useSelector(getToken);
  const geolocation = useSelector(getLocation);
  const navigate = useNavigate();

  const handleCreateService = async (newService) => {
    const {image, title, categoryId, description, price, city} = newService;

    const serviceData = {
      image,
      title,
      categoryId,
      description,
      price,
      city,
      latitude: geolocation.latitude,
      longitude: geolocation.longitude,
    };
    console.log(serviceData);
    try {
      const {data} = await axios.post(API_URL_SERVICES, serviceData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      navigate("/home");
    } catch (error) {
      if (error.response) {
        alert("error!");
        console.log("Response Data:", error.response.data);
      }
    }
  };

  return {handleCreateService};
};

export default useServices;
