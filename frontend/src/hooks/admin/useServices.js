import axios from "axios";
import {API_URL_GET_SERVICES} from "../../config/api";
import { getToken } from "../../redux/sliceLogin";
import { useDispatch, useSelector} from "react-redux";
import { setServices } from "../../redux/admin/sliceServices";

const useServices = () => {
  const token = useSelector(getToken);

  const dispatch = useDispatch();

  const handlerServices = async () => {
    try {
      const {data} = await axios.get(API_URL_GET_SERVICES, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (data) {
        dispatch(setServices(data))
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return {handlerServices}
};

export default useServices;