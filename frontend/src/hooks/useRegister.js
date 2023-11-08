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

const useRegister = () => {
  const dispatch = useDispatch();
  const userMail = useSelector(getMail);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    await axios
      .post(API_URL_REGISTER, {
        firstname: name,
        lastname: lastName,
        email: email,
        password: password,
      })
      .then(({data}) => {
        const {id, email} = data;

        if (id && email) {
          dispatch(setMail(email));
          dispatch(setName(name));
          dispatch(setLastName(lastName));
          navigate("/validate");
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log("Response Data:", error.response.data);
          Swal.fire("Error", "Ocurrió un error durante el registro", "error"); // SweetAlert en caso de error en el registro
        }
      });
  };

  const handleValidate = async (code) => {
    const values = Object.values(code);
    const validateCode = values.join("");

    await axios
      .post(API_URL_VALIDATE, {
        email: userMail,
        code: validateCode,
      })
      .then(({data}) => {
        const {session, token} = data;

        if (session && token) {
          navigate("/home");
          dispatch(login());
          dispatch(setAuthToken(token));
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log("Response Data:", error.response.data);
          Swal.fire("Error", "Código de validación incorrecto", "error"); // SweetAlert en caso de código de validación incorrecto
        }
      });
  };

  return {
    handleRegister,
    handleValidate,
    showPassword, // Estado para mostrar/ocultar contraseña
    showConfirmPassword, // Estado para mostrar/ocultar confirmación de contraseña
    setShowPassword, // Función para alternar mostrar/ocultar contraseña
    setShowConfirmPassword, // Función para alternar mostrar/ocultar confirmación de contraseña
  };
};

export default useRegister;
