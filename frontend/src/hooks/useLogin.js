import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

import useLoader from './useLoader';

import {
  API_URL_LOGIN,
  API_URL_RECOVER,
  API_URL_TOKENLOGIN,
} from "../config/api";
import {useSelector, useDispatch} from "react-redux";
import {
  login,
  logout,
  isLogged,
  setAuthToken,
  setMail,
  setName,
  setLastName,
  setImage,
  setProductId,
  setRol,
} from "../redux/sliceLogin";
import Swal from "sweetalert2";
import useKey from './useKey';
import { loginFromGoogleService } from '../services/Google';

const useLogin = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña
  const isLogin = useSelector(isLogged);
  const dispatch = useDispatch();
  const redirectLogin = (navigate) =>  navigate("/home")

  const [menuOpen, setMenuOpen] = useKey('menuOpen')
  
  const { setLoader, handleLoader } = useLoader()

  const handleLogin = async (userData) => {
    const {email, password} = userData;
    const URL = API_URL_LOGIN;
    setLoader(true)
    try {
      const {data} = await axios.post(URL, {
        email: email,
        password: password,
      });
      const {token, session} = data;

      if (token) {
        localStorage.setItem("token", token);
      }

      if (token) {
        dispatch(setAuthToken(token));
        dispatch(setName(session.firstname));
        dispatch(setLastName(session.lastname));
        dispatch(setMail(session.email));
        dispatch(setImage(session.image));
        dispatch(setProductId(session.productId));
        dispatch(setRol(session.rol));
        dispatch(login());
        redirectLogin(navigate);
      }
    } catch (error) {
      dispatch(logout());
      if (error.response) {
        if (error.response.data.message === "USER_NOT_FOUND") {
          Swal.fire("Error", "Usuario Incorrecto", "error"); // SweetAlert en caso de usuario incorrecto
        } else if (error.response.data.message === "USER_REQUIRE_VALIDATE") {
          navigate("/validate");
          dispatch(setMail(email));
        } else if (error.response.data.message === "PASSWORD_INVALID") {
          Swal.fire("Error", "Password Incorrecto", "error"); // SweetAlert en caso de contraseña incorrecta
        }
      }
    }
    setLoader(false)
  };

  const handleTokenLogin = async () => {
    if (!isLogin) {
      const token = localStorage.getItem("token");
      if (token !== null) {
        try {
          const {data} = await axios.get(API_URL_TOKENLOGIN, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const {session} = data;

          if (session) {
            dispatch(setAuthToken(token));
            dispatch(setName(session.firstname));
            dispatch(setLastName(session.lastname));
            dispatch(setMail(session.email));
            dispatch(setImage(session.image));
            dispatch(setProductId(session.productId));
            dispatch(setRol(session.rol));
            dispatch(login());
            redirectLogin(navigate);
          }
        } catch (error) {
          console.log(error);
          dispatch(logout());
        }
      }
    }
  };

  const handleGoogleLogin = async (data) => {

    const { email, family_name, given_name, picture } = data

    const res = await handleLoader(loginFromGoogleService, {
      email,
      firstname: given_name,
      lastname: family_name,
      image:picture
    })

    const {session, token } = res

    if (session) {
      dispatch(setAuthToken(token));
      dispatch(setName(session.firstname));
      dispatch(setLastName(session.lastname));
      dispatch(setMail(session.email));
      dispatch(setImage(session.image));
      dispatch(setProductId(session.productId));
      dispatch(setRol(session.rol));
      dispatch(login());
      redirectLogin(navigate);
    }
  };

  const handleRecoveryPassword = async (mail) => {
    try {
      const {data} = await axios.post(`${API_URL_RECOVER}/${mail}`);

      if (data === "RESEND_SUCCESSFUL") {
        dispatch(setMail(mail));
        navigate("/validate");
      }
    } catch (error) {
      dispatch(logout());
      if (error.response) {
        Swal.fire("Error", "Usuario Incorrecto", "error"); // SweetAlert en caso de usuario incorrecto
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    Swal.fire("Éxito", "Te has deslogueado correctamente");
    setMenuOpen && setMenuOpen(false) // Cierro menú
    menuOpen && setMenuOpen(false)
    navigate('/')
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Función para alternar entre mostrar/ocultar contraseña
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return {
    handleLogin,
    handleLogout,
    handleGoogleLogin,
    handleTokenLogin,
    handleOpenModal,
    handleCloseModal,
    handleRecoveryPassword,
    isModalOpen,
    showPassword, // Estado para mostrar/ocultar contraseña
    toggleShowPassword, // Función para alternar mostrar/ocultar contraseña
  };
};

export default useLogin;
