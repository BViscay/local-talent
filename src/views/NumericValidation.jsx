import AuthorizationCode from "../components/Login-SignUp/AuthorizationCode";
import ResendCode from "../components/Login-SignUp/ResendCode";
import SendNumericCodeButton from "../components/Login-SignUp/SendNumericCodeButton";

export default function NumericValidation() {
  return (
    <div>
      <AuthorizationCode />
      <SendNumericCodeButton />
      <ResendCode />
    </div>
  );
}
