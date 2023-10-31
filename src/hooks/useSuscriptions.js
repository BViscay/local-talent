import axios from "axios";
import {getToken} from "../redux/sliceLogin";
import {useSelector} from "react-redux";
import {
  API_URL_GOLDSUSCRIPTION,
  API_URL_SILVERSUSCRIPTION,
} from "../config/api";

const useSuscriptions = () => {
    const token = useSelector(getToken);
    
  const handleSilverSuscription = async () => {
    try {
      const {data} = await axios(API_URL_SILVERSUSCRIPTION, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoldSuscription = async () => {
    try {
      const {data} = await axios(API_URL_GOLDSUSCRIPTION);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {handleSilverSuscription, handleGoldSuscription};
};

export default useSuscriptions;
