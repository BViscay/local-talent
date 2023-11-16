import axios from "axios";
import { API_URL_GET_USERS } from "../../config/api";
import { useDispatch, useSelector } from "react-redux";
import { setAllUsers } from "../../redux/admin/sliceUsers";
import { getToken } from "../../redux/sliceLogin";

const useUser = () => {
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

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

  const handlerDisableUserById = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, status: 2 } : user
    );

    dispatch(setAllUsers(updatedUsers));
  };

  const handlerEnableUserById = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, status: 1 } : user
    );
  
    dispatch(setAllUsers(updatedUsers));
  };
  

  return { handlerAllUsers, handlerDisableUserById, handlerEnableUserById };
};

export default useUser;

