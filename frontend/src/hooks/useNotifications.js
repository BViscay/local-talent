import axios from "axios";
import {
  API_URL_NOTIFICATIONS,
  API_URL_COUNT_NOTIFICATIONS,
  API_URL_NEWS_NOTIFICATIONS,
} from "../config/api";
import Swal from "sweetalert2";
import {useSelector, useDispatch} from "react-redux";
import {isLogged} from "../redux/sliceLogin";
import {
  setNotifications,
  setCountNotifications,
  setFirstLoad,
  getFirstLoad,
} from "../redux/sliceLogin";

import useLoader from './useLoader';

const useNotifications = () => {
  const token = localStorage.getItem("token");
  const isLogin = useSelector(isLogged);
  const isFirstLoad = useSelector(getFirstLoad);
  const dispatch = useDispatch();

  const { setLoader } = useLoader()

  const handleCountNotifications = async () => {
    if (isFirstLoad && isLogin) {
      try {
        setLoader(true)
        const {data} = await axios.get(API_URL_COUNT_NOTIFICATIONS, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLoader(false)
        dispatch(setCountNotifications(data));
        dispatch(setFirstLoad(false));
      } catch (error) {
        setLoader(false)
        if (error.response) {
          if (isLogin) {
            Swal.fire({
              title: "Error",
              text: "Hubo un error al contar tus notificaciones nuevas 😣",
              icon: "error",
            });
            console.log("Response Data:", error.response.data);
          }
        }
      }
    }
  };

  const handleNewsNotifications = async () => {
    try {
      const {data} = await axios.get(API_URL_NEWS_NOTIFICATIONS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setNotifications(data));
    } catch (error) {
      if (isLogin) {
        if (error.response) {
          Swal.fire({
            title: "Error",
            text: "Hubo un error al buscar tus notificaciones nuevas 😣",
            icon: "error",
          });
          console.log("Response Data:", error.response.data);
        }
      }
    }
  };

  const handleReadOneNotification = async (notificationId) => {
    try {
      const {data} = await axios.patch(
        `${API_URL_NOTIFICATIONS}/${notificationId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
    } catch (error) {
      if (error.response) {
        Swal.fire({
          title: "Error",
          text: "Hubo un error al leer la notificación 😣",
          icon: "error",
        });
        console.log("Response Data:", error.response.data);
      }
    }
  };

  return {
    handleCountNotifications,
    handleNewsNotifications,
    handleReadOneNotification,
  };
};

export default useNotifications;
