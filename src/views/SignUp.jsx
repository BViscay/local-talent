import { useForm } from "react-hook-form";
import useRegister from "../hooks/useRegister";
import useGeoLocation from "../hooks/useGeoLocation";
import logo from "../assets/images/Logo.png";
import InputTerms from "../components/Login-SignUp/InputTerms";
import LoginButton from "../components/Login-SignUp/LoginButton";
import GoogleLoginButton from "../components/Login-SignUp/GoogleLoginButton";
import Input from "../components/Shared/Input";

export default function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { handleRegister, showPassword, showConfirmPassword, setShowPassword, setShowConfirmPassword } = useRegister();

  const { handleGeoLocation } = useGeoLocation();

  return (
    <div>
      <div className="flex h-max justify-center items-center pb-10 gap-8">
        <div className="w-full md:w-1/2 p-4 md:h-screen lg:py-0 ">
          <div className="w-full flex justify-center pr-2">
            <img className="w-[300px] h-[113px]" src={logo} alt="logo" />
          </div>
          <h1 className="mt-10 text-3xl md:text-4xl font-semibold text-[#003049] text-center tracking-[0] leading-[normal] mb-4">
            Formulario de Registro
          </h1>
          <form
            className="h-max pb-5 space-y-1 w-4/5 ml-auto mr-auto"
            action="#"
            onSubmit={handleSubmit((data) => {
              handleRegister(data);
              handleGeoLocation();
            })}
          >
            <div>
              <Input
                labelText="Nombre"
                type="text"
                placeholder="Escriba su nombre"
                name="name"
                register={register}
                error={errors.email?.message}
              />
            </div>

            <div>
              <Input
                labelText="Apellido"
                type="text"
                placeholder="Escriba su apellido"
                name="lastName"
                register={register}
                error={errors.email?.message}
              />
            </div>

            <div>
              <Input
                labelText="Email"
                type="email"
                placeholder="Escriba su email"
                name="email"
                register={register}
                error={errors.email?.message}
              />
            </div>

            <div>
              <Input
                labelText="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Escriba su contraseña"
                name="password"
                register={register}
                error={errors.password?.message}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Ocultar Contraseña" : "Mostrar Contraseña"}
              </button>
            </div>

            <div>
              <Input
                labelText="Confirmar Password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Escriba su contraseña"
                name="confirmPassword"
                register={register}
                error={errors.password?.message}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "Ocultar Confirmación" : "Mostrar Confirmación"}
              </button>
            </div>

            <InputTerms />
            <div className="flex w-[370px] items-start pt-5 -ml-5 mb-12">
              <LoginButton text="Registrarme" />
              <GoogleLoginButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
