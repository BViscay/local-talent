import axios from "axios";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getToken} from "../redux/sliceLogin";
import {API_URL_SERVICE_RATING, API_URL_USER_RATING} from "../config/api";
import Swal from "sweetalert2";
import useLoader from "./useLoader";

const useQualifications = () => {
  const {setLoader} = useLoader();
  const token = useSelector(getToken);
  const navigate = useNavigate();

  const handleUserRating = async (matchId, score, comment) => {
    const ratingInfo = {matchId, score, comment};
    console.log(ratingInfo)
    try {
      setLoader(true);
      await axios.post(API_URL_USER_RATING, ratingInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoader(false);
      Swal.fire({
        title: "Gracias",
        text: "Calificaste correctamente 🎉",
        icon: "success",
      }).then(() => {
        navigate("/home");
      });
    } catch (error) {
      setLoader(false);
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

  const handleServiceRating = async (matchId, score, comment) => {
    const ratingInfo = {matchId, score, comment};
    console.log(ratingInfo)
    try {
      setLoader(true);
      await axios.post(API_URL_SERVICE_RATING, ratingInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoader(false);
      Swal.fire({
        title: "Gracias",
        text: "Calificaste correctamente 🎉",
        icon: "success",
      }).then(() => {
        navigate("/home");
      });
    } catch (error) {
      setLoader(false);
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

  return {handleUserRating, handleServiceRating};
};

export default useQualifications;
