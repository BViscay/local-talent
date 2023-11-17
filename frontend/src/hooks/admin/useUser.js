import axios from "axios";
import { API_URL_GET_USERS } from "../../config/api";
import { useDispatch, useSelector } from "react-redux";
import { setAllUsers } from "../../redux/admin/sliceUsers";
import { getToken } from "../../redux/sliceLogin";
import useLoader from '../useLoader';
import Swal from 'sweetalert2';
import { USER_STATUS } from '../../config/constants';

const useUser = () => {
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const { setLoader } = useLoader()

  const handlerAllUsers = async () => {
    try {
      setLoader(true)
      const { data } = await axios.get(API_URL_GET_USERS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoader(false)
      if (data) {
        dispatch(setAllUsers(data));
      }
    } catch ({ message }) {
      setLoader(false)
      Swal.fire('Error al obtener ususarios',message,'error')      
    }
  };

  const handleDisableUser = async (userId) => await updateUser(userId,USER_STATUS.DESHABILITADO)
  
  const handlerEnableUser = async (userId) => await updateUser(userId,USER_STATUS.ACTIVO)

  const updateUser = async (userId, status) => {
    console.log( userId, status)
    try {
      setLoader(true)
        const headers = { Authorization: `Bearer ${token}`}
        await axios.patch(`${API_URL_GET_USERS}/${userId}`, { status }, { headers });
        const newState = users.map( user => user.id === userId ? { ...user, status: status } : user );
        dispatch(setAllUsers(newState));
      setLoader(false)
    } catch ({ message }) {
      setLoader(false)
      Swal.fire('Error al obtener ususarios',message,'error')      
    }
  }

  return { users, handlerAllUsers, handleDisableUser, handlerEnableUser };
};

export default useUser;

