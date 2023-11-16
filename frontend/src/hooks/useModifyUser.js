import axios from "axios";
import Swal from "sweetalert2";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getToken} from "../redux/sliceLogin";
import {API_URL_USERIMAGE, API_URL_EDIT_PROFILE} from "../config/api";
import useLoader from './useLoader';

const useModifyUser = () => {
  const token = useSelector(getToken);
  const navigate = useNavigate();

  const { setLoader } = useLoader()

  const handleUserImage = async ({image}) => {
    const imgChange = new FormData();
    imgChange.append("image", image[0]);

    try {
      setLoader(true)
      const response = await axios.patch(API_URL_USERIMAGE, imgChange, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setLoader(false)
      if (response) {
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
      setLoader(false)
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
  const handleChangeUserData = async (userData) => {

    try {
      setLoader(true)
      const {data} = await axios.patch(API_URL_EDIT_PROFILE, userData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setLoader(false)
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
      setLoader(false)
      if (error.response) {
        Swal.fire({
          title: "Error",
          text: "Hubo un error al editar el perfil",
          icon: "error",
        });
        console.log("Response Data:", error.response.data);
      }
    }
  };
  return {handleUserImage, handleChangeUserData};
};

export default useModifyUser;
