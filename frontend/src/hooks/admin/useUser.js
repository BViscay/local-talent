import axios from "axios";
import { API_URL_GET_USERS } from "../../config/api";
import { useDispatch, useSelector } from "react-redux";
import { setAllUsers } from "../../redux/admin/sliceUsers";
import { getToken } from "../../redux/sliceLogin";

const useUser = () => {
  const token = useSelector(getToken);

  const dispatch = useDispatch();

  const handlerAllUsers = async () => {
    try {
      const { data } = await axios.get(API_URL_GET_USERS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data) {
        dispatch(setAllUsers(data));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return { handlerAllUsers };
};

export default useUser;
