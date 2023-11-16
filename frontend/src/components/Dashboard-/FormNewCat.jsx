import { Link } from "react-router-dom";
import Input from "../Shared/Input";
import { X } from "lucide-react";
import useNewCategory from "../../hooks/admin/useNewCategory";
import { useForm } from "react-hook-form";

export default function FormNewCat() {
  const { handleCreateCategory } = useNewCategory();

  const {
    handleSubmit,
    register,
    // formState: { errors },
  } = useForm({ mode: "onChange" });

  return (
    <div className="flex flex-col items-center w-full">
      <div className="max-w-md p-4 bg-white shadow-md rounded-md flex flex-col items-center">
        <div className="self-end mb-4">
          <Link title="cancel" to="/modifications">
            <X />
          </Link>
        </div>
        <h1 className="text-2xl font-bold mb-4">Create new category service</h1>
        <form
          className="space-y-1 w-full h-max pb-5 mb-4l"
          onSubmit={handleSubmit((newEvent) => {
            console.log("Datos del formulario:", newEvent);
            handleCreateCategory(newEvent);
          })}
        >
          <div className="flex flex-col w-full">
            <Input
              labelText="Name"
              type="text"
              name="name"
              register={register}
              className="border border-gray-300 rounded-md p-2 focus:outline-none"
              autoComplete="off"
              // error={errors.title?.message}
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              labelText="Description"
              type="text"
              name="description"
              register={register}
              className="border border-gray-300 rounded-md p-2 focus:outline-none"
              autoComplete="off"
              // error={errors.title?.message}
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              labelText="Icon"
              className="border border-gray-300 rounded-md p-2 focus:outline-none"
              type="file"
              name="icon"
              accept="image/jpeg,image/png,image/gif"
              register={register}
              // error={errors.image?.message}
            />
          </div>
          <button
            title="Crear nueva categoria"
            type="submit"
            className="w-40 text-white font-medium rounded-lg text-lg p-1.5 text-center bg-primary-600 hover:bg-cyan-900"
          >
            Crear Categ. →
          </button>
        </form>
      </div>
    </div>
  );
}
