import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_REGISTER, API_URL_VALIDATE } from "../config/api";
import { useDispatch, useSelector } from "react-redux";
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

  const handleRegister = async (userData) => {
    const { name, lastName, email, password, confirmPassword } = userData;

    if (password !== confirmPassword)
      return alert("Los password deben ser Iguales");

    await axios
      .post(API_URL_REGISTER, {
        firstname: name,
        lastname: lastName,
        email: email,
        password: password,
      })
      .then(({ data }) => {
        const { id, email } = data;

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
      .then(({ data }) => {
        const { session, token } = data;

        if (session && token) {
          navigate("/home");
          dispatch(login());
          dispatch(setAuthToken(token));
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log("Response Data:", error.response.data);
        }
      });
  };

  return {
    handleRegister,
    handleValidate,
  };
};

export default useRegister;
