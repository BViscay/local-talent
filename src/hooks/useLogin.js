import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {API_URL_LOGIN} from "../config/api";
import {useSelector, useDispatch} from "react-redux";
import {
  login,
  logout,
  isLogged,
  setAuthToken,
  setMail,
  setName,
  setLastName,
} from "../redux/sliceLogin";

const useLogin = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  //eslint-disable-next-line
  const isLogin = useSelector(isLogged);
  const dispatch = useDispatch();
  const redirectLogin = (navigate) => {
    navigate("/home");
  };

  const handleLogin = async (userData) => {
    const {email, password} = userData;
    const URL = API_URL_LOGIN;

    try {
      const {data} = await axios.post(URL, {
        email: email,
        password: password,
      });
      const {token, session} = data;

      if (token) {
        dispatch(setAuthToken(token));
        dispatch(login());
        dispatch(setName(session.firstname));
        dispatch(setLastName(session.lastname));
        dispatch(setMail(session.email));
        redirectLogin(navigate);
      }
    } catch (error) {
      dispatch(logout());
      if (error.response) {
        if (error.response.data.message === "USER_NOT_FOUND") {
          alert("Usuario Incorrecto");
        } else if (error.response.data.message === "USER_REQUIRE_VALIDATE") {
          navigate("/validate");
          dispatch(setMail(email));
        } else if (error.response.data.message === "PASSWORD_INVALID") {
          alert("Password Incorrecto");
        }
      }
    }
  };

  const handleGoogleLogin = (response) => {
    console.log(response);
    if (response.credential) {
      dispatch(setAuthToken(response.credential));

      dispatch(login());
      redirectLogin(navigate);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    alert("Te deslogueaste correctamente");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return {
    handleLogin,
    handleLogout,
    handleGoogleLogin,
    handleOpenModal,
    handleCloseModal,
    isModalOpen,
  };
};

export default useLogin;