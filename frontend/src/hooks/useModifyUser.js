import axios from "axios";
import Swal from "sweetalert2";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getToken} from "../redux/sliceLogin";
import {API_URL_USERIMAGE} from "../config/api";

const useModifyUser = () => {
  const token = useSelector(getToken);
  const navigate = useNavigate();

  const handleUserImage = async ({image}) => {
    const imgChange = new FormData();
    imgChange.append("image", image[0]);

    try {
      const {data} = await axios.put(API_URL_USERIMAGE, imgChange, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      if (data) {
        Swal.fire({
          title: "Éxito",
          text: "Datos cambiados correctamente 🎉",
          icon: "success",
        }).then(() => {
          navigate("/home");
          window.location.reload();
        });
      }
    } catch (error) {
      if (error.response) {
        Swal.fire({
          title: "Error",
          text: "Hubo un error al cambiar la imagen 😣",
          icon: "error",
        });
        console.log("Response Data:", error.response.data);
      }
    }
  };

  return {handleUserImage};
};

export default useModifyUser;
