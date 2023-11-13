import Input from "../Shared/Input";
import { Link } from "react-router-dom";
import { RefreshCcw, Trash2, X } from "lucide-react";

const EditCategory = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Formulario */}
      <form className="max-w-md p-4 bg-white shadow-md rounded-md flex flex-col items-center w-full">
        {/* Enlace con la X */}
        <div className="self-end mb-4 flex items-center">
          <Link title="cancel" to="/modifications">
            <X />
          </Link>
        </div>
        {/* Encabezado con imagen, párrafo y enlace */}
        <div className="max-w-md p-4 bg-white shadow-md rounded-md flex items-center mb-4">
          <div className="self-end mb-4 flex items-center">
            {/* Imagen */}
            <img
              src="url_de_la_imagen_actual"
              alt="Icono actual"
              className="w-10 h-10 rounded-full mr-4"
            />
            {/* Párrafo */}
            <p className="mr-4">Nombre actual</p>
          </div>
        </div>
        <div className="w-5/6 mb-3">
          <Input
            labelText="New name"
            type="text"
            placeholder="Escriba el nuevo nombre"
            name="NewName"
          />
        </div>

        <div className="w-5/6 mb-3">
          <Input
            labelText="New icon image"
            type="file"
            accept="image/jpeg,image/png,image/gif"
            placeholder="Seleccione la nueva imagen"
            name="image"
          />
        </div>

        {/* Botones */}
        <div className="flex space-x-4">
          <button
            title="Delete category"
            type="submit"
            className="flex items-center justify-center w-48 text-white font-medium rounded-lg text-lg p-1 text-center bg-red-500 hover:bg-red-700"
          >
            Delete Category
            <Trash2 className="mx-2" />
          </button>
          <button
            title="Update category"
            type="submit"
            className="flex items-center justify-center w-48 text-white font-medium rounded-lg text-lg p-1 text-center bg-primary-600 hover:bg-cyan-900"
          >
            Update Category
            <RefreshCcw className="mx-2" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCategory;