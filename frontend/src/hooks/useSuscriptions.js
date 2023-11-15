import axios from "axios";
import { getToken } from "../redux/sliceLogin";
import { useSelector } from "react-redux";
import {
  API_URL_CANCEL_SUSCRIPTION,
  API_URL_GOLDSUSCRIPTION,
  API_URL_SILVERSUSCRIPTION,
} from "../config/api";

const useSuscriptions = () => {
  const token = useSelector(getToken);

  const handleSilverSuscription = async () => {
    try {
      const { data } = await axios(API_URL_SILVERSUSCRIPTION, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data) {
        window.location.href = data.init_point;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoldSuscription = async () => {
    try {
      const { data } = await axios(API_URL_GOLDSUSCRIPTION, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data) {
        window.location.href = data.init_point;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelSuscription = async () => {
    try {
      const { data } = await axios(API_URL_CANCEL_SUSCRIPTION, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data) {
        window.location.href = data.init_point;
      }
    } catch (error) {
      console.error("Error during cancel subscription:", error);
    }
  };
  return {
    handleSilverSuscription,
    handleGoldSuscription,
    handleCancelSuscription,
  };
};

export default useSuscriptions;
