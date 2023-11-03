import {useForm, useController} from "react-hook-form";
import useServices from "../../hooks/useServices";

import Select from "react-select";
import Input from "../Shared/Input";

export default function CreateServiceForm() {
  const {handleCreateService} = useServices();
  const {
    handleSubmit,
    register,
    // setValue,
    formState: {errors},
    control,
  } = useForm({mode: "onChange"});

  const categories = [
    "-",
    "A/A",
    "Belleza",
    "Hogar",
    "Pintura",
    "Limpieza",
    "Plomeria",
    "Electricidad",
    "Fletes",
    "Barberías",
  ];

  const options = categories.map((cat, index) => ({
    value: index,
    label: `${cat}`,
  }));
  const {
    field: {value: category, onChange: categoriesOnChange},
  } = useController({name: "categoryId", control});

  return (
    <div className='w-full h-max pb-5 max-w-screen-md xl:max-w-screen-lg p-4 lg:py-0'>
      <form
        className='space-y-1 w-full h-max pb-5 mb-4'
        onSubmit={handleSubmit((newEvent) => {
          handleCreateService(newEvent);
        })}
      >
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
            labelText='Descripcion'
            type='text'
            placeholder='Escriba la descripción del servicio'
            name='description'
            register={register}
            error={errors.title?.message}
          />
        </div>
        <div>
          <div>
            <Input
              labelText='Precio'
              type='number'
              placeholder='Precio del Servicio'
              name='price'
              register={register}
              error={errors.price?.message}
            />
          </div>
          <label className='flex mb-2 ml-1 text-sm font-medium text-gray-900 dark:text-white'>
            Categoría
          </label>
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isSelected ? "black" : "black",
                }),
              }}
              placeholder='Seleccione Categoria'
              options={options}
              value={options.find((t) => t.value === category)}
              onChange={(e) => {
                const selectedCategory = e ? e.value : null;
                categoriesOnChange(selectedCategory);
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 7,
                colors: {
                  ...theme.colors,
                  background: "",
                  primary25: "grey",
                  primary: "black",
                },
              })}
              className='bg-transparent  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
          </div>

          <div>
            <Input
              labelText='Ciudad'
              type='text'
              placeholder='Ciudad donde prestas el Servicio'
              name='city'
              register={register}
              error={errors.city?.message}
            />
          </div>

          <div className='mb-3'>
            <Input
              labelText='Imagen de Portada'
              type='file'
              accept='image/jpeg,image/png,image/gif'
              placeholder='Seleccione una imagen de Portada'
              name='image'
              register={register}
              error={errors.image?.message}
            />
          </div>

          <button
            title='Crear Servicio'
            type='submit'
            className='w-40 mr-2 -ml-4  text-white  font-medium rounded-lg text-lg p-1.5 text-center bg-primary-600 hover:bg-cyan-900'
          >
            Crear Servicio →
          </button>
        </form>
      </div>
    );
  }
