import { useForm } from "react-hook-form";
import Input from "../Shared/Input";

export default function Edit() {
  const { handleSubmit, register,formState: {errors}} = useForm();
  const onSubmit = (data) => console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
          <Input
            labelText='Titulo'
            type='text'
            placeholder='Escriba el nombre del servicio'
            name='title'
            register={register}
            error={errors.title?.message}
          />
        </div>
        <div>
          <Input
            labelText='Titulo'
            type='text'
            placeholder='Escriba el nombre del servicio'
            name='title'
            register={register}
            error={errors.title?.message}
          />
        </div>
        <div>
          <Input
            labelText='Titulo'
            type='text'
            placeholder='Escriba el nombre del servicio'
            name='title'
            register={register}
            error={errors.title?.message}
          />
        </div>
        <div>
          <Input
            labelText='Titulo'
            type='text'
            placeholder='Escriba el nombre del servicio'
            name='title'
            register={register}
            error={errors.title?.message}
          />
        </div>
      <input type="submit" />
    </form>
  );
}
