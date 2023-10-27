import {useForm} from "react-hook-form";
import useRegister from "../hooks/useRegister";
import useGeoLocation from "../hooks/useGeoLocation";

import InputTerms from "../components/Login-SignUp/InputTerms";
import LoginButton from "../components/Login-SignUp/LoginButton";
import GoogleLoginButton from "../components/Login-SignUp/GoogleLoginButton";
import Input from "../components/Shared/Input";

export default function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm();

  const {handleRegister} = useRegister();

  const {handleGeoLocation} = useGeoLocation();

  return (
    <div>
      <div className='flex justify-center h-screen gap-8'>
        <div className='w-full md:w-1/2 p-4 md:h-screen lg:py-0 '>
          <h1 className='mt-10 text-3xl md:text-4xl font-semibold text-[#003049] text-center tracking-[0] leading-[normal] mb-4'>
            Formulario de Registro
          </h1>
          <form
            className=' space-y-1 w-4/5 ml-auto mr-auto'
            action='#'
            onSubmit={handleSubmit((data) => {
              handleRegister(data);
              handleGeoLocation();
            })}
          >
            <div className='mb-0'>
              <Input
                labelText='Nombre'
                type='text'
                placeholder='Escriba su nombre'
                name='name'
                register={register}
                error={errors.email?.message}
              />
            </div>

            <div>
              <Input
                labelText='Apellido'
                type='text'
                placeholder='Escriba su apellido'
                name='lastName'
                register={register}
                error={errors.email?.message}
              />
            </div>

            <div>
              <Input
                labelText='Email'
                type='email'
                placeholder='Escriba su email'
                name='email'
                register={register}
                error={errors.email?.message}
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

            <div>
              <Input
                labelText='Confirmar Password'
                type='password'
                placeholder='Escriba su contraseña'
                name='confirmPassword'
                register={register}
                error={errors.password?.message}
              />
            </div>
            <InputTerms />
            <div className='flex w-[370px] items-start justify-between pt-5 mb-12'>
              <LoginButton text='Registrarme' />
              <GoogleLoginButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
