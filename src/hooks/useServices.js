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

    const formData = new FormData();
    formData.append("image", image[0]);
    formData.append("title", title);
    formData.append("categoryId", categoryId);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("city", city);
    formData.append("latitude", geolocation.latitude);
    formData.append("longitude", geolocation.longitude);

    try {
      await axios.post(API_URL_SERVICES, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

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
