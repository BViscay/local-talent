import { getLocation } from "../redux/sliceLogin";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL_SERVICES } from "../config/api";
import useLoader from './useLoader';

const useServices = () => {
   const token = localStorage.getItem("token");
    const geolocation = useSelector(getLocation);
    const navigate = useNavigate();

    const { setLoader } = useLoader()

    const handleCreateService = async (newService) => {
        const { image, title, categoryId, description, price, city } =
            newService;

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
            setLoader(true)
            await axios.post(API_URL_SERVICES, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });
            setLoader(false)
            // Reemplaza alert con SweetAlert
            Swal.fire({
                title: "Éxito",
                text: "Servicio creado correctamente 🎉",
                icon: "success",
            }).then(() => {
                navigate("/home");
            });
        } catch (error) {
            setLoader(false)
            if (error.response) {
                Swal.fire({
                    title: "Error",
                    text: "Hubo un error al crear el servicio 😣",
                    icon: "error",
                });
                console.log("Response Data:", error.response.data);
            }
        }
    };

    return { handleCreateService };
};

export default useServices;
