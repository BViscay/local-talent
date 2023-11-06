import axios from "axios";
import {
    // API_URL_NOTIFICATIONS,
    API_URL_COUNT_NOTIFICATIONS,
    // API_URL_NEWS_NOTIFICATIONS,
} from "../config/api";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { getToken } from "../redux/sliceLogin";

const useNotifications = () => {
    const token = useSelector(getToken);

    const handleCountNotifications = async () => {
        try {
            const data = await axios.get(API_URL_COUNT_NOTIFICATIONS, token, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(data);
            Swal.fire({
                title: "Notificaciones",
                text: `Tienes ${data} nuevas notificaciones🎉`,
                icon: "success",
            });
        } catch (error) {
            if (error.response) {
                Swal.fire({
                    title: "Error",
                    text: "Hubo un error al contar tus notificaciones nuevas 😣",
                    icon: "error",
                });
                console.log("Response Data:", error.response.data);
            }
        }
    };

    return { handleCountNotifications };
};

export default useNotifications;
