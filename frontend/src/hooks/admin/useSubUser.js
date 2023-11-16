import axios from "axios";
import { API_URL_GET_SUB } from "../../config/api";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../redux/sliceLogin";
import { setSubUser } from "../../redux/admin/sliceUserSub";

const useUserSub = () => {
  const token = useSelector(getToken);

  const dispatch = useDispatch();

  const handlerUserSub = async () => {
    try {
      const { data } = await axios.get(API_URL_GET_SUB, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data) {
        dispatch(setSubUser(data));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return { handlerUserSub };
};

export default useUserSub;
