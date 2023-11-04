import {useForm} from "react-hook-form";
import Input from "../Shared/Input";
import {RefreshCcw} from "lucide-react";
import {Avatar} from "@nextui-org/react";
import {useSelector} from "react-redux";
import {getName, getLastName, getMail, getImage} from "../../redux/sliceLogin";
import useModifyUser from "../../hooks/useModifyUser";

export default function Edit() {
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm();
  const {handleUserImage} = useModifyUser();
  const onSubmit = (data) => handleUserImage(data);
  const name = useSelector(getName);
  const lastName = useSelector(getLastName);
  const mail = useSelector(getMail);
  const image = useSelector(getImage);

  return (
    <div className='flex flex-col w-full mt-5'>
      <div className='flex flex-col px-102'>
        <div className='w-full items-start justify-start ml-3 pl-3 flex pb-10 gap-4'>
          <Avatar
            className='w-16 h-16'
            src={
              image ? image : "https://i.pravatar.cc/150?u=a042581f4e29026024d"
            }
          />
          <div className='flex flex-col justify-center items-start'>
            <p className='text-xl font-medium'>
              {name} {lastName}
            </p>
            <p className='text-lg font-normal text-slate-300'>{mail}</p>
          </div>
        </div>
      </div>
      <form
        className='flex flex-col items-center'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='w-[90%]'>
          <Input
            labelText='Nombre'
            type='text'
            placeholder='Escriba el nuevo nombre'
            name='name'
            register={register}
            error={errors.name?.message}
          />
        </div>
        <div className='w-[90%]'>
          <Input
            labelText='Apellido'
            type='text'
            placeholder='Escriba el nuevo Apellido'
            name='lastName'
            register={register}
            error={errors.apellido?.message}
          />
        </div>
        <div className='w-[90%]'>
          <Input
            labelText='Email'
            type='text'
            placeholder='Escriba el nuevo email'
            name='email'
            register={register}
            error={errors.email?.message}
          />
        </div>
        <div className='w-[90%]'>
          <Input
            labelText='Ingrese su ciudad '
            type='text'
            placeholder='Facilitara encontrar servicios cercanos'
            name='city'
            register={register}
            error={errors.city?.message}
          />
        </div>
        <div className='w-[90%]'>
          <Input
            labelText='Agregar whatsApp'
            type='number'
            placeholder='Ingrese su numero'
            name='whatsApp'
            register={register}
            error={errors.whatsApp?.message}
          />
        </div>
        <div className='mb-3 w-[90%]'>
          <Input
            labelText='Actualizar Imagen'
            type='file'
            accept='image/jpeg,image/png,image/gif'
            placeholder='Seleccione la nueva imagen'
            name='image'
            register={register}
            error={errors.image?.message}
          />
        </div>
        <button
          title='Actualizar perfil'
          type='submit'
          className='flex self-center items-center justify-center w-48 mr-2 -ml-4  text-white  font-medium rounded-lg text-lg p-1.5 text-center bg-primary-600 hover:bg-cyan-900'
        >
          Actualizar Perfil
          <RefreshCcw className='mx-2' />
        </button>
      </form>
    </div>
  );
}
