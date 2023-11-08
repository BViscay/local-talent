import axios from "axios";
import {API_URL_MATCH, API_URL_OWNMATCH, API_URL_MYMATCH} from "../config/api";
import Swal from "sweetalert2";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getToken} from "../redux/sliceLogin";
import {setOwnMatches, setMyMatches} from "../redux/sliceMatches";

const useMatches = () => {
  const token = useSelector(getToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserMatch = async (serviceId, message) => {
    const matchData = {serviceId, message};

    try {
      await axios.post(API_URL_MATCH, matchData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Reemplaza alert con SweetAlert
      Swal.fire({
        title: "Éxito",
        text: "Contacto realizado correctamente 🎉",
        icon: "success",
      }).then(() => {
        navigate("/matchs");
      });
    } catch (error) {
      if (error.response) {
        Swal.fire({
          title: "Error",
          text: "Hubo un error al contactar al prestador 😣",
          icon: "error",
        });
        console.log("Response Data:", error.response.data);
      }
    }
  };

  const handleOwnMatches = async () => {
    try {
      const {data} = await axios(API_URL_OWNMATCH, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setOwnMatches(data));
    } catch (error) {
      if (error.response) {
        Swal.fire({
          title: "Error",
          text: "Aún no tenes matches 😣",
          icon: "error",
        });
        console.log("Response Data:", error.response.data);
      }
    }
  };

  const handleMyMatches = async () => {
    try {
      const {data} = await axios(API_URL_MYMATCH, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setMyMatches(data));
    } catch (error) {
      if (error.response) {
        Swal.fire({
          title: "Error",
          text: "Aún no tenes matches 😣",
          icon: "error",
        });
        console.log("Response Data:", error.response.data);
      }
    }
  };

  const handleStatusChange = async (id, status) => {

    try {
      const {data} = await axios.patch(
        `${API_URL_MATCH}?status=${status}&id=${id}`
      );
      console.log(data);
      if (data[0] === 1) {
        Swal.fire({
          title: "Éxito",
          text: "Estado cambiado correctamente 🎉",
          icon: "success",
        }).then(() => {
          navigate("/home");
          window.location.reload();
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Hubo un error cambiar el estado 😣",
          icon: "error",
        });
      }

    } catch (error) {
      if (error.response) {
        Swal.fire({
          title: "Error",
          text: "Hubo un error cambiar el estado 😣",
          icon: "error",
        });

        console.log("Response Data:", error);

      }
    }
  };

  return {
    handleUserMatch,
    handleOwnMatches,
    handleMyMatches,
    handleStatusChange,
  };
};

export default useMatches;
