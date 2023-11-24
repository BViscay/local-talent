import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {API_URL_REGISTER, API_URL_VALIDATE} from "../config/api";
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";

import {
  login,
  setAuthToken,
  setName,
  setLastName,
  setMail,
  getMail,
} from "../redux/sliceLogin";
import useLoader from "./useLoader";
import useKey from "./useKey";

const useRegister = () => {
  const dispatch = useDispatch();
  const userMail = useSelector(getMail);

  const navigate = useNavigate();

  const {setLoader} = useLoader();

  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [menuOpen, setMenuOpen] = useKey("menuOpen");

  const handleRegister = async (userData) => {
    const {name, lastName, email, password, confirmPassword} = userData;

    if (!name) {
      Swal.fire("Error", "El nombre es necesario", "error");
      return;
    }

    if (!lastName) {
      Swal.fire("Error", "El apellido es necesario", "error");
      return;
    }
    // Validar que la contraseña tenga al menos 8 dígitos y un carácter
    //eslint-disable-next-line
    const passwordRegex = /^(?=.*[A-Za-z0-9])(?=.*[.*+\/]).{8,}$/;
    if (!password.match(passwordRegex)) {
      Swal.fire(
        "Error",
        "La contraseña debe contener al menos 8 dígitos y un carácter especial (., *, +)",
        "error"
      );
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire("Error", "Las contraseñas deben ser iguales", "error");
      return;
    }

    setLoader(true);
    await axios
      .post(API_URL_REGISTER, {
        firstname: name,
        lastname: lastName,
        email: email,
        password: password,
      })
      .then(({data}) => {
        const {id, email} = data;
        setLoader(false);
        if (id && email) {
          dispatch(setMail(email));
          dispatch(setName(name));
          dispatch(setLastName(lastName));
          navigate("/validate");
        }
      })
      .catch((error) => {
        setLoader(false);
        if (error.response) {
          console.log("Response Data:", error.response.data);
          Swal.fire("Error", "Ocurrió un error durante el registro", "error"); // SweetAlert en caso de error en el registro
        }
      });
  };

  const handleValidate = async (code) => {
    const values = Object.values(code);
    const validateCode = values.join("");
    setLoader(true);
    await axios
      .post(API_URL_VALIDATE, {
        email: userMail,
        code: validateCode,
      })
      .then(({data}) => {
        setLoader(false);
        const {session, token} = data;
        if (session && token) {
          localStorage.setItem("token", token);
          dispatch(login());
          dispatch(setAuthToken(token));
          navigate("/home");
          setMenuOpen && setMenuOpen(false); // Cierro menú
          menuOpen && setMenuOpen(false);
        }
      })
      .catch((error) => {
        setLoader(false);
        if (error.response) {
          console.log("Response Data:", error.response.data);
          Swal.fire("Error", "Código de validación incorrecto", "error");
        }
      });
  };

  return {
    handleRegister,
    handleValidate,
    showPassword,
    showConfirmPassword,
    setShowPassword,
    setShowConfirmPassword,
  };
};

export default useRegister;
