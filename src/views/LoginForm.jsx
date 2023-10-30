import logo from "../assets/images/Logo.png";
import {useForm} from "react-hook-form";
import useLogin from "../hooks/useLogin";
import useGeoLocation from "../hooks/useGeoLocation";

import Input from "../components/Shared/Input";
import ForgotPassModal from "../components/Login-SignUp/ForgotPassModal";
import RememberUser from "../components/Login-SignUp/RememberUser";
import LoginButton from "../components/Login-SignUp/LoginButton";
import RegisterLink from "../components/Login-SignUp/RegisterLink";
import ForgotPassLink from "../components/Login-SignUp/ForgotPassLink";
import GoogleLoginButton from "../components/Login-SignUp/GoogleLoginButton";

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm();

  const {handleLogin, isModalOpen, handleCloseModal, handleOpenModal} =
    useLogin();

  const {handleGeoLocation} = useGeoLocation();

  return (
    <div className='flex w-full -mt-10'>
      <section className='flex w-full h-screen items-center justify-center'>
        <div className='flex flex-col items-center justify-center ml-0 py-8 w-full md:h-screen lg:py-0'>
          <a
            href='#'
            className='flex items-center  text-2xl font-semibold text-gray-900 dark:text-white'
          >
            <img
              className='w-[300px] h-[113px] mb-2'
              src={logo}
              alt='logo'
            ></img>
          </a>
          <h1 className="font-family:'Lato-SemiBold',Helvetica font-semibold text-[#003049] text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap mb-4">
            Bienvenido!
          </h1>

          <div className='w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8 h-full w-full'>
              <h1 className="font-family:'Lato-Regular',Helvetica font-normal text-[#003049] text-[24px] text-center tracking-[0] leading-[normal]">
                Ingresa a tu Cuenta
              </h1>
              <form
                className='space-y-4 md:space-y-6'
                action='#'
                onSubmit={handleSubmit((data) => {
                  handleLogin(data);
                  handleGeoLocation();
                })}
              >
                <div>
                  <Input
                    labelText='Email'
                    type='text'
                    placeholder='Escriba su email'
                    name='email'
                    register={register}
                    error={errors.email?.message}
                    className="font-family:'Lato-SemiBold',Helvetica font-semibold text-[#003049] text-[14px] tracking-[0] leading-[norma]"
                  />
                </div>
                <div>
                  <Input
                    labelText='Password'
                    type='password'
                    placeholder='Escriba su contraseña'
                    name='password'
                    register={register}
                    error={errors.password?.message}
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <RememberUser register={register} />
                  <ForgotPassLink handleOpenModal={handleOpenModal} />
                </div>
                <div className='flex w-full items-center justify-between mb-12'>
                  <LoginButton text='Ingresar' />
                  <GoogleLoginButton />
                </div>
                <RegisterLink />
              </form>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && <ForgotPassModal onClose={handleCloseModal} />}
    </div>
  );
}
