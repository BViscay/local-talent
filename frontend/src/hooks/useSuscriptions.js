import axios from "axios";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {
  API_URL_CANCEL_SUSCRIPTION,
  API_URL_GOLDSUSCRIPTION,
  API_URL_SILVERSUSCRIPTION,
} from "../config/api";

const useSuscriptions = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSilverSuscription = async () => {
    try {
      const {data} = await axios(API_URL_SILVERSUSCRIPTION, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data) {
        window.open(data.init_point, "_blank");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoldSuscription = async () => {
    try {
      const {data} = await axios(API_URL_GOLDSUSCRIPTION, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data) {
        window.open(data.init_point, "_blank");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelSuscription = async () => {
    try {
      const {data} = await axios.patch(API_URL_CANCEL_SUSCRIPTION, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data) {
        Swal.fire({
          title: "Éxito",
          text: "Has cancelado tu suscripción 🎉",
          icon: "success",
        }).then(() => {
          navigate("/home");
          window.location.reload();
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    handleSilverSuscription,
    handleGoldSuscription,
    handleCancelSuscription,
  };
};

export default useSuscriptions;
