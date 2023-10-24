import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_REGISTER } from "../config/api";
import { useDispatch } from "react-redux";
import { login } from "../redux/sliceLogin";

const useRegister = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRegister = async (userData) => {
    const { name, lastName, email, password, confirmPassword } = userData;

    const URL = API_URL_REGISTER;

    if (password !== confirmPassword)
      return alert("Los password deben ser Iguales");

    await axios
      .post(URL, {
        firstname: name,
        lastname: lastName,
        email: email,
        password: password,
      })
      .then(({ data }) => {
        const { password, validator } = data;

        if (password && validator) {
          dispatch(login());
          navigate("/home");
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
  };
};

export default useRegister;
