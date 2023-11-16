import { CLIENT_ID } from "../../services/Google";
import useLogin from "../../hooks/useLogin";

import { LoginSocialGoogle } from 'reactjs-social-login';


import {  GoogleLoginButton} from 'react-social-login-buttons'

export default function GoogleLogin() {
  const { handleGoogleLogin } = useLogin();

  const onSuccess = res => handleGoogleLogin(res.data)

  const onFailure = (response) => {
    console.log(response);
  }

  return (
    <LoginSocialGoogle
      client_id={CLIENT_ID}
      scope="openid profile email"
      onResolve={onSuccess}
      onReject={onFailure}
    >
      <GoogleLoginButton />
    </LoginSocialGoogle>)
}
